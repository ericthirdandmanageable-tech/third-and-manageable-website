"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GITHUB_OWNER = "ericthirdandmanageable-tech";
const GITHUB_REPO = "third-and-manageable-website";
const REVIEW_SUBMISSION_LABEL = "review-submission";
const REVIEW_PUBLISHED_LABEL = "review-approved";
const PUBLISHED_REVIEWS_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues?state=open&labels=${encodeURIComponent(REVIEW_PUBLISHED_LABEL)}&per_page=30&sort=created&direction=desc`;

type GitHubIssue = {
    id: number;
    html_url: string;
    title: string;
    body: string | null;
    created_at: string;
    user: {
        login: string;
    };
    pull_request?: unknown;
};

type PublishedReview = {
    id: number;
    name: string;
    rating: number;
    review: string;
    createdAt: string;
    sourceUrl: string;
};

type ReviewFormState = {
    name: string;
    platform: string;
    rating: number;
    review: string;
};

const INITIAL_FORM_STATE: ReviewFormState = {
    name: "",
    platform: "iOS",
    rating: 0,
    review: "",
};

function clampRating(value: number): number {
    if (Number.isNaN(value)) return 5;
    return Math.max(1, Math.min(5, value));
}

function extractSingleLineField(body: string, fieldName: string): string | null {
    const pattern = new RegExp(`^${fieldName}:\\s*(.+)$`, "im");
    const match = body.match(pattern);
    return match?.[1]?.trim() ?? null;
}

function extractReviewText(body: string): string {
    const match = body.match(/Review:\s*([\s\S]*?)(?:\n[A-Za-z][A-Za-z ]+:\s.*|$)/i);
    if (!match?.[1]) {
        return body.trim();
    }
    return match[1].trim();
}

function parsePublishedReview(issue: GitHubIssue): PublishedReview | null {
    if (issue.pull_request) {
        return null;
    }

    const body = issue.body ?? "";
    const name = extractSingleLineField(body, "Name") || issue.user.login;
    const ratingRaw = extractSingleLineField(body, "Rating");
    const rating = clampRating(Number.parseInt(ratingRaw ?? "5", 10));
    const review = extractReviewText(body);

    if (!review) {
        return null;
    }

    return {
        id: issue.id,
        name,
        rating,
        review,
        createdAt: issue.created_at,
        sourceUrl: issue.html_url,
    };
}

function StarIcon({ filled, className = "w-6 h-6" }: { filled: boolean; className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.8}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.022 6.218a1 1 0 00.95.69h6.537c.969 0 1.371 1.24.588 1.81l-5.288 3.842a1 1 0 00-.364 1.118l2.02 6.216c.3.922-.755 1.688-1.54 1.118l-5.288-3.842a1 1 0 00-1.176 0L6.144 23.02c-.784.57-1.838-.196-1.539-1.118l2.02-6.216a1 1 0 00-.364-1.118L.973 10.726c-.783-.57-.38-1.81.588-1.81h6.537a1 1 0 00.95-.69l2.001-6.299z"
            />
        </svg>
    );
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<PublishedReview[]>([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [form, setForm] = useState<ReviewFormState>(INITIAL_FORM_STATE);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitStarted, setSubmitStarted] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function loadPublishedReviews() {
            setIsLoadingReviews(true);
            setLoadError(null);

            try {
                const response = await fetch(PUBLISHED_REVIEWS_API, {
                    headers: {
                        Accept: "application/vnd.github+json",
                    },
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }

                const issues = (await response.json()) as GitHubIssue[];
                const parsedReviews = issues
                    .map(parsePublishedReview)
                    .filter((review): review is PublishedReview => review !== null);

                setReviews(parsedReviews);
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }
                console.error(error);
                setLoadError("Published reviews could not be loaded right now.");
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoadingReviews(false);
                }
            }
        }

        loadPublishedReviews();

        return () => {
            controller.abort();
        };
    }, []);

    const averageRating = useMemo(() => {
        if (reviews.length === 0) {
            return null;
        }
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    }, [reviews]);

    function openGitHubSubmission() {
        const trimmedReview = form.review.trim();

        if (form.rating < 1 || form.rating > 5) {
            setSubmitError("Please choose a star rating before submitting.");
            return;
        }

        if (trimmedReview.length < 20) {
            setSubmitError("Please write at least 20 characters so the review is useful.");
            return;
        }

        setSubmitError(null);

        const reviewerName = form.name.trim() || "Anonymous";
        const issueTitle = `Review Submission: ${form.rating}/5 from ${reviewerName}`;
        const issueBody = [
            "## App Review Submission",
            `Name: ${reviewerName}`,
            `Rating: ${form.rating}`,
            `Platform: ${form.platform}`,
            "Review:",
            trimmedReview,
            "",
            "Consent: I agree this review may be published on thirdandmanageable.com.",
        ].join("\n");

        const issueUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues/new?labels=${encodeURIComponent(
            REVIEW_SUBMISSION_LABEL
        )}&title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

        window.open(issueUrl, "_blank", "noopener,noreferrer");
        setSubmitStarted(true);
        setForm((previous) => ({
            ...previous,
            review: "",
            rating: 0,
        }));
    }

    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="section">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase mb-5">
                                Community Feedback
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                                App Reviews
                            </h1>
                            <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto">
                                Leave a rating and review for the app. Submissions go to a moderation queue before publication.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                            <motion.section
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8"
                            >
                                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold">Published Reviews</h2>
                                        <p className="text-white/50 mt-1">
                                            Approved by the Third & Manageable moderation team.
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs uppercase tracking-widest text-white/40">Average Rating</p>
                                        <p className="text-2xl font-bold">
                                            {averageRating ? `${averageRating}/5` : "N/A"}
                                        </p>
                                    </div>
                                </div>

                                {isLoadingReviews && (
                                    <p className="text-white/50">Loading published reviews...</p>
                                )}

                                {!isLoadingReviews && loadError && (
                                    <p className="text-red-300">{loadError}</p>
                                )}

                                {!isLoadingReviews && !loadError && reviews.length === 0 && (
                                    <p className="text-white/50">No published reviews yet. Be the first to submit one.</p>
                                )}

                                {!isLoadingReviews && !loadError && reviews.length > 0 && (
                                    <div className="space-y-4">
                                        {reviews.map((review) => (
                                            <article
                                                key={review.id}
                                                className="rounded-xl border border-white/10 bg-white/5 p-5"
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                                    <p className="font-semibold">{review.name}</p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex text-yellow-300">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <StarIcon
                                                                    key={star}
                                                                    filled={star <= review.rating}
                                                                    className="w-4 h-4"
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-white/40">
                                                            {new Date(review.createdAt).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-white/70 leading-relaxed whitespace-pre-wrap">
                                                    {review.review}
                                                </p>
                                                <a
                                                    href={review.sourceUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-3 inline-block text-xs text-white/40 hover:text-white link-underline"
                                                >
                                                    View moderation source
                                                </a>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">Leave a Review</h2>
                                <p className="text-white/55 mb-8">
                                    Your submission opens GitHub in a new tab with your review prefilled.
                                </p>

                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        openGitHubSubmission();
                                    }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label htmlFor="reviewer-name" className="block text-sm text-white/70 mb-2">
                                            Name (optional)
                                        </label>
                                        <input
                                            id="reviewer-name"
                                            type="text"
                                            value={form.name}
                                            onChange={(event) =>
                                                setForm((previous) => ({ ...previous, name: event.target.value }))
                                            }
                                            placeholder="Anonymous"
                                            className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-white/60 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="review-platform" className="block text-sm text-white/70 mb-2">
                                            Platform
                                        </label>
                                        <select
                                            id="review-platform"
                                            value={form.platform}
                                            onChange={(event) =>
                                                setForm((previous) => ({ ...previous, platform: event.target.value }))
                                            }
                                            className="w-full rounded-xl border border-white/20 bg-[#020256] px-4 py-3 text-white outline-none focus:border-white/60 transition-colors"
                                        >
                                            <option value="iOS">iOS</option>
                                            <option value="Android">Android</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p className="block text-sm text-white/70 mb-2">Rating</p>
                                        <div className="flex items-center gap-1 text-yellow-300">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() =>
                                                        setForm((previous) => ({ ...previous, rating: star }))
                                                    }
                                                    aria-label={`Set rating to ${star} star${star > 1 ? "s" : ""}`}
                                                    className="p-1 hover:scale-110 transition-transform"
                                                >
                                                    <StarIcon filled={star <= form.rating} />
                                                </button>
                                            ))}
                                            <span className="ml-2 text-sm text-white/60">
                                                {form.rating > 0 ? `${form.rating}/5` : "Choose rating"}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="review-text" className="block text-sm text-white/70 mb-2">
                                            Review
                                        </label>
                                        <textarea
                                            id="review-text"
                                            value={form.review}
                                            onChange={(event) =>
                                                setForm((previous) => ({ ...previous, review: event.target.value }))
                                            }
                                            rows={6}
                                            placeholder="Share your experience with the app..."
                                            className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-white/60 transition-colors resize-none"
                                        />
                                    </div>

                                    {submitError && <p className="text-red-300 text-sm">{submitError}</p>}

                                    {submitStarted && (
                                        <p className="text-green-300 text-sm">
                                            GitHub opened in a new tab. Submit the issue there to finish your review.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-white text-[#040485] font-semibold px-5 py-3 hover:bg-gray-100 transition-colors"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </motion.section>
                        </div>
                    </div>
                </section>

                <section className="section-alt">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#040485] mb-4">
                            No-Backend Moderation Workflow
                        </h2>
                        <p className="text-[#040485]/65 text-lg mb-8 max-w-4xl">
                            One moderator can fully control publication directly in GitHub, without building a custom server.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-[#040485]/15 bg-white p-6">
                                <p className="text-sm uppercase tracking-widest text-[#040485]/45 mb-3">Moderator Steps</p>
                                <ol className="space-y-3 text-[#040485]/75">
                                    <li>1. New submissions arrive as GitHub issues with label <code>review-submission</code>.</li>
                                    <li>2. Check whether the review is legitimate.</li>
                                    <li>3. Add label <code>review-approved</code> to publish on this page.</li>
                                    <li>4. Close or delete issues that are spam or not legitimate.</li>
                                </ol>
                            </div>
                            <div className="rounded-2xl border border-[#040485]/15 bg-white p-6">
                                <p className="text-sm uppercase tracking-widest text-[#040485]/45 mb-3">Quick Access</p>
                                <div className="space-y-3">
                                    <a
                                        href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(
                                            REVIEW_SUBMISSION_LABEL
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-[#040485] font-medium link-underline"
                                    >
                                        Open moderation queue
                                    </a>
                                    <a
                                        href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(
                                            REVIEW_PUBLISHED_LABEL
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-[#040485] font-medium link-underline"
                                    >
                                        Open published reviews label
                                    </a>
                                    <Link href="/app" className="block text-[#040485] font-medium link-underline">
                                        Back to app page
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
