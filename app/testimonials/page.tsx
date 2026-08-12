"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO",
    text: "Gilang sangat profesional dan hasil pekerjaannya memiliki ekspektasi yang baik.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Marketing Manager",
    text: "Komunikasi baik, deadline tepat waktu, dan kualitas website sangat bagus.",
  },
  {
    name: "Budi Santoso",
    role: "Product Manager",
    text: "Sangat mudah bekerja sama dan selalu memberikan solusi yang tepat.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Testimonials
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Apa kata mereka?
          </h1>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <Quote className="text-violet-600" />

              <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
                "{item.text}"
              </p>

              <div className="mt-7">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-zinc-500">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}