"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ApieMusFinalCTA() {
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

    // Connect this to your email/API later.
    console.log(formData);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[var(--bg-top)] py-24 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.06] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/[0.025] blur-[140px]"
      />

      <Container>
        {/* TOP LABEL */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Kitas žingsnis
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 xl:gap-28">
          {/* LEFT */}
          <div className="max-w-xl lg:sticky lg:top-32">
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kalba gali
              <br />
              atverti daugiau
              <br />
              <span className="text-[var(--accent)]">galimybių.</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--text-body)]">
              Nesvarbu, ar mokotės dėl darbo, gyvenimo užsienyje, studijų ar
              asmeninio tikslo – papasakokite, ko norite pasiekti.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--accent)]" />

              <span className="text-sm text-[var(--text-secondary)]">
                Pradėkime nuo pokalbio.
              </span>
            </div>
          </div>

          {/* FORM BORDER */}
          <div className="rounded-[2rem] bg-gradient-to-br from-white/15 via-[var(--accent)]/15 to-white/[0.04] p-px">
            {/* FORM */}
            <div className="rounded-[calc(2rem-1px)] bg-[#091421]/80 p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="mb-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Susisiekite
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Kuo galime padėti?
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                {/* NAME + EMAIL */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Vardas"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jūsų vardas"
                  />

                  <FormField
                    label="El. paštas"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vardas@email.lt"
                  />
                </div>

                {/* PHONE */}
                <div className="mt-6">
                  <FormField
                    label="Telefonas"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+370"
                  />
                </div>

                {/* MESSAGE */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
                  >
                    Žinutė
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Papasakokite, ko norėtumėte išmokti..."
                    className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-[var(--accent)]"
                  />
                </div>

                {/* BOTTOM */}
                <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-[var(--text-secondary)]">
                    * Privalomas laukas
                  </span>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-[#07101C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--icon-hover)] hover:shadow-[0_12px_35px_rgba(78,159,166,0.22)]"
                  >
                    <span>Siųsti žinutę</span>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M4 10H16M11 5L16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM DETAIL */}
        <div className="mt-20 flex items-center gap-6 border-t border-white/10 pt-7">
          <p className="text-sm text-[var(--text-secondary)]">
            Individualus mokymasis. Realūs tikslai. Praktinės žinios.
          </p>

          <span className="hidden h-px flex-1 bg-white/[0.05] sm:block" />

          <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 sm:block">
            Lertman
          </span>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--accent)]">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-[var(--accent)]"
      />
    </div>
  );
}