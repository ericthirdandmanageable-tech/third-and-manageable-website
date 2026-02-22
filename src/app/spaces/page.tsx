"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DrinkIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const TvIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const CoffeeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const features = [
    {
        title: "Smoothie & Wellness Bar",
        description: "Premium smoothies, healthy snacks, and wellness beverages crafted for peak performance and recovery.",
        icon: DrinkIcon,
        comingSoon: true
    },
    {
        title: "Live Sports Viewing",
        description: "Multiple screens showing live games, keeping you connected to the sports world you know and love.",
        icon: TvIcon,
        comingSoon: true
    },
    {
        title: "Community Events",
        description: "Regular meetups, watch parties, and networking events designed for athletes and former athletes.",
        icon: UsersIcon,
        comingSoon: true
    },
    {
        title: "Relaxed Atmosphere",
        description: "A welcoming space to decompress, connect with peers, or simply enjoy a moment of calm.",
        icon: CoffeeIcon,
        comingSoon: true
    }
];

export default function SpacesPage() {
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
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6"
                        >
                            <span className="coming-soon-badge text-sm px-4 py-1.5">Coming Soon</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                        >
                            Physical Wellness Lounges (Coming Soon)
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Your New{" "}
                            <span className="font-light">Locker Room</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto"
                        >
                            Community-driven wellness lounges designed specifically for athletes and former athletes, coming soon.
                            A place where you will belong.
                        </motion.p>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {/* Main Image */}
                            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                                <Image
                                    src="/store.jpg"
                                    alt="Third & Manageable Wellness Lounge"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Premium Atmosphere</h3>
                                    <p className="text-white/70">Upscale sports-lounge vibes centered on wellness</p>
                                </div>
                            </div>

                            {/* Secondary Images */}
                            <div className="grid gap-6">
                                <div className="relative h-[240px] rounded-2xl overflow-hidden group">
                                    <Image
                                        src="/store2.jpg"
                                        alt="Wellness Lounge Interior"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold text-white">Community Hub</h3>
                                    </div>
                                </div>
                                <div className="relative h-[240px] rounded-2xl overflow-hidden group">
                                    <Image
                                        src="/coffeearea.jpg"
                                        alt="Coffee and Relaxation Area"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#040485]/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold text-white">Relaxation Zone</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features */}
                <section className="section-alt" ref={ref}>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#040485]">
                                More Than a Cafe (Coming Soon)
                            </h2>
                            <p className="text-lg text-[#040485]/60 max-w-2xl mx-auto">
                                Each location is coming soon and recreates the locker-room sense of belonging in everyday life.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="relative p-8 bg-[#040485] text-white rounded-2xl shadow-lg shadow-[#040485]/20"
                                >
                                    {feature.comingSoon && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white text-[#040485] text-xs font-bold tracking-wider uppercase rounded-full">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                    <div className="mb-4">{<feature.icon />}</div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-white/50">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            &quot;Think of it as an upscale sports-lounge atmosphere centered on{" "}
                            <span className="font-light text-white/50">wellness, connection, and culture</span>{" "}
                            â€” not therapy.&quot;
                        </p>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}


