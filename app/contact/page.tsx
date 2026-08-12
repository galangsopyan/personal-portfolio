"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Let's Work Together
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              Punya project
              <span className="block bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                menarik?
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Mari berdiskusi tentang ide Anda dan
              wujudkan menjadi pengalaman digital yang
              menarik.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">
                    Email
                  </p>

                  <p className="font-medium">
                    galangsopyan05@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">
                    Location
                  </p>

                  <p className="font-medium">
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-black/5 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Nama"
                className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 outline-none transition focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 outline-none transition focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 outline-none transition focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950"
              />

              <textarea
                rows={6}
                placeholder="Ceritakan tentang project Anda..."
                className="resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 outline-none transition focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
              >
                Kirim Pesan
                <Send size={17} />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}