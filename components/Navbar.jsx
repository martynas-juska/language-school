"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav";
import Container from "@/components/Container";

export default function Navbar() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname; // closes by itself when you go to another page
  const isCurrent = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold text-foreground" style={{ fontStretch: "112%" }}>
          Kalbų Mokykla
        </Link>

        <nav aria-label="Pagrindinis meniu" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpenOn(open ? null : pathname)}
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Uždaryti meniu" : "Meniu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`my-1.5 block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            aria-label="Mobilus meniu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t bg-background md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  onClick={() => setOpenOn(null)}
                  className="rounded-md px-2 py-2.5 text-foreground hover:bg-highlight aria-[current=page]:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}