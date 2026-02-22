"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
    "They lose daily structure and routine",
    "Their identity was deeply tied to performance",
    "They miss team environments and accountability",
    "They appear high-functioning outwardly but feel internally uncertain",
    "Traditional mental health or career services feel clinical or disconnected from athlete culture",
];

export default function ProblemSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-alt">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-[#040485]/50 mb-4 block">
                        The Challenge
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#040485]">
                        Why Athletes Struggle
                    </h2>
                    <p className="text-lg md:text-xl text-[#040485]/60 max-w-3xl mx-auto">
                        Many athletes struggle after leaving sports because the transition removes
                        everything that once defined them.
                    </p>
                </motion.div>

                {/* Problems List */}
                <div className="grid gap-4 md:gap-6 max-w-3xl mx-auto mb-16">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-[#040485]/5 rounded-xl border border-[#040485]/10 hover:border-[#040485]/30 transition-colors"
                        >
                            <span className="flex-shrink-0 w-8 h-8 bg-[#040485] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </span>
                            <p className="text-lg text-[#040485]/80">{problem}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Positioning Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block p-8 md:p-12 bg-[#040485] text-white rounded-2xl shadow-xl shadow-[#040485]/20">
                        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
                            Our Position
                        </p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                            Third & Manageable is a{" "}
                            <span className="font-bold">bridge</span>, not a repair shop.
                        </p>
                        <p className="text-xl md:text-2xl text-white/60 mt-6 font-light italic">
                            &quot;You&apos;re not broken. You just need direction.&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
