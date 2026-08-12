"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-16 text-white sm:px-12 lg:px-20 dark:bg-white dark:text-zinc-950"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 dark:bg-zinc-900/10">
              <Mail size={22} />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's build something great together.
            </h2>

            <p className="mt-5 max-w-2xl text-zinc-400 dark:text-zinc-600">
              Punya project, ide, atau sekadar ingin berdiskusi?
              Jangan ragu untuk menghubungi saya.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@example.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-zinc-900 dark:bg-zinc-950 dark:text-white"
            >
              Say Hello
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}