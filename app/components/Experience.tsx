"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    type: "work",
    year: "Jan 2023 — Sekarang",
    title: "Engineering",
    company: "PT Chandra Nugerah Cemerlang",
    description:
      "Menangani pengembangan New Part dari tahap membacagambar teknik, membuat program welding, setting dies, hingga trial dan adjustment proses produksi.",
    points: [
      "Membuat dan menyesuaikan program welding sesuai kebutuhan produk.",
      "Melakukan setting dies sebelum proses produksi.",
      "Melakukan trial dan adjustment untuk mendapatkan hasil produksi yang sesuai dengan spesifikasi.",
      "Berkoordinasi dengan tim terkait dalam proses New Part Development.",
      "Mengidentifikasi kendala selama proses trial dan membantu melakukan perbaikan.",
    ],
  },
  {
    type: "work",
    year: "2024 — Present",
    title: "Freelance Web Developer",
    company: "Independent",
    description:
      "Mengembangkan website dan aplikasi web untuk kebutuhan personal, bisnis, dan berbagai project digital dengan fokus pada desain modern dan pengalaman pengguna.",
    points: [
      "Membangun landing page dan website company profile.",
      "Mengembangkan aplikasi web menggunakan Next.js dan TypeScript.",
      "Menerapkan responsive design untuk desktop, tablet, dan mobile.",
      "Mengintegrasikan berbagai teknologi modern untuk kebutuhan project.",
    ],
  },
  {
    type: "project",
    year: "2026 — Present",
    title: "AI Video Clipper Developer",
    company: "Personal Project — ClipForge AI",
    description:
      "Membangun platform AI untuk mengubah video panjang menjadi short-form content secara otomatis.",
    points: [
      "Mengembangkan sistem upload dan pemrosesan video.",
      "Menggunakan Whisper untuk transkripsi audio otomatis.",
      "Mengolah video menggunakan FFmpeg.",
      "Mengembangkan sistem deteksi momen potensial untuk short-form content.",
    ],
  },
];

const education = {
  year: "2024 — 2028",
  title: "S1 Teknik Informatika",
  company: "Universitas Pelita Bangsa",
  description:
    "Sedang menempuh pendidikan di bidang Teknik Informatika sambil mengembangkan pengalaman melalui project, freelance, dan eksplorasi teknologi web.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-5 py-20">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Experience & Journey
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Perjalanan saya
            <span className="block bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              terus berkembang.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Dari pengalaman di dunia industri hingga pengembangan website dan
            aplikasi, saya terus membangun pengalaman dan memperluas kemampuan
            di bidang teknologi.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-[23px] top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-violet-500 via-violet-300 to-transparent sm:block" />

          <div className="space-y-10">
            {experiences.map((item, index) => {
              const Icon =
                item.type === "project"
                  ? Code2
                  : Briefcase;

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-white text-violet-600 shadow-sm dark:bg-zinc-950 sm:flex">
                    <Icon size={20} />
                  </div>

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-800 sm:p-8">
                    {/* Decorative Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Year */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600">
                          {item.year}
                        </span>

                        {item.type === "project" && (
                          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                            Personal Project
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="mt-4 text-2xl font-bold tracking-tight">
                        {item.title}
                      </h2>

                      {/* Company */}
                      <p className="mt-1 font-medium text-violet-600">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="mt-5 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>

                      {/* Points */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-1 shrink-0 text-violet-600"
                            />

                            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 sm:pl-16"
        >
          {/* Icon */}
          <div className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-600 sm:flex">
            <GraduationCap size={21} />
          </div>

          <div className="group rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 via-white to-cyan-500/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 dark:from-violet-500/10 dark:via-zinc-900/50 dark:to-cyan-500/5 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600">
                  {education.year}
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  {education.title}
                </h2>

                <p className="mt-1 font-medium text-violet-600">
                  {education.company}
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
                  {education.description}
                </p>
              </div>

              <div className="hidden shrink-0 sm:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600">
                  <GraduationCap size={26} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CURRENT STATUS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-violet-600" />
                </span>

                <p className="text-sm font-semibold text-violet-600">
                  Currently
                </p>
              </div>

              <h3 className="mt-2 text-xl font-bold">
                Mahasiswa & Web Developer
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Saat ini saya masih aktif menempuh pendidikan S1 Teknik
                Informatika sambil mengembangkan project dan meningkatkan
                kemampuan di bidang web development dan teknologi AI.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-violet-600 transition hover:gap-3"
            >
              Lihat Project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}