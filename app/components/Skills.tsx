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
  FileCode2,
  Braces,
  Terminal,
  Cpu,
  Bot,
  Video,
  Layers,
  LayoutDashboard,
  Workflow,
  DatabaseZap,
  Boxes,
  Wrench,
  MonitorCog,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Bahasa pemrograman yang saya gunakan untuk membangun aplikasi.",
    icon: Code2,
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        icon: Braces,
      },
      {
        name: "TypeScript",
        level: "Advanced",
        icon: FileCode2,
      },
      {
        name: "Python",
        level: "Intermediate",
        icon: Terminal,
      },
      {
        name: "PHP",
        level: "Intermediate",
        icon: Code2,
      },
      {
        name: "HTML5",
        level: "Advanced",
        icon: Globe,
      },
      {
        name: "CSS3",
        level: "Advanced",
        icon: Palette,
      },
      {
        name: "SQL",
        level: "Intermediate",
        icon: Database,
      },
    ],
  },

  {
    title: "Frontend Development",
    description: "Membangun interface web yang modern, responsif, dan interaktif.",
    icon: MonitorCog,
    skills: [
      {
        name: "React",
        level: "Advanced",
        icon: Smartphone,
      },
      {
        name: "Next.js",
        level: "Advanced",
        icon: Globe,
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: Palette,
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        icon: Smartphone,
      },
      {
        name: "UI / UX Design",
        level: "Intermediate",
        icon: Pencil,
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        icon: Layers,
      },
      {
        name: "Shadcn UI",
        level: "Intermediate",
        icon: Boxes,
      },
      {
        name: "Lucide Icons",
        level: "Intermediate",
        icon: Workflow,
      },
    ],
  },

  {
    title: "Backend Development",
    description: "Membangun API, server-side application, dan sistem backend.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: "Intermediate",
        icon: Server,
      },
      {
        name: "FastAPI",
        level: "Intermediate",
        icon: ZapIcon,
      },
      {
        name: "REST API",
        level: "Intermediate",
        icon: Workflow,
      },
      {
        name: "PHP Backend",
        level: "Intermediate",
        icon: Code2,
      },
      {
        name: "Authentication",
        level: "Intermediate",
        icon: Boxes,
      },
      {
        name: "CRUD Systems",
        level: "Intermediate",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Database",
    description: "Mengelola data dan membangun sistem database aplikasi.",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        level: "Intermediate",
        icon: Database,
      },
      {
        name: "PostgreSQL",
        level: "Basic",
        icon: DatabaseZap,
      },
      {
        name: "SQLite",
        level: "Intermediate",
        icon: Database,
      },
      {
        name: "Database Design",
        level: "Intermediate",
        icon: Boxes,
      },
      {
        name: "SQL Query",
        level: "Intermediate",
        icon: Code2,
      },
    ],
  },

  {
    title: "AI & Automation",
    description: "Mengembangkan aplikasi dengan integrasi AI dan automation.",
    icon: Bot,
    skills: [
      {
        name: "AI Integration",
        level: "Intermediate",
        icon: Bot,
      },
      {
        name: "Whisper AI",
        level: "Intermediate",
        icon: Cpu,
      },
      {
        name: "Speech-to-Text",
        level: "Intermediate",
        icon: Terminal,
      },
      {
        name: "AI API",
        level: "Intermediate",
        icon: Workflow,
      },
      {
        name: "Python Automation",
        level: "Intermediate",
        icon: Terminal,
      },
      {
        name: "Video Processing",
        level: "Intermediate",
        icon: Video,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Tools yang digunakan dalam development dan pengelolaan project.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        level: "Advanced",
        icon: GitBranch,
      },
      {
        name: "GitHub",
        level: "Advanced",
        icon: GitBranch,
      },
      {
        name: "VS Code",
        level: "Advanced",
        icon: Code2,
      },
      {
        name: "FFmpeg",
        level: "Intermediate",
        icon: Video,
      },
      {
        name: "npm",
        level: "Advanced",
        icon: Terminal,
      },
      {
        name: "Postman",
        level: "Intermediate",
        icon: Workflow,
      },
    ],
  },
];

// Icon tambahan untuk FastAPI
function ZapIcon({ size = 21 }: { size?: number }) {
  return <Cpu size={size} />;
}

const levelStyle = {
  Basic:
    "border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",

  Intermediate:
    "border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400",

  Advanced:
    "border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400",
};

export default function Skills() {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                My Skills
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Skills & Technologies
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Teknologi yang saya gunakan untuk membangun aplikasi web,
                sistem digital, dan solusi berbasis AI yang modern,
                responsif, dan scalable.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
                <p className="text-2xl font-black">{totalSkills}+</p>
                <p className="text-xs text-zinc-500">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
                <p className="text-2xl font-black">
                  {skillCategories.length}
                </p>
                <p className="text-xs text-zinc-500">
                  Categories
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.05,
                }}
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
                    <CategoryIcon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.4,
                        }}
                        whileHover={{
                          y: -5,
                        }}
                        className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-500/30"
                      >
                        {/* Hover glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/0 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-violet-600 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-violet-400">
                              <Icon size={20} />
                            </div>

                            <div>
                              <h4 className="text-sm font-bold">
                                {skill.name}
                              </h4>

                              <p className="mt-0.5 text-[11px] text-zinc-400">
                                {skill.level} level
                              </p>
                            </div>
                          </div>

                          <span
                            className={`rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-wide ${
                              levelStyle[
                                skill.level as keyof typeof levelStyle
                              ]
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-zinc-200 bg-white/60 p-6 text-center shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
            Always Learning
          </p>

          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Terus berkembang, terus membangun.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Saya terus mempelajari teknologi baru dan mengembangkan
            project nyata untuk meningkatkan kemampuan dalam software
            development, web development, dan AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}