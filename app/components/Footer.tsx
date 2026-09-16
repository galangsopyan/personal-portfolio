"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/galangsopyan",
    icon: "GH",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/galangsopyan_28/",
    icon: "IG",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/galang-sopyan/",
    icon: "in",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: "YT",
  },
];

export default function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSectionNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.split("#")[1];

    if (!hash) return;

    /*
     * Kalau sedang di Home:
     * langsung smooth scroll ke section.
     */
    if (pathname === "/") {
      e.preventDefault();

      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          `/#${hash}`
        );
      }

      return;
    }

    /*
     * Kalau sedang di halaman lain:
     * biarkan browser menuju Home + section.
     *
     * Contoh:
     * /experience → /#contact
     */
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-zinc-200/80
        bg-white
        dark:border-zinc-800
        dark:bg-zinc-950
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.035]
            blur-[100px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(24,24,27,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.025)_1px,transparent_1px)]
            bg-[size:48px_48px]
            opacity-60
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-6">
            <motion.a
              href="/#home"
              onClick={(e) =>
                handleSectionNavigation(e, "/#home")
              }
              whileHover={{ y: -2 }}
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[14px]
                  bg-zinc-950
                  text-sm
                  font-black
                  tracking-[-0.08em]
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  group-hover:rounded-[16px]
                  group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                  dark:bg-white
                  dark:text-zinc-950
                "
              >
                {/* Hover gradient */}
                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-500
                    to-indigo-500
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10 group-hover:text-white">
                  GS
                </span>
              </div>

              {/* Brand */}
              <div>
                <div
                  className="
                    text-sm
                    font-black
                    tracking-[-0.035em]
                    text-zinc-950
                    dark:text-white
                  "
                >
                  GALANG
                </div>

                <div
                  className="
                    mt-1
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-zinc-400
                  "
                >
                  Developer
                </div>
              </div>
            </motion.a>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Full Stack Developer & AI Builder yang membangun
              website, aplikasi web, dashboard, dan solusi berbasis
              AI dengan fokus pada performa, pengalaman pengguna,
              dan desain modern.
            </p>

            {/* Availability */}
            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-emerald-500/15
                bg-emerald-500/[0.045]
                px-3.5
                py-2
                text-[11px]
                font-medium
                text-emerald-600
                dark:text-emerald-400
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
                    bg-emerald-500/50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              Available for freelance
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="lg:col-span-3">
            <h3
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-zinc-400
              "
            >
              Navigation
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) =>
                    handleSectionNavigation(e, item.href)
                  }
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1.5
                    text-sm
                    text-zinc-500
                    transition-colors
                    duration-200
                    hover:text-zinc-950
                    dark:text-zinc-400
                    dark:hover:text-white
                  "
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
                    className="
                      -translate-x-1
                      translate-y-1
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="lg:col-span-3">
            <h3
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-zinc-400
              "
            >
              Connect
            </h3>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Let's build something meaningful together.
            </p>

            {/* Email */}
            <a
              href="mailto:galangsopyan05@gmail.com"
              className="
                group
                mt-5
                flex
                items-center
                gap-3
                text-sm
                text-zinc-600
                transition-colors
                duration-200
                hover:text-violet-600
                dark:text-zinc-400
                dark:hover:text-violet-400
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-zinc-200
                  bg-zinc-50
                  transition-all
                  duration-200
                  group-hover:border-violet-200
                  group-hover:bg-violet-50
                  dark:border-zinc-800
                  dark:bg-zinc-900
                  dark:group-hover:border-violet-800
                  dark:group-hover:bg-violet-950/30
                "
              >
                <Mail size={14} />
              </span>

              <span>galangsopyan05@gmail.com</span>
            </a>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-zinc-200
                    bg-zinc-50
                    text-[10px]
                    font-bold
                    text-zinc-500
                    transition-all
                    duration-200
                    hover:border-zinc-300
                    hover:bg-white
                    hover:text-zinc-950
                    hover:shadow-sm
                    dark:border-zinc-800
                    dark:bg-zinc-900
                    dark:text-zinc-400
                    dark:hover:border-zinc-700
                    dark:hover:bg-zinc-800
                    dark:hover:text-white
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="my-10 h-px bg-zinc-200/80 dark:bg-zinc-800" />

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            text-xs
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Copyright */}
          <p className="text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Galang Sopyan.
            All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            <span className="hidden text-zinc-400 sm:block dark:text-zinc-500">
              Designed & Built with Next.js
            </span>

            {/* Back to top */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              title="Back to top"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-200
                bg-white
                text-zinc-500
                shadow-sm
                transition-all
                duration-200
                hover:border-zinc-300
                hover:bg-zinc-50
                hover:text-zinc-950
                dark:border-zinc-800
                dark:bg-zinc-900
                dark:text-zinc-400
                dark:hover:border-zinc-700
                dark:hover:bg-zinc-800
                dark:hover:text-white
              "
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}