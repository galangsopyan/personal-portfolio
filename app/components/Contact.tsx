"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  /**
   * Submit form → WhatsApp
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();

    /**
     * Konversi value select menjadi teks yang lebih rapi
     */
    const websiteLabels: Record<string, string> = {
      "landing-page": "Landing Page",
      "company-profile": "Company Profile",
      "business-website": "Website Bisnis",
      portfolio: "Portfolio",
      ecommerce: "E-Commerce",
      "web-application": "Web Application",
      other: "Lainnya",
    };

    const budgetLabels: Record<string, string> = {
      "under-1m": "< Rp1 juta",
      "1-3m": "Rp1–3 juta",
      "3-5m": "Rp3–5 juta",
      "5-10m": "Rp5–10 juta",
      "above-10m": "> Rp10 juta",
      discuss: "Diskusikan terlebih dahulu",
    };

    const websiteName = websiteLabels[website] || "-";
    const budgetName = budgetLabels[budget] || "Belum ditentukan";

    /**
     * Pesan WhatsApp
     */
    const whatsappMessage = `Halo Galang 👋

Saya tertarik untuk berkonsultasi mengenai pembuatan website.

*DATA CALON KLIEN*
━━━━━━━━━━━━━━━━━━
Nama: ${name}
Email: ${email}
WhatsApp: ${whatsapp || "-"}

*DETAIL PROJECT*
━━━━━━━━━━━━━━━━━━
Jenis Website: ${websiteName}
Estimasi Budget: ${budgetName}

*KEBUTUHAN PROJECT*
━━━━━━━━━━━━━━━━━━
${message}

Saya mengetahui jasa Anda dari portfolio website.

Terima kasih 🙏`;

    /**
     * Nomor WhatsApp tujuan
     *
     * Format:
     * 628xxxxxxxxxx
     *
     * Tanpa +, spasi, atau 0 di depan.
     */
    const phoneNumber = "6285766724430";

    /**
     * Encode pesan agar aman dimasukkan
     * ke URL WhatsApp
     */
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    /**
     * Buka WhatsApp
     */
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Let's Work Together
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Butuh Website
              <span className="block bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                untuk Bisnis Anda?
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Saya membantu bisnis, brand, dan personal membangun website
              modern, profesional, responsif, dan sesuai kebutuhan.
            </p>

            {/* ================= BENEFITS ================= */}
            <div className="mt-8 space-y-3">
              {[
                "Desain modern dan profesional",
                "Responsive di desktop dan mobile",
                "Dibangun sesuai kebutuhan bisnis",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-violet-600"
                  />

                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="mt-10 space-y-5">
              {/* Email */}
              <a
                href="mailto:galangsopyan05@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Email</p>

                  <p className="font-medium transition group-hover:text-violet-600">
                    galangsopyan05@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6285766724430"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">WhatsApp</p>

                  <p className="font-medium transition group-hover:text-violet-600">
                    Chat untuk konsultasi
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Location</p>

                  <p className="font-medium">Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTACT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-black/5 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8"
          >
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight">
                Mari mulai project Anda
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Ceritakan kebutuhan Anda. Konsultasi awal gratis dan tanpa
                komitmen.
              </p>
            </div>

            <section className="grid gap-5">
              {/* ================= NAMA ================= */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nama
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Nama Anda"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* ================= EMAIL ================= */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* ================= WHATSAPP ================= */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="mb-2 block text-sm font-medium"
                >
                  WhatsApp
                </label>

                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* ================= JENIS WEBSITE ================= */}
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-medium"
                >
                  Jenis Website
                </label>

                <select
                  id="website"
                  name="website"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <option value="" disabled>
                    Pilih jenis website
                  </option>

                  <option value="landing-page">Landing Page</option>
                  <option value="company-profile">Company Profile</option>
                  <option value="business-website">Website Bisnis</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="web-application">Web Application</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              {/* ================= BUDGET ================= */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium"
                >
                  Estimasi Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <option value="" disabled>
                    Pilih estimasi budget
                  </option>

                  <option value="under-1m">&lt; Rp1 juta</option>
                  <option value="1-3m">Rp1–3 juta</option>
                  <option value="3-5m">Rp3–5 juta</option>
                  <option value="5-10m">Rp5–10 juta</option>
                  <option value="above-10m">&gt; Rp10 juta</option>
                  <option value="discuss">Diskusikan terlebih dahulu</option>
                </select>
              </div>

              {/* ================= MESSAGE ================= */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Ceritakan kebutuhan Anda
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Contoh: Saya membutuhkan website company profile untuk bisnis..."
                  className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* ================= SUBMIT ================= */}
              <button
                type="submit"
                className="group mt-1 flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20 active:translate-y-0"
              >
                <MessageCircle
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />

                Konsultasi via WhatsApp

                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-zinc-500">
                Tidak ada biaya untuk konsultasi awal.
              </p>
            </section>
          </motion.form>
        </div>
      </section>
    </main>
  );
}