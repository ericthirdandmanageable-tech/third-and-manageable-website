"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
    {
        title: "Digital Support",
        subtitle: "Mobile App",
        description: "Daily mindset guidance, identity prompts, routine-building tools, and mental reset practices designed specifically for athletes.",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Physical Spaces (Coming Soon)",
        subtitle: "Brick-and-Mortar",
        description: "Wellness environments that feel familiar to athletes, coming soon and designed for structured, purposeful community connection.",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Community Networks",
        subtitle: "Accountability",
        description: "Peer communities and group accountability that recreate the locker-room sense of belonging in a new life context.",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

const restores = [
    "Mindset stability",
    "Daily structure",
    "Identity beyond sport",
    "Purposeful forward movement",
];

export default function SolutionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section bg-[#040485]">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4 block">
                        The Solution
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Three Connected Experiences
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
                        Third & Manageable combines digital, physical (coming soon), and community elements
                        to create a comprehensive support system.
                    </p>
                </motion.div>

                {/* Solution Cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                {solution.icon}
                            </div>
                            <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">
                                {solution.subtitle}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                {solution.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* What It Restores */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-8">
                        These Elements Work Together to Restore
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {restores.map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                                className="px-6 py-3 bg-white text-[#040485] rounded-full text-sm md:text-base font-medium"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
