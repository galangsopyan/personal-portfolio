"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Palette,
  Server,
  Pencil,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    name: "HTML / CSS",
    level: 95,
    icon: Code2,
  },
  {
    name: "JavaScript",
    level: 90,
    icon: Code2,
  },
  {
    name: "TypeScript",
    level: 85,
    icon: Code2,
  },
  {
    name: "React",
    level: 90,
    icon: Smartphone,
  },
  {
    name: "Next.js",
    level: 90,
    icon: Globe,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: Palette,
  },
  {
    name: "UI / UX Design",
    level: 80,
    icon: Pencil,
  },
  {
    name: "Git / GitHub",
    level: 88,
    icon: GitBranch,
  },
  {
    name: "Database",
    level: 80,
    icon: Database,
  },
  {
    name: "Backend",
    level: 75,
    icon: Server,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              My Skills
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Skills & Technologies
            </h2>

            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              Teknologi yang saya gunakan untuk membangun
              website modern dan scalable.
            </p>
          </div>

          <span className="text-sm text-zinc-500">
            10+ technologies
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur-xl transition-colors dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/0 blur-2xl transition-all duration-500 group-hover:bg-violet-500/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-violet-600 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] dark:border-zinc-700 dark:bg-zinc-950">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-medium text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold">
                    {skill.name}
                  </h3>

                  {/* Progress */}
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.07,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 shadow-[0_0_10px_rgba(139,92,246,0.45)]"
                    />
                  </div>

                  <p className="mt-2 text-[10px] text-zinc-400">
                    Professional skill
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}