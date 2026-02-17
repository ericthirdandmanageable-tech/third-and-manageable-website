"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merchCategories = [
    {
        title: "Apparel",
        description: "Premium clothing that represents the athlete identity and Third & Manageable culture.",
        items: ["T-Shirts", "Hoodies", "Joggers", "Caps"]
    },
    {
        title: "Lifestyle Products",
        description: "Everyday essentials for the transitioning athlete lifestyle.",
        items: ["Water Bottles", "Gym Bags", "Journals", "Drinkware"]
    },
    {
        title: "Accessories",
        description: "Branded accessories to carry the culture with you.",
        items: ["Wristbands", "Stickers", "Lanyards", "Keychains"]
    }
];

export default function MerchPage() {
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
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                        >
                            Lifestyle Brand
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Wear the{" "}
                            <span className="font-light">Culture</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Premium merchandise that extends the Third & Manageable identity beyond our physical spaces.
                            Represent the culture wherever you go.
                        </motion.p>
                    </div>
                </section>

                {/* Main Merch Image */}
                <section className="py-12 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group">
                            <Image
                                src="/merch.jpg"
                                alt="Third & Manageable Merchandise"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    Premium Quality
                                </h3>
                                <p className="text-xl text-gray-300">
                                    Designed for athletes, by athletes
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Categories */}
                <section className="section-alt" ref={ref}>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                                Product Collections
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Available in our physical lounges and online. Each piece reinforces identity and community.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {merchCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                                    className="p-8 bg-black text-white rounded-2xl"
                                >
                                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                                    <p className="text-gray-400 mb-6">{category.description}</p>
                                    <ul className="space-y-2">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coming Soon */}
                <section className="py-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block p-12 border border-white/20 rounded-3xl">
                            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
                                Online Store
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
                            <p className="text-gray-400">
                                Join the waitlist to be first to shop the collection.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
