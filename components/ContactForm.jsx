"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/Icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // TODO: send it (server action + email). For now it only logs.
    console.log("Form submitted:", formData);
  }

  return (
    <section
      id="contact"
      className="bg-[var(--bg)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border bg-card p-8 shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] sm:p-10 lg:p-12">
          {/* Heading */}
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">Kontaktai</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Susisiekime!
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
              Turite klausimų ar norite aptarti savo projektą? Užpildykite
              formą ir su Jumis susisieksime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Vardas
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jūsų vardas"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                El. paštas<span className="ml-1 text-[var(--accent)]">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vardas@email.lt"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Telefonas
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+370"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Žinutė
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Jūsų žinutė..."
                rows={6}
                required
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full text-base"
            >
              Siųsti žinutę
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}