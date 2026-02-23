"use client";

import { motion } from "framer-motion";
import {
    addDoc,
    collection,
    limit,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    Timestamp,
} from "firebase/firestore";
import { FormEvent, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db, isFirebaseConfigured, missingFirebaseVars } from "@/lib/firebase";

type Review = {
    id: string;
    name: string;
    platform: string;
    rating: number;
    text: string;
    createdAtMs: number;
};

type ReviewDoc = {
    name?: string;
    platform?: string;
    rating?: number;
    text?: string;
    createdAt?: Timestamp | null;
    clientCreatedAt?: number;
};

type ReviewForm = {
    name: string;
    platform: string;
    rating: number;
    text: string;
};

const INITIAL_FORM: ReviewForm = {
    name: "",
    platform: "iOS",
    rating: 0,
    text: "",
};

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
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<ReviewForm>(INITIAL_FORM);
    const [formError, setFormError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isFirebaseConfigured || !db) {
            setLoadError("Firebase is not configured yet.");
            setIsLoading(false);
            return;
        }

        const reviewsQuery = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(100));

        const unsubscribe = onSnapshot(
            reviewsQuery,
            (snapshot) => {
                const nextReviews = snapshot.docs.map((doc) => {
                    const data = doc.data() as ReviewDoc;
                    const createdAtMs = data.createdAt instanceof Timestamp
                        ? data.createdAt.toDate().getTime()
                        : (typeof data.clientCreatedAt === "number" ? data.clientCreatedAt : Date.now());

                    return {
                        id: doc.id,
                        name: (data.name || "Anonymous").trim() || "Anonymous",
                        platform: data.platform || "Unknown",
                        rating: Math.max(1, Math.min(5, Number(data.rating ?? 5))),
                        text: data.text || "",
                        createdAtMs,
                    };
                });

                setReviews(nextReviews);
                setIsLoading(false);
                setLoadError(null);
            },
            (error) => {
                console.error("Failed to load reviews:", error);
                setLoadError("Unable to load reviews right now.");
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const averageRating = useMemo(() => {
        if (reviews.length === 0) {
            return null;
        }
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    }, [reviews]);

    function closeModal() {
        if (isSubmitting) {
            return;
        }
        setIsModalOpen(false);
        setFormError(null);
    }

    async function submitReview(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFirebaseConfigured || !db) {
            setFormError("Firebase is not configured yet.");
            return;
        }

        const reviewText = form.text.trim();
        if (form.rating < 1 || form.rating > 5) {
            setFormError("Please select a star rating.");
            return;
        }

        if (reviewText.length < 10) {
            setFormError("Please write at least 10 characters.");
            return;
        }

        setIsSubmitting(true);
        setFormError(null);

        try {
            await addDoc(collection(db, "reviews"), {
                name: form.name.trim() || "Anonymous",
                platform: form.platform,
                rating: form.rating,
                text: reviewText,
                createdAt: serverTimestamp(),
                clientCreatedAt: Date.now(),
            });

            setForm(INITIAL_FORM);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Failed to submit review:", error);
            setFormError("Could not submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                            <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto mb-8">
                                Post a review and it appears here right away.
                            </p>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#040485] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Post a Review
                            </button>
                        </motion.div>

                        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
                            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Latest Reviews</h2>
                                    <p className="text-white/50 mt-1">
                                        {reviews.length} total review{reviews.length === 1 ? "" : "s"}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-widest text-white/40">Average Rating</p>
                                    <p className="text-2xl font-bold">
                                        {averageRating ? `${averageRating}/5` : "N/A"}
                                    </p>
                                </div>
                            </div>

                            {isLoading && <p className="text-white/50">Loading reviews...</p>}

                            {!isLoading && loadError && (
                                <div className="rounded-xl border border-red-300/40 bg-red-300/10 p-4 text-red-200">
                                    <p>{loadError}</p>
                                    {!isFirebaseConfigured && missingFirebaseVars.length > 0 && (
                                        <p className="text-xs mt-2">
                                            Missing env vars: {missingFirebaseVars.join(", ")}
                                        </p>
                                    )}
                                </div>
                            )}

                            {!isLoading && !loadError && reviews.length === 0 && (
                                <div className="text-center py-10">
                                    <p className="text-white/55 mb-5">No reviews yet. Be the first to post one.</p>
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        Post the First Review
                                    </button>
                                </div>
                            )}

                            {!isLoading && !loadError && reviews.length > 0 && (
                                <div className="space-y-4">
                                    {reviews.map((review) => (
                                        <article
                                            key={review.id}
                                            className="rounded-xl border border-white/10 bg-white/5 p-5"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                                <div>
                                                    <p className="font-semibold">{review.name}</p>
                                                    <p className="text-xs text-white/45">{review.platform}</p>
                                                </div>
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
                                                        {new Date(review.createdAtMs).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-white/75 leading-relaxed whitespace-pre-wrap">
                                                {review.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8">
                    <button
                        type="button"
                        aria-label="Close review modal"
                        className="absolute inset-0 bg-black/70"
                        onClick={closeModal}
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative z-10 w-full max-w-xl rounded-2xl border border-white/20 bg-[#040485] p-6 md:p-8 shadow-2xl"
                    >
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">Post a Review</h2>
                                <p className="text-white/55 mt-1">Share your app experience.</p>
                            </div>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-white/70 hover:text-white text-2xl leading-none"
                                aria-label="Close"
                            >
                                x
                            </button>
                        </div>

                        <form onSubmit={submitReview} className="space-y-5">
                            <div>
                                <label htmlFor="review-name" className="block text-sm text-white/70 mb-2">
                                    Name (optional)
                                </label>
                                <input
                                    id="review-name"
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
                                            onClick={() => setForm((previous) => ({ ...previous, rating: star }))}
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
                                    value={form.text}
                                    onChange={(event) =>
                                        setForm((previous) => ({ ...previous, text: event.target.value }))
                                    }
                                    rows={6}
                                    placeholder="Tell us what you think about the app..."
                                    className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-white/60 transition-colors resize-none"
                                />
                            </div>

                            {formError && <p className="text-red-300 text-sm">{formError}</p>}

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl border border-white/30 text-white/80 font-semibold px-5 py-3 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl bg-white text-[#040485] font-semibold px-5 py-3 hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Review"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
