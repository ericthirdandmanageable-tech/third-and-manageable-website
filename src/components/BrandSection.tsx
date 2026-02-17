"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const brandTraits = [
    { trait: "Culture-driven", description: "Rooted in athlete culture" },
    { trait: "Athlete-first", description: "Designed by those who understand" },
    { trait: "Structured but warm", description: "Discipline with empathy" },
    { trait: "Action-oriented", description: "Progress through doing" },
    { trait: "Non-clinical", description: "Support without labels" },
    { trait: "Confident but grounded", description: "Strong yet humble" },
];

export default function BrandSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-alt">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4 block">
                        Our Identity
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                        Brand Personality
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Third & Manageable isn't therapy, isn't a motivational brand, and isn't
                        a traditional wellness app. It's designed to feel familiar to athlete culture.
                    </p>
                </motion.div>

                {/* Brand Traits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brandTraits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="group p-8 bg-black text-white rounded-2xl hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-2">{item.trait}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-8 md:p-12 border-2 border-black rounded-2xl">
                        {/* Logo in mission card */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                            <Image
                                src="/third-and-manageable-logo.png"
                                alt="Third & Manageable Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
                            The Mission
                        </p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                            Help athletes translate<br />
                            <span className="font-light">discipline into direction.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
