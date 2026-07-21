"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/nav";
import Container from "@/components/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Kalbų Mokykla
        </Link>

        {/* Desktop */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Meniu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-black mb-1.5" />
          <span className="block h-0.5 w-6 bg-black mb-1.5" />
          <span className="block h-0.5 w-6 bg-black" />
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <Container className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}