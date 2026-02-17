"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                    className="absolute inset-0 opacity-[0.03]"
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
                        background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
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
                            className="object-contain invert brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-6"
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
                    <span className="text-muted mx-1 sm:mx-3">&</span>
                    <br className="sm:hidden" />
                    <span>MANAGEABLE</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl text-muted font-light max-w-3xl mx-auto mb-12"
                >
                    Translate discipline into direction.
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    A wellness and transition platform for athletes who are ready to build
                    their next chapter with confidence, structure, and community.
                </motion.p>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    id="download"
                >
                    {/* iOS Button */}
                    <motion.a
                        href="#"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                            <div className="text-xs opacity-70">Download on the</div>
                            <div className="text-lg font-semibold -mt-1">App Store</div>
                        </div>
                    </motion.a>

                    {/* Android Button */}
                    <motion.a
                        href="#"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                            <div className="text-xs opacity-70">Get it on</div>
                            <div className="text-lg font-semibold -mt-1">Google Play</div>
                        </div>
                    </motion.a>
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
                    className="flex flex-col items-center gap-2 text-muted"
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
