"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="fixed right-0 top-0 z-[70] flex h-dvh w-[88%] max-w-md flex-col bg-white p-6 shadow-2xl dark:bg-zinc-950 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="text-xl font-black"
              >
                GS<span className="text-violet-600">.</span>
              </Link>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
                aria-label="Close menu"
              >
                <X size={19} />
              </button>
            </div>

            <nav className="mt-12">
              <div className="space-y-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-2xl px-4 py-4 text-xl font-semibold transition hover:bg-zinc-100 hover:text-violet-600 dark:hover:bg-zinc-900 dark:hover:text-violet-400"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={19}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center rounded-2xl bg-violet-600 px-5 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                Let's Work Together
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}