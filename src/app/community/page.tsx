"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ChatIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const HandshakeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GroupIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const HomeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const communityPillars = [
    {
        title: "Shared Experiences",
        description: "Connect with athletes who truly understand what you're going through. No explanations needed.",
        icon: ChatIcon
    },
    {
        title: "Peer Accountability",
        description: "Stay on track with support from those walking the same path. Together we're stronger.",
        icon: HandshakeIcon
    },
    {
        title: "Group Conversations",
        description: "Join discussions, share stories, and learn from each other's transitions.",
        icon: GroupIcon
    },
    {
        title: "Cultural Belonging",
        description: "Feel at home in a community that speaks your language and respects your journey.",
        icon: HomeIcon
    }
];

const testimonials = [
    {
        quote: "Finally, a place where I don't have to explain why leaving sports feels like losing a part of myself.",
        author: "Former D1 Athlete"
    },
    {
        quote: "The community here gets it. We're all figuring out who we are beyond the game.",
        author: "Retired Professional"
    },
    {
        quote: "It's like having teammates again, but for life.",
        author: "College Athlete"
    }
];

export default function CommunityPage() {
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

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="relative w-24 h-24 mx-auto">
                                <Image
                                    src="/third-and-manageable-logo.png"
                                    alt="Third & Manageable Logo"
                                    fill
                                    className="object-contain invert brightness-0 invert"
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                        >
                            The Heart of the Brand
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Your{" "}
                            <span className="font-light">Team</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Community is the heart of everything we do. Because athletes thrive in teams,
                            not in isolation.
                        </motion.p>
                    </div>
                </section>

                {/* Pillars */}
                <section className="section-alt" ref={ref}>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                                Community Pillars
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Across the app and physical spaces, community connects everything.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {communityPillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="p-8 bg-black text-white rounded-2xl hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="mb-4 text-white"><pillar.icon /></div>
                                    <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                                    <p className="text-gray-400 text-lg">{pillar.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-3xl md:text-4xl font-bold mb-16"
                        >
                            From the Community
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 border border-white/20 rounded-2xl"
                                >
                                    <p className="text-lg mb-6 text-gray-300">&quot;{testimonial.quote}&quot;</p>
                                    <p className="text-sm text-gray-500">— {testimonial.author}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-24 px-6 bg-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
                            &quot;You don&apos;t need to be broken.{" "}
                            <span className="font-light text-gray-500">You just need a bridge.</span>&quot;
                        </p>
                    </motion.div>
                </section>

                {/* Join CTA */}
                <section className="py-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Community</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Be part of a movement that understands where you've been and supports where you're going.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            Get Started
                        </a>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
