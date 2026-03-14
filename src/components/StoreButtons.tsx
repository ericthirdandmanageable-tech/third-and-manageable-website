"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";

const IOS_APP_STORE_URL = "https://apps.apple.com/us/app/third-manageable/id6759578111";

type StoreButtonsProps = {
    id?: string;
    className?: string;
    compact?: boolean;
};

function AppleIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function PlayIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}

export default function StoreButtons({ id, className = "", compact = false }: StoreButtonsProps) {
    const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
    const modalId = useId();
    const modalTitleId = `${modalId}-title`;

    useEffect(() => {
        if (!isAndroidModalOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsAndroidModalOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isAndroidModalOpen]);

    const buttonClasses = compact
        ? "flex items-center gap-3 px-6 py-3 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10"
        : "group flex items-center gap-3 px-8 py-4 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10";
    const iconClassName = compact ? "w-6 h-6" : "w-8 h-8";
    const kickerClassName = compact ? "text-[10px] opacity-70" : "text-xs opacity-70";
    const titleClassName = compact ? "text-sm font-semibold -mt-0.5" : "text-lg font-semibold -mt-1";

    return (
        <>
            <div id={id} className={`flex flex-col sm:flex-row gap-4 ${className}`.trim()}>
                <motion.a
                    href={IOS_APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <AppleIcon className={iconClassName} />
                    <div className="text-left">
                        <div className={kickerClassName}>Download on the</div>
                        <div className={titleClassName}>App Store</div>
                    </div>
                </motion.a>

                <motion.button
                    type="button"
                    className={buttonClasses}
                    onClick={() => setIsAndroidModalOpen(true)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    aria-haspopup="dialog"
                    aria-expanded={isAndroidModalOpen}
                    aria-controls={modalId}
                >
                    <PlayIcon className={iconClassName} />
                    <div className="text-left">
                        <div className={kickerClassName}>Coming soon on</div>
                        <div className={titleClassName}>Google Play</div>
                    </div>
                </motion.button>
            </div>

            <AnimatePresence>
                {isAndroidModalOpen ? (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.button
                            type="button"
                            className="absolute inset-0 bg-[#010132]/75 backdrop-blur-md"
                            onClick={() => setIsAndroidModalOpen(false)}
                            aria-label="Close Android coming soon dialog"
                        />

                        <motion.div
                            id={modalId}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={modalTitleId}
                            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(234,239,255,0.94))] p-8 text-[#040485] shadow-[0_30px_80px_rgba(1,1,50,0.45)]"
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 18, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0606b8]/15 blur-3xl" />
                            <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#040485]/10 blur-3xl" />

                            <button
                                type="button"
                                onClick={() => setIsAndroidModalOpen(false)}
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#040485]/6 text-[#040485]/70 transition-colors hover:bg-[#040485]/10 hover:text-[#040485]"
                                aria-label="Close Android coming soon dialog"
                            >
                                <CloseIcon />
                            </button>

                            <div className="relative">
                                <div className="mb-4 inline-flex items-center rounded-full border border-[#040485]/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#040485]/60">
                                    Android release
                                </div>

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#040485] text-white shadow-lg shadow-[#040485]/20">
                                    <PlayIcon className="h-8 w-8" />
                                </div>

                                <h3 id={modalTitleId} className="text-3xl font-semibold tracking-tight">
                                    Coming soon
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#040485]/70">
                                    The Android version of Third &amp; Manageable is on the way. We&apos;re
                                    putting the final polish on the release experience now.
                                </p>

                                <div className="mt-6 rounded-2xl border border-[#040485]/10 bg-white/75 p-4">
                                    <p className="text-sm font-medium text-[#040485]">
                                        iPhone users can download the app today from the App Store.
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={IOS_APP_STORE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-xl bg-[#040485] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0606b8]"
                                    >
                                        Open App Store
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setIsAndroidModalOpen(false)}
                                        className="inline-flex items-center justify-center rounded-xl border border-[#040485]/15 px-5 py-3 text-sm font-semibold text-[#040485] transition-colors hover:bg-[#040485]/5"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
