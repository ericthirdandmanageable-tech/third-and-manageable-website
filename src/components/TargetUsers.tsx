"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const userTraits = [
    "Have stepped away from competitive sports",
    "Feel loss of identity, structure, or community",
    "Want support without feeling judged or \"fixed\"",
    "Are capable and motivated but unsure of next steps",
    "Miss being part of a team environment",
];

export default function TargetUsers() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="community" className="section bg-black">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium tracking-widest uppercase text-muted mb-4 block">
                            Who It's For
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Built for Athletes<br />
                            <span className="font-light text-gray-400">In Transition</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            Third & Manageable is designed for former or transitioning athletes
                            who are looking for a new framework to build their next chapter
                            with confidence.
                        </p>

                        {/* CTA */}
                        <motion.a
                            href="#download"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Your Journey
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right Content - Trait Cards */}
                    <div className="space-y-4">
                        {userTraits.map((trait, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="flex-shrink-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <p className="text-white">{trait}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
