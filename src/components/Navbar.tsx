"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Benefits", href: "/benefits" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/80 transition-colors">
                        <Leaf className="text-white" size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        Agro<span className="text-primary">Nexus</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-white/80"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn-primary py-2 px-6 rounded-full text-sm font-semibold"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-nav animate-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col p-6 gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg font-medium ${pathname === link.href ? "text-primary" : "text-white"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary py-3 px-6 rounded-xl text-center font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
