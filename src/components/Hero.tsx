"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StoreButtons from "@/components/StoreButtons";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                {/* Gradient orb */}
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
                {/* Secondary orb */}
                <motion.div
                    className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(6,6,184,0.15) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Floating Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto"
                    >
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
                        <Image
                            src="/third-and-manageable-logo.png"
                            alt="Third & Manageable Logo"
                            fill
                            className="object-contain brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/60 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                >
                    For Athletes in Transition
                </motion.p>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 px-2"
                >
                    <span className="font-light">THIRD</span>
                    <span className="text-white/50 mx-1 sm:mx-3">&</span>
                    <br className="sm:hidden" />
                    <span>MANAGEABLE</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl text-white/60 font-light max-w-3xl mx-auto mb-12"
                >
                    Translate discipline into direction.
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-12"
                >
                    A wellness and transition platform for athletes who are ready to build
                    their next chapter with confidence, structure, and community.
                </motion.p>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="w-full"
                >
                    <StoreButtons id="download" className="justify-center items-center" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/40"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
