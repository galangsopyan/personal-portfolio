"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const experiences = [
  {
    year: "2024 — Present",
    title: "Frontend Developer",
    company: "Freelance",
    description:
      "Mengembangkan website modern menggunakan React, Next.js, TypeScript, dan Tailwind CSS.",
  },
  {
    year: "2023 — 2024",
    title: "Web Developer",
    company: "Freelance Project",
    description:
      "Mengerjakan berbagai website company profile, landing page, dan aplikasi web.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <main className="min-h-screen pt-32">
        <section className="mx-auto max-w-5xl px-5 py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Experience
            </p>

            <h1 className="mt-4 text-5xl font-black">
              Pengalaman & perjalanan.
            </h1>
          </motion.div>

          <div className="mt-16 space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                    <Briefcase size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-violet-600">
                      {item.year}
                    </p>

                    <h2 className="mt-1 text-xl font-bold">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                      {item.company}
                    </p>

                    <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">
            <GraduationCap className="text-violet-600" />

            <div>
              <p className="font-semibold">
                Pendidikan
              </p>

              <p className="text-sm text-zinc-500">
                Universitas Pelita Bangsa, S1 Teknik Informatika (2024 — 2028)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}