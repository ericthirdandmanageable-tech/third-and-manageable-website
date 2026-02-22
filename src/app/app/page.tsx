"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrainIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const RefreshIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

const ClipboardIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const ChartIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const TargetIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const appFeatures = [
    {
        title: "Daily Mindset Guidance",
        description: "Start each day with structured prompts designed to keep athletes focused and grounded.",
        icon: BrainIcon
    },
    {
        title: "Identity & Transition Prompts",
        description: "Thoughtful exercises to help you rediscover who you are beyond the sport.",
        icon: RefreshIcon
    },
    {
        title: "Routine-Building Tools",
        description: "Replace the structure of training schedules with purposeful daily routines.",
        icon: ClipboardIcon
    },
    {
        title: "Progress Tracking",
        description: "Simple, visual tracking to celebrate your wins and maintain momentum.",
        icon: ChartIcon
    },
    {
        title: "Mental Reset Content",
        description: "Quick exercises and content designed specifically for the athlete mindset.",
        icon: TargetIcon
    },
    {
        title: "Community Connection",
        description: "Connect with peers going through similar transitions.",
        icon: UsersIcon
    }
];

export default function AppPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(6,6,184,0.3) 0%, transparent 70%)",
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                        >
                            Digital Foundation
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            The{" "}
                            <span className="font-light">Mobile App</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12"
                        >
                            Daily mindset guidance, identity exercises, and routine-building tools
                            designed with an athlete-first approach. Structured, grounded, and action-oriented.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="https://apps.apple.com/app/third-and-manageable"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-70">Download on the</div>
                                    <div className="text-lg font-semibold -mt-1">App Store</div>
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.thirdandmanageable"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-70">Get it on</div>
                                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mt-6"
                        >
                            <Link
                                href="/reviews"
                                className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                Rate the App
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* App Screenshots Showcase */}
                <section className="py-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative h-[600px] md:h-[800px] max-w-sm mx-auto rounded-3xl overflow-hidden group shadow-2xl shadow-[#040485]/30">
                            <Image
                                src="/app-welcome-screen.png"
                                alt="Third & Manageable App Home Screen"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/40 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Your Daily Companion
                                </h3>
                                <p className="text-lg text-white/70">
                                    Check-in, build routines, and connect — all in one place
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Individual Screenshots Row */}
                <section className="pb-16 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src="/app-welcome-screen.png"
                                alt="Home Screen"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/80 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-bold text-lg">Home Dashboard</p>
                                <p className="text-white/60 text-sm">Your daily game plan at a glance</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src="/app-checkin-screen.png"
                                alt="Daily Check-in Screen"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/80 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-bold text-lg">Daily Check-In</p>
                                <p className="text-white/60 text-sm">Track your mindset daily</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src="/app-community-screen.png"
                                alt="Community Chat Screen"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/80 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-bold text-lg">Community Chat</p>
                                <p className="text-white/60 text-sm">Connect with fellow athletes</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="section-alt" ref={ref}>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#040485]">
                                Built for Athletes
                            </h2>
                            <p className="text-lg text-[#040485]/60 max-w-2xl mx-auto">
                                Every feature designed with the athlete mindset in mind. Structured, action-oriented, and familiar.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {appFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="p-8 bg-[#040485] text-white rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#040485]/20"
                                >
                                    <div className="mb-4 text-white"><feature.icon /></div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-white/50">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tone Section */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6"
                        >
                            App Tone
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {["Structured", "Grounded", "Familiar", "Action-Oriented"].map((trait, index) => (
                                <span
                                    key={index}
                                    className="px-6 py-3 border border-white/20 rounded-full text-lg font-medium hover:bg-white/5 transition-colors"
                                >
                                    {trait}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
