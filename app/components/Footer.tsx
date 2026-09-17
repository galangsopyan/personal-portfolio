"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    short: "GH",
    href: "https://github.com/galangsopyan",
  },
  {
    label: "Instagram",
    short: "IG",
    href: "https://www.instagram.com/galangsopyan_28/",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/galang-sopyan/",
  },
  {
    label: "YouTube",
    short: "YT",
    href: "https://www.youtube.com/",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-zinc-200/70 bg-white dark:border-white/10 dark:bg-zinc-950">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT ================= */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* ================= BRAND ================= */}
          <div>
            <Link
              href="/"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-sm font-bold text-zinc-900 transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:group-hover:border-violet-500 dark:group-hover:bg-violet-500">
                GS
              </div>

              {/* Brand Name */}
              <div>
                <p className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white">
                  GALANG SOPYAN
                </p>

                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Web Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Web Developer yang berfokus pada pembuatan website modern,
              responsive, dan scalable menggunakan teknologi web modern.
            </p>

            {/* ================= SOCIAL ================= */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-bold text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-violet-500 dark:hover:bg-violet-500 dark:hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
              Navigation
            </p>

            <nav className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between text-sm text-zinc-600 transition-colors duration-300 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <a
                href="mailto:galangsopyan05@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:group-hover:border-violet-500 dark:group-hover:bg-violet-500 dark:group-hover:text-white">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-zinc-700 transition-colors group-hover:text-violet-600 dark:text-zinc-300 dark:group-hover:text-violet-400">
                    galangsopyan05@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6285766724430"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-bold text-zinc-600 transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:group-hover:border-violet-500 dark:group-hover:bg-violet-500 dark:group-hover:text-white">
                  WA
                </div>

                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-zinc-700 transition-colors group-hover:text-violet-600 dark:text-zinc-300 dark:group-hover:text-violet-400">
                    +62 857-6726-7430
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 h-px bg-zinc-200 dark:bg-white/10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-xs leading-6 text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Galang Sopyan. All rights reserved.
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-500 hover:text-white sm:self-auto dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-violet-500 dark:hover:bg-violet-500 dark:hover:text-white"
          >
            Back to top

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}