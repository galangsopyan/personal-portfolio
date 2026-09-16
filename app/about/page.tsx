"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Membangun website dan aplikasi web modern dengan fokus pada struktur yang rapi, responsif, dan mudah dikembangkan.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Mengembangkan solusi berbasis AI untuk membantu mengotomatisasi proses dan menciptakan pengalaman digital yang lebih cerdas.",
  },
  {
    icon: Layers3,
    title: "Problem Solving",
    description:
      "Menggabungkan kemampuan teknis dan pengalaman engineering untuk menganalisis masalah dan mencari solusi yang efektif.",
  },
];

const points = [
  "Modern & responsive web development",
  "Clean code & reusable components",
  "UI/UX dengan fokus pada user experience",
  "Integrasi API, backend, database & AI",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "PHP",
  "FastAPI",
  "MySQL",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-[-10%]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-40
            [background-image:linear-gradient(to_right,rgba(120,120,120,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.035)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
              "
            />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-violet-500
                dark:text-violet-400
              "
            >
              About Me
            </p>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-zinc-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Turning ideas into
            <span
              className="
                block
                bg-gradient-to-r
                from-violet-600
                via-indigo-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              digital experiences.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
              sm:leading-8
              dark:text-zinc-400
            "
          >
            Saya adalah developer yang tertarik pada teknologi, web
            development, dan solusi berbasis AI. Saya senang mengubah ide
            menjadi produk digital yang memiliki tampilan profesional,
            performa baik, dan pengalaman pengguna yang nyaman.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN ABOUT
        =================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =================================================
              PHOTO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[430px]
            "
          >
            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-10
                rounded-full
                bg-violet-600/30
                blur-[90px]
              "
            />

            {/* Rotating ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-5
                rounded-[48px]
                border
                border-violet-500/15
              "
            />

            {/* Image */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[36px]
                border
                border-zinc-200/80
                bg-zinc-100
                shadow-2xl
                shadow-violet-950/10
                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <Image
                src="/profile1.jpg"
                alt="Galang Sopyan - Full Stack Developer"
                fill
                sizes="(max-width: 1024px) 90vw, 430px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-zinc-950/60
                  via-transparent
                  to-transparent
                "
              />

              {/* Bottom label */}

              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-950/70
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <p className="text-xs font-medium text-violet-300">
                    GALANG SOPYAN
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Full Stack Developer & AI Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Experience badge */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                top-8
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/90
                px-4
                py-3
                shadow-2xl
                backdrop-blur-xl
                dark:bg-white/90
              "
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-violet-400 dark:text-violet-600"
                />

                <span className="text-xs font-bold text-white dark:text-zinc-900">
                  AI & Web
                </span>
              </div>

              <p className="mt-1 text-[10px] text-zinc-400 dark:text-zinc-500">
                Building digital solutions
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Intro */}

            <p
              className="
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Saya memiliki ketertarikan besar pada bagaimana teknologi dapat
              digunakan untuk menyelesaikan masalah nyata. Dalam proses
              belajar dan membangun berbagai project, saya mengeksplorasi
              frontend, backend, database, API, hingga integrasi AI.
            </p>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Saya juga memiliki pengalaman di bidang engineering yang
              membentuk cara saya bekerja secara lebih terstruktur —
              memahami spesifikasi, memperhatikan detail, melakukan
              troubleshooting, dan mencari solusi secara sistematis.
            </p>

            {/* Points */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                  }}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-zinc-200/80
                    bg-white/50
                    p-3
                    backdrop-blur-sm
                    dark:border-zinc-800
                    dark:bg-zinc-900/40
                  "
                >
                  <CheckCircle2
                    size={17}
                    className="
                      mt-0.5
                      shrink-0
                      text-violet-500
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-medium
                      leading-5
                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                    }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-zinc-200/80
                      bg-white/60
                      p-5
                      shadow-sm
                      backdrop-blur-xl
                      transition-shadow
                      duration-300
                      hover:shadow-xl
                      hover:shadow-violet-500/10
                      dark:border-zinc-800
                      dark:bg-zinc-900/50
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                        text-violet-600
                        transition-all
                        duration-300
                        group-hover:bg-violet-500
                        group-hover:text-white
                        dark:text-violet-400
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <h3 className="text-sm font-bold">
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            <div className="mt-9">
              <div className="flex items-center justify-between">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-zinc-500
                  "
                >
                  Technologies I Work With
                </p>

                <Code2
                  size={16}
                  className="text-violet-500"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-zinc-200
                      bg-zinc-50
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-zinc-600
                      transition-all
                      duration-300
                      hover:border-violet-400
                      hover:bg-violet-500/5
                      hover:text-violet-600
                      dark:border-zinc-800
                      dark:bg-zinc-900/60
                      dark:text-zinc-400
                      dark:hover:border-violet-500
                      dark:hover:text-violet-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-9">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-zinc-950
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-zinc-950/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:shadow-violet-500/20
                  dark:bg-white
                  dark:text-zinc-950
                  dark:hover:bg-violet-400
                "
              >
                Explore My Projects

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}