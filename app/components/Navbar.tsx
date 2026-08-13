"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/75 dark:shadow-black/30">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Galang Sopyan - Home"
            className="group relative flex items-center gap-2"
          >
            {/* Logo Mark */}
            <div
              className="
      relative
      flex
      h-9
      w-9
      items-center
      justify-center
      overflow-hidden
      rounded-xl
      bg-zinc-950
      shadow-lg
      shadow-violet-500/10
      transition-all
      duration-300
      group-hover:-translate-y-0.5
      group-hover:rounded-[14px]
      group-hover:shadow-xl
      group-hover:shadow-violet-500/20
      dark:bg-white
    "
            >
              {/* Gradient shine */}
              <div
                className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-500
        via-indigo-500
        to-cyan-400
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
              />

              {/* GS */}
              <span
                className="
        relative
        z-10
        text-[13px]
        font-black
        tracking-[-0.08em]
        text-white
        dark:text-zinc-950
      "
              >
                GS
              </span>
            </div>

            {/* Brand name */}
            <div className="block">
              <div
                className="
        text-sm
        font-black
        leading-none
        tracking-[-0.04em]
        text-zinc-950
        dark:text-white
      "
              >
                GALANG
              </div>

              <div
                className="
        mt-0.5
        text-[8px]
        font-medium
        uppercase
        tracking-[0.22em]
        text-zinc-400
      "
              >
                Developer
              </div>
            </div>

            {/* Small accent */}
            <span
              className="
      absolute
      -right-1
      -top-1
      h-1.5
      w-1.5
      rounded-full
      bg-gradient-to-r
      from-violet-500
      to-cyan-400
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-125
    "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-500/25 dark:bg-white dark:text-zinc-950 dark:hover:bg-violet-400 sm:block"
            >
              Let's Talk
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition hover:border-violet-500 hover:text-violet-600 dark:border-zinc-800 lg:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
