"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Spaces (Coming Soon)", href: "/spaces" },
    { name: "App", href: "/app" },
    { name: "Merch", href: "/merch" },
    { name: "Community", href: "/community" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 flex-shrink-0 group hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                        {/* Logo Image */}
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            <Image
                                src="/third-and-manageable-logo.png"
                                alt="Third & Manageable Logo"
                                fill
                                className="object-contain brightness-0 invert"
                                priority
                            />
                        </div>
                        <span className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
                            <span className="font-light">THIRD</span>
                            <span className="text-white/50 mx-1 sm:mx-2">&</span>
                            <span>M.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-5 py-2.5 text-sm font-medium text-white overflow-hidden group rounded-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
                            >
                                {/* Background fill on hover */}
                                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-md" />
                                {/* Text */}
                                <span className="relative z-10 group-hover:text-[#040485] transition-colors duration-300">
                                    {link.name}
                                </span>
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="#download"
                            className="ml-4 px-6 py-2.5 bg-white text-[#040485] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 6 : 0,
                            }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                            }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -6 : 0,
                            }}
                            className="w-6 h-0.5 bg-white block"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#040485] pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-light text-white hover:text-white/70 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#download"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-white text-[#040485] text-lg font-semibold rounded-md"
                            >
                                Get Started
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
