"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StoreButtons from "@/components/StoreButtons";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Spaces (Coming Soon)", href: "/spaces" },
    { name: "App", href: "/app" },
    { name: "Reviews", href: "/reviews" },
    { name: "Support", href: "/support" },
    { name: "Merch", href: "/merch" },
    { name: "Community", href: "/community" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Account Deletion", href: "/account-deletion" },
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <StoreButtons compact className="md:justify-end" />
                        </motion.div>
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
                        {"\u00A9"} {new Date().getFullYear()} Third & Manageable. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
