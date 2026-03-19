'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Anvaya
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/experiences" className="text-sm text-foreground hover:text-primary transition">
            Experiences
          </Link>
          <Link href="#gallery" className="text-sm text-foreground hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/about" className="text-sm text-foreground hover:text-primary transition">
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/request-trip" className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition inline-block">
            Request a Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="px-4 py-4 space-y-4">
            <Link href="/experiences" className="block text-sm text-foreground hover:text-primary transition">
              Experiences
            </Link>
            <Link href="#gallery" className="block text-sm text-foreground hover:text-primary transition">
              Gallery
            </Link>
            <Link href="/about" className="block text-sm text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/request-trip" className="w-full inline-block text-center bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition">
              Request a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
