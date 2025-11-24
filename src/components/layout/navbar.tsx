"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight"
        >
          FlowTask
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="btn btn-primary px-1 py-2"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-6 gap-4 container-custom">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="divider my-2" />
            <Link href="/login" className="text-base font-medium">
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-base font-medium text-accent"
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
