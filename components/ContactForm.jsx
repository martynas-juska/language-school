"use client";

import { useState } from "react";

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

    // TODO: Connect this to your backend / email service.
    console.log("Form submitted:", formData);
  }

  return (
    <section
      id="contact"
      className="bg-[var(--bg)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[32px] border border-[var(--card-border)] bg-[var(--card)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-10 lg:p-14">
          {/* Heading */}
          <div>
            {/* <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Susisiekime
            </span> */}

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Susisiekime!
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
              Turite klausimų ar norite aptarti savo projektą? Užpildykite
              formą ir su Jumis susisieksime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-white/10 bg-[var(--bg)] px-5 py-4 text-white outline-none transition-all placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email<span className="ml-1 text-[var(--accent)]">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-white/10 bg-[var(--bg)] px-5 py-4 text-white outline-none transition-all placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-white"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+370 ..."
                className="w-full rounded-2xl border border-white/10 bg-[var(--bg)] px-5 py-4 text-white outline-none transition-all placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-[var(--bg)] px-5 py-4 text-white outline-none transition-all placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:shadow-[0_15px_40px_var(--hero-glow)] active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}