"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Business Owner",
    project: "Business Website",
    text: "Proses pengerjaannya sangat baik dan komunikasinya mudah. Website yang dibuat terlihat jauh lebih profesional dan sesuai dengan kebutuhan bisnis kami.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Marketing Manager",
    project: "Company Profile",
    text: "Desainnya modern, responsive, dan sangat memperhatikan detail. Setiap revisi juga ditangani dengan cepat dan sesuai dengan yang kami harapkan.",
  },
  {
    name: "Budi Santoso",
    role: "Product Manager",
    project: "Web Application",
    text: "Sangat mudah diajak bekerja sama. Tidak hanya mengerjakan sesuai brief, tetapi juga memberikan solusi dan saran yang membantu project menjadi lebih baik.",
  },
  {
    name: "Rizky Maulana",
    role: "Startup Founder",
    project: "Landing Page",
    text: "Hasil akhirnya terlihat clean dan profesional. Website terasa lebih modern dan jauh lebih menarik dibandingkan desain sebelumnya.",
  },
  {
    name: "Dinda Permata",
    role: "Content Creator",
    project: "Personal Website",
    text: "Saya sangat puas dengan hasil websitenya. Desainnya sesuai dengan karakter brand saya dan tampilannya bagus di desktop maupun mobile.",
  },
  {
    name: "Fajar Ramadhan",
    role: "Entrepreneur",
    project: "Business Website",
    text: "Pengerjaan project berjalan dengan lancar dari awal sampai selesai. Komunikasinya jelas dan hasil website sesuai dengan konsep yang sudah didiskusikan.",
  },
  {
    name: "Nadia Putri",
    role: "Brand Owner",
    project: "E-Commerce Website",
    text: "Website terlihat profesional dan memiliki pengalaman pengguna yang jauh lebih baik. Detail desain dan struktur halaman juga dikerjakan dengan sangat baik.",
  },
  {
    name: "Dimas Saputra",
    role: "Digital Marketer",
    project: "Landing Page",
    text: "Landing page yang dibuat terlihat modern dan fokus pada kebutuhan bisnis. Loading cepat dan tampilannya sangat baik di berbagai ukuran layar.",
  },
  {
    name: "Kevin Wijaya",
    role: "Project Owner",
    project: "Web Application",
    text: "Kerja sama yang sangat menyenangkan. Respons cepat, terbuka terhadap masukan, dan mampu memberikan solusi ketika menemukan kendala selama pengerjaan.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-5 py-20">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Testimonials
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Apa kata
            <span className="block bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
              mereka?
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Pengalaman dan feedback dari orang-orang yang pernah bekerja sama
            dalam berbagai project digital.
          </p>
        </motion.div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-800"
            >
              {/* Decorative gradient */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:bg-violet-500/20" />

              {/* Quote */}
              <div className="relative flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                  <Quote size={21} />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-current text-violet-500"
                    />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="relative mt-7 min-h-[150px] text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                “{item.text}”
              </p>

              {/* Project */}
              <div className="mt-5">
                <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600">
                  {item.project}
                </span>
              </div>

              {/* User */}
              <div className="mt-7 flex items-center gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                {/* Avatar */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <p className="font-bold tracking-tight">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8 text-center sm:p-12"
        >
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Punya project yang ingin
            <span className="text-violet-600"> diwujudkan?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Mari diskusikan kebutuhan website Anda dan temukan solusi digital
            yang tepat untuk bisnis atau personal brand Anda.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Mulai Konsultasi
          </a>
        </motion.div>
      </section>
    </main>
  );
}