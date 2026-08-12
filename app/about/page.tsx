"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Membangun website modern dan responsif",
  "Mengutamakan UI/UX dan performa",
  "Clean code dan component architecture",
  "Responsive untuk desktop dan mobile",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              About Me
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              Passionate about
              <span className="block bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                technology & design.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Saya adalah developer yang fokus membangun
              pengalaman digital yang modern, cepat, dan
              mudah digunakan.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-violet-600"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[40px] bg-violet-600/20 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/profile.jpg"
                alt="Galang Sopyan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}