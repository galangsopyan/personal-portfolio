"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GH",
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    name: "IG",
    label: "Instagram",
    href: "#",
  },
  {
    name: "in",
    label: "LinkedIn",
    href: "#",
  },
  {
    name: "YT",
    label: "YouTube",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              GS<span className="text-violet-600">.</span>
            </a>

            <p className="mt-2 text-sm text-zinc-500">
              Building digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <a
              href="#home"
              className="transition-colors hover:text-violet-600"
            >
              Home
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-violet-600"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-violet-600"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-violet-600"
            >
              Contact
            </a>
          </nav>

          {/* Social Media */}
          <div className="flex gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={
                  social.href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 transition-colors hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-zinc-800 dark:text-zinc-400"
              >
                {social.name}
              </motion.a>
            ))}

            {/* Email */}
            <motion.a
              href="mailto:hello@example.com"
              aria-label="Email"
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-zinc-800 dark:text-zinc-400"
            >
              <Mail size={17} />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Galang Sopyan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}