"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

import { projects } from "@/app/data/projects";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const project = projects[current];

  return (
    <section
      id="projects"
      className="border-t border-zinc-200/70 py-28 dark:border-zinc-800/70"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Project pilihan saya.
          </h2>
        </motion.div>

        <motion.div
          key={project.title}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]"
        >
          {/* Image */}
          <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <a href={project.link}>
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-[300px] w-full object-cover sm:h-[450px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </a>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm text-zinc-500">
              0{current + 1} / 0{projects.length}
            </span>

            <h3 className="mt-4 text-3xl font-bold">
              {project.title}
            </h3>

            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium dark:border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-8 flex w-fit items-center gap-2 font-semibold text-violet-600 dark:text-violet-400"
            >
              View Project
              <ExternalLink size={16} />
            </a>

            <div className="mt-10 flex gap-3">
              <button
                onClick={previous}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 transition-all hover:scale-105 hover:border-violet-500 dark:border-zinc-800"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 transition-all hover:scale-105 hover:border-violet-500 dark:border-zinc-800"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}