"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Spaces (Coming Soon)", href: "/spaces" },
    { name: "App", href: "/app" },
    { name: "Merch", href: "/merch" },
    { name: "Community", href: "/community" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/_official3andm?igsh=MXUxaXM1cnk5OWl1bw%3D%3D&utm_source=qr",
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#020256] border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left - Logo & Description */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 text-center sm:text-left">
                                {/* Logo Image */}
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                                    <Image
                                        src="/third-and-manageable-logo.png"
                                        alt="Third & Manageable Logo"
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                    <span className="font-light">THIRD</span>
                                    <span className="text-white/40 mx-1 sm:mx-2">&</span>
                                    <span>MANAGEABLE</span>
                                </h3>
                            </div>
                            <p className="text-white/40 max-w-md leading-relaxed text-sm sm:text-base text-center sm:text-left">
                                A wellness and transition platform for athletes who are moving
                                out of competitive sports and into the next phase of their lives.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right - Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                        <motion.a
                            href="https://apps.apple.com/app/third-and-manageable"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center gap-3 px-6 py-3 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-[10px] opacity-70">Download on the</div>
                                <div className="text-sm font-semibold -mt-0.5">App Store</div>
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://play.google.com/store/apps/details?id=com.thirdandmanageable"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-3 px-6 py-3 bg-white text-[#040485] rounded-xl hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-[10px] opacity-70">Get it on</div>
                                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-white/40 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Legal Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-white/30 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-white/30">
                        (c) {new Date().getFullYear()} Third & Manageable. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
