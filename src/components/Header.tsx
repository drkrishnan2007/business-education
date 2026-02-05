'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-serif text-[#5b21b6] hover:text-[#7c3aed] transition-colors"
          >
            <Image src="/images/logo-icon-guru.png" alt="" width={32} height={32} className="rounded" />
            Business Wisdom
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-[#5b21b6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/foundations"
                className="text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
              >
                Foundations
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/foundations"
                className="block text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Foundations
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="block text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-[#5b21b6] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
