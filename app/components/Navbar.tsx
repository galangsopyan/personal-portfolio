"use client";

import {
  ArrowUpRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <>
      {/* ========================================================
          AMBIENT GLOW
      ======================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          left-1/2
          top-0
          z-40
          h-24
          w-[500px]
          -translate-x-1/2
          bg-violet-500/[0.06]
          blur-[90px]
          sm:h-32
          sm:w-[700px]
          sm:blur-[100px]
        "
      />

      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          px-3
          pt-3
          sm:px-6
          sm:pt-4
          lg:px-8
        "
      >
        <nav
          className="
            relative
            mx-auto
            flex
            h-[60px]
            w-full
            max-w-[1320px]
            items-center
            rounded-[19px]
            border
            border-white/[0.09]
            bg-zinc-950/80
            px-2.5
            shadow-[0_16px_50px_rgba(0,0,0,0.32)]
            backdrop-blur-2xl
            sm:h-[68px]
            sm:rounded-[22px]
            sm:px-4
            sm:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* ====================================================
              TOP HIGHLIGHT
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-6
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              sm:inset-x-10
            "
          />

          {/* ====================================================
              INNER GLOW
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[19px]
              ring-1
              ring-inset
              ring-white/[0.025]
              sm:rounded-[22px]
            "
          />

          {/* ====================================================
              LOGO
          ==================================================== */}

          <Link
            href="/"
            className="
              group
              relative
              z-10
              flex
              shrink-0
              items-center
              gap-2.5
              px-1.5
              sm:gap-3
              sm:px-2
            "
          >
            {/* Logo mark */}

            <div
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                overflow-hidden
                rounded-[11px]
                bg-white
                shadow-[0_8px_25px_rgba(255,255,255,0.08)]
                transition-all
                duration-500
                group-hover:-translate-y-0.5
                group-hover:rounded-[13px]
                sm:h-10
                sm:w-10
                sm:rounded-[13px]
                sm:group-hover:rounded-[15px]
              "
            >
              {/* Gradient */}

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
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Shine */}

              <div
                className="
                  absolute
                  -left-10
                  top-0
                  h-full
                  w-5
                  rotate-[20deg]
                  bg-white/60
                  blur-md
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  text-[11px]
                  font-black
                  tracking-[-0.08em]
                  text-zinc-950
                  group-hover:text-white
                  sm:text-[12px]
                "
              >
                GS
              </span>
            </div>

            {/* Brand */}

            <div className="hidden leading-none sm:block">
              <div
                className="
                  text-[13px]
                  font-black
                  tracking-[-0.04em]
                  text-white
                "
              >
                GALANG
              </div>

              <div
                className="
                  mt-1.5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-zinc-500
                "
              >
                Developer
              </div>
            </div>
          </Link>

          {/* ====================================================
              DIVIDER
          ==================================================== */}

          <div
            className="
              mx-5
              hidden
              h-7
              w-px
              bg-white/[0.07]
              lg:block
            "
          />

          {/* ====================================================
              DESKTOP NAV
          ==================================================== */}

          <div
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    group
                    relative
                    flex
                    h-10
                    items-center
                    rounded-xl
                    px-3.5
                    text-[12px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-200"
                    }
                  `}
                >
                  {/* Active background */}

                  {active && (
                    <span
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.055]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                      "
                    />
                  )}

                  {/* Hover background */}

                  {!active && (
                    <span
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        bg-white/[0.035]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {link.name}
                  </span>

                  {/* Active indicator */}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-1.5
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-violet-400
                        to-cyan-400
                        shadow-[0_0_10px_rgba(139,92,246,0.8)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ====================================================
              RIGHT SIDE
          ==================================================== */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1.5
              sm:gap-2
            "
          >
            {/* ==================================================
                AVAILABLE
            ================================================== */}

            <div
              className="
                mr-1
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-3
                py-2
                xl:flex
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400/50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  text-zinc-400
                "
              >
                Available
              </span>
            </div>

            {/* ==================================================
                THEME TOGGLE
            ================================================== */}

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-0.5
                sm:h-10
                sm:w-10
              "
            >
              <ThemeToggle />
            </div>

            {/* ==================================================
                CTA
            ================================================== */}

            <Link
              href="/contact"
              className="
                group
                relative
                hidden
                h-10
                items-center
                gap-2
                overflow-hidden
                rounded-full
                bg-white
                px-4
                text-[11px]
                font-bold
                text-zinc-950
                shadow-[0_8px_25px_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_35px_rgba(255,255,255,0.14)]
                sm:flex
              "
            >
              {/* CTA gradient */}

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-violet-400
                  via-indigo-400
                  to-cyan-400
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span
                className="
                  relative
                  z-10
                  transition-colors
                  group-hover:text-white
                "
              >
                Let's Talk
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="
                  relative
                  z-10
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-white
                "
              />
            </Link>

            {/* ==================================================
                MOBILE MENU
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-zinc-300
                transition-all
                duration-300
                hover:border-white/[0.15]
                hover:bg-white/[0.06]
                hover:text-white
                sm:h-10
                sm:w-10
                lg:hidden
              "
            >
              <Menu
                size={18}
                strokeWidth={2}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ========================================================
          MOBILE MENU
      ======================================================== */}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}