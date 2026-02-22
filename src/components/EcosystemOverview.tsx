"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BuildingIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const ShirtIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v5m0-9h-1M6.9 6.05c.09.02.18.04.28.06l.17.03h.02c.98.2 1.94.47 2.87.82 1.48-1.55 3.51-2.53 5.76-2.53 2.25 0 4.28.98 5.76 2.53.93-.35 1.89-.62 2.87-.82h.02l.17-.03c.09-.02.19-.04.28-.06M3 7l2 8v4a1 1 0 001 1h12a1 1 0 001-1v-4l2-8M7 7h10" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ecosystemItems = [
    {
        title: "Physical Spaces (Coming Soon)",
        description: "Community wellness lounges designed for athletes",
        href: "/spaces",
        image: "/store.jpg",
        icon: BuildingIcon,
        comingSoon: true
    },
    {
        title: "Mobile App",
        description: "Daily mindset and structure tools",
        href: "/app",
        image: "/app-welcome-screen.png",
        icon: PhoneIcon,
        comingSoon: false
    },
    {
        title: "Merchandise",
        description: "Premium lifestyle brand and apparel",
        href: "/merch",
        image: "/merch.jpg",
        icon: ShirtIcon,
        comingSoon: true
    },
    {
        title: "Community",
        description: "Peer connection and accountability",
        href: "/community",
        image: "/athlete-community.png",
        icon: UsersIcon,
        comingSoon: false
    }
];

export default function EcosystemOverview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 px-6" id="ecosystem" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4 block">
                        The Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        More Than an App
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
                        Third & Manageable combines digital tools, physical spaces (coming soon), merchandise,
                        and community into one unified experience.
                    </p>
                </motion.div>

                {/* Ecosystem Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ecosystemItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="block group relative h-[300px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                {/* Background Image or Gradient */}
                                {item.image ? (
                                    <>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#040485] via-[#040485]/70 to-transparent" />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/15 transition-colors duration-300" />
                                )}

                                {/* Coming Soon Badge */}
                                {item.comingSoon && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="coming-soon-badge">Coming Soon</span>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                    <div className="mb-3 text-white"><item.icon /></div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                                        {item.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#040485] transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
