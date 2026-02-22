"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
    {
        number: "01",
        title: "Mobile App",
        subtitle: "Foundation",
        description: "The first entry point providing daily mindset guidance, identity and transition prompts, routine-building tools, mental reset practices, and simple, repeatable structures that replace lost training schedules.",
        features: [
            "Daily mindset guidance",
            "Identity and transition prompts",
            "Routine-building tools",
            "Mental reset practices",
        ],
        note: "Supportive, familiar, and action-based — not clinical or diagnostic.",
    },
    {
        number: "02",
        title: "Structure & Direction",
        subtitle: "Building Habits",
        description: "As athletes engage with the app, they rebuild daily rhythm, set short actionable goals, track progress, and re-establish personal discipline outside sport.",
        features: [
            "Rebuild daily rhythm",
            "Set short actionable goals",
            "Track progress",
            "Re-establish discipline",
        ],
        note: "Turning athletic habits into life-direction habits.",
    },
    {
        number: "03",
        title: "Community & Physical Spaces",
        subtitle: "Belonging",
        description: "As the platform expands, athletes gain access to peer communities, group accountability, shared experiences, and in-person physical spaces that feel like athlete environments.",
        features: [
            "Peer communities",
            "Group accountability",
            "Shared experiences",
            "Physical wellness hubs",
        ],
        note: "Recreating the locker-room sense of belonging in a new life context.",
    },
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-it-works" className="section-alt">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-[#040485]/50 mb-4 block">
                        The Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#040485]">
                        How It Works
                    </h2>
                    <p className="text-lg md:text-xl text-[#040485]/60 max-w-3xl mx-auto">
                        A phased approach that meets athletes where they are and guides them
                        to where they want to be.
                    </p>
                </motion.div>

                {/* Phases */}
                <div className="space-y-8 md:space-y-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                            className="group"
                        >
                            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-[#040485]/5 border border-[#040485]/10 hover:border-[#040485]/30 transition-colors">
                                {/* Phase Number */}
                                <div className="md:col-span-2">
                                    <span className="text-6xl md:text-7xl font-bold text-[#040485]/15 group-hover:text-[#040485] transition-colors duration-300">
                                        {phase.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-6">
                                    <p className="text-sm font-medium tracking-widest uppercase text-[#040485]/50 mb-2">
                                        Phase {phase.number} — {phase.subtitle}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#040485] mb-4">
                                        {phase.title}
                                    </h3>
                                    <p className="text-[#040485]/60 leading-relaxed mb-4">
                                        {phase.description}
                                    </p>
                                    <p className="text-sm italic text-[#040485]/40">
                                        {phase.note}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="md:col-span-4">
                                    <p className="text-sm font-medium text-[#040485]/50 mb-3">
                                        Key Elements
                                    </p>
                                    <ul className="space-y-2">
                                        {phase.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[#040485]/70">
                                                <span className="w-1.5 h-1.5 bg-[#040485] rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < phases.length - 1 && (
                                <div className="flex justify-center py-4">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={isInView ? { height: 40 } : {}}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                                        className="w-px bg-[#040485]/20"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
