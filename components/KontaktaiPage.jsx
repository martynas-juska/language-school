"use client";

import { useState } from "react";
import Container from "@/components/Container";

const contactDetails = {
  address: "Gedemino 11, Vilnius",
  email: "info@lertman.lt",
  phone: "+370 000 00000",
};

export default function KontaktaiSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <section className="relative min-h-[calc(100svh-90px)] overflow-hidden bg-[var(--bg-top)]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/[0.08] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--accent)]/[0.03] blur-[130px]"
      />

      <Container>
        <div className="grid min-h-[calc(100svh-90px)] items-center gap-14 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-12">
          {/* LEFT */}
          <div className="max-w-md">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Lertman
            </span>

            <h1 className="mt-4 text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl">
              Kontaktai
            </h1>

            <div className="mt-10 border-t border-white/10">
              <ContactRow
                label="Adresas"
                value={contactDetails.address}
                icon={<LocationIcon />}
              />

              <ContactRow
                label="El. paštas"
                value={contactDetails.email}
                href={`mailto:${contactDetails.email}`}
                icon={<EmailIcon />}
              />

              <ContactRow
                label="Telefonas"
                value={contactDetails.phone}
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                icon={<PhoneIcon />}
                last
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Glow behind panel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 bg-[var(--accent)]/[0.045] blur-[70px]"
            />

            {/* Gradient border */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-white/15 via-[var(--accent)]/15 to-white/[0.04] p-px">
              {/* Glass panel */}
              <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#091421]/80 px-7 py-7 backdrop-blur-xl sm:px-9 sm:py-8 lg:px-10">
                {/* Internal glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[var(--accent)]/[0.08] blur-[90px]"
                />

                {/* Top accent */}
                <div className="absolute left-10 top-0 h-px w-28 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

                <div className="relative">
                  <ContactForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactForm({ formData, onChange, onSubmit }) {
  const inputClass =
    "w-full border-b border-white/15 bg-transparent pb-3 pt-2 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/25 focus:border-[var(--accent)]";

  const labelClass =
    "block text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--text-secondary)]";

  return (
    <form onSubmit={onSubmit} className="w-full">
      {/* Heading */}
      <div className="mb-7">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Parašykite mums
        </span>

        <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-[2.15rem]">
          Kuo galime padėti?
        </h2>
      </div>

      {/* Name + Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Vardas
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            placeholder="Jūsų vardas"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            El. paštas *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={onChange}
            placeholder="vardas@email.lt"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div className="mt-6">
        <label htmlFor="phone" className={labelClass}>
          Telefonas
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          placeholder="+370"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          Žinutė
        </label>

        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={onChange}
          placeholder="Jūsų žinutė..."
          className={`${inputClass} min-h-[84px] resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="mt-7 flex items-center justify-between">
        <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
          * Privalomas laukas
        </span>

        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[#07101C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--icon-hover)] hover:shadow-[0_10px_30px_rgba(78,159,166,0.22)]"
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
  );
}

function ContactRow({ label, value, href, icon, last = false }) {
  const content = (
    <div
      className={`group flex items-center gap-5 py-6 ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/[0.06]">
        {icon}
      </div>

      <div>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
          {label}
        </span>

        <span className="mt-1.5 block text-lg font-medium text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function LocationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 3H5.8C4.8 3 4 3.8 4 4.8C4 13.2 10.8 20 19.2 20C20.2 20 21 19.2 21 18.2V16.5L16.5 15L15.4 17.2C12.1 15.8 9.2 12.9 7.8 9.6L10 8.5L7.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
