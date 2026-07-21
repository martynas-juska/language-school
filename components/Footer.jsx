import Link from "next/link";
import { navLinks } from "@/lib/nav";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold">Kalbų Mokykla</p>
          <p className="mt-1 text-sm text-gray-600">
            Kalbų kursai ir paslaugos
          </p>
        </div>

        <nav className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-gray-200 py-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Kalbų Mokykla. Visos teisės saugomos.
        </p>
      </Container>
    </footer>
  );
}