import Link from "next/link";
import { navLinks } from "@/lib/nav";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-[var(--bg)]">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">Lertman</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Kalbų kursai ir paslaugos
          </p>
        </div>

        <nav className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-border py-4">
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Lertman. Visos teisės saugomos.
        </p>
      </Container>
    </footer>
  );
}