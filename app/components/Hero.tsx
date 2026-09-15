"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  /*
   * ============================================================
   * MOUSE PARALLAX
   * ============================================================
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [4, -4]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - (rect.left + rect.width / 2));

    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        pt-28
        sm:pt-32
      "
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Violet glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-12%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500
            blur-[140px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-10%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-60
            [background-image:linear-gradient(to_right,rgba(120,120,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.04)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-[var(--background)]
            to-transparent
          "
        />
      </div>

      {/* ========================================================
          MAIN
      ======================================================== */}

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-8rem)]
          max-w-7xl
          items-center
          gap-14
          px-5
          pb-24
          sm:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
          lg:px-10
        "
      >
        {/* ======================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            max-w-3xl
          "
        >
          {/* Availability */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-500/20
              bg-white/70
              px-4
              py-2
              text-xs
              font-medium
              text-violet-600
              shadow-sm
              backdrop-blur-xl
              dark:bg-zinc-900/60
              dark:text-violet-300
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>
            <Sparkles size={14} />
            Available for opportunities
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              text-5xl
              font-black
              leading-[0.94]
              tracking-[-0.055em]
              text-zinc-950
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
              dark:text-white
            "
          >
            Building
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
              Digital Solutions.
            </span>
          </motion.h1>

          {/* Role */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-2
              text-lg
              font-medium
              text-zinc-600
              dark:text-zinc-300
            "
          >
            <span>I&apos;m a</span>

            <span
              className="
                font-bold
                text-violet-600
                dark:text-violet-400
              "
            >
              Full Stack Developer
            </span>

            <span className="text-zinc-400">&</span>

            <span
              className="
                font-bold
                text-cyan-600
                dark:text-cyan-400
              "
            >
              AI Builder
            </span>
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
              dark:text-zinc-400
            "
          >
            Saya membangun website, aplikasi web, dashboard, dan solusi berbasis
            AI dengan fokus pada performa, pengalaman pengguna, serta desain
            yang modern dan responsif.
          </motion.p>

          {/* Tech Stack */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["Next.js", "React", "TypeScript", "Python", "PHP", "FastAPI"].map(
              (tech) => (
                <span
                  key={tech}
                  className="
                  rounded-full
                  border
                  border-zinc-200
                  bg-white/60
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-zinc-600
                  backdrop-blur-xl
                  dark:border-zinc-800
                  dark:bg-zinc-900/50
                  dark:text-zinc-400
                "
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {/* Projects */}

            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-zinc-950
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-xl
                shadow-zinc-950/15
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-600
                hover:shadow-violet-500/30
                dark:bg-white
                dark:text-zinc-950
                dark:hover:bg-violet-400
              "
            >
              View My Projects
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-300
                bg-white/60
                px-6
                py-3.5
                text-sm
                font-semibold
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400
                hover:text-violet-600
                dark:border-zinc-700
                dark:bg-zinc-900/50
                dark:hover:border-violet-500
              "
            >
              <Mail size={17} />
              Let&apos;s Talk
            </a>

            {/* CV */}

            <a
              href="/cv.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-300
                bg-transparent
                px-5
                py-3.5
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400
                hover:text-violet-600
                dark:border-zinc-700
              "
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-12
              grid
              max-w-xl
              grid-cols-3
              border-t
              border-zinc-200
              pt-7
              dark:border-zinc-800
            "
          >
            <div>
              <p className="text-2xl font-black">10+</p>

              <p className="mt-1 text-xs text-zinc-500">Projects Built</p>
            </div>

            <div
              className="
                border-l
                border-zinc-200
                pl-6
                dark:border-zinc-800
              "
            >
              <p className="text-2xl font-black">40+</p>

              <p className="mt-1 text-xs text-zinc-500">Technologies</p>
            </div>

            <div
              className="
                border-l
                border-zinc-200
                pl-6
                dark:border-zinc-800
              "
            >
              <p className="text-2xl font-black">AI</p>

              <p className="mt-1 text-xs text-zinc-500">Focus Area</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================
            RIGHT — 16:9 HERO VISUAL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
          "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[70%]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/30
              blur-[100px]
            "
          />

          {/* Orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[105%]
              w-[105%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-violet-500/15
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[115%]
              w-[115%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-400/15
            "
          />

          {/* ====================================================
              16:9 IMAGE
          ==================================================== */}

          <motion.div
            style={{
              rotateX,
              rotateY,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[760px]
              [transform-style:preserve-3d]
            "
          >
            {/* Image frame */}

            <div
              className="
                relative
                aspect-[16/9]
                w-full
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-zinc-950
                shadow-[0_35px_100px_rgba(76,29,149,0.25)]
                dark:shadow-[0_35px_100px_rgba(124,58,237,0.2)]
              "
            >
              <Image
                src="/profile.jpg"
                alt="Galang Sopyan - Full Stack Developer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />

              {/* Dark overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />

              {/* Border glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  ring-1
                  ring-inset
                  ring-white/10
                "
              />

              {/* Shine */}

              <motion.div
                initial={{
                  x: "-130%",
                }}
                animate={{
                  x: "130%",
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />
            </div>

            {/* ==================================================
                CODE BADGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[-8px]
                top-[12%]
                z-20
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/90
                text-violet-600
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <Code2 size={25} />
            </motion.div>

            {/* ==================================================
                AI BADGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[-10px]
                top-[32%]
                z-20
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/90
                text-cyan-400
                shadow-2xl
                backdrop-blur-xl
                sm:left-[-20px]
              "
            >
              <BrainCircuit size={23} />
            </motion.div>

            {/* ==================================================
                AVAILABLE BADGE
            ================================================== */}

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
    bottom-[-18px]
    left-1/2
    z-20
    w-[190px]
    -translate-x-1/2
    rounded-xl
    border
    border-white/10
    bg-zinc-950/95
    px-3.5
    py-2.5
    text-white
    shadow-xl
    backdrop-blur-xl
    sm:left-[-10px]
    sm:w-[180px]
    sm:translate-x-0
  "
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="
        h-2
        w-2
        shrink-0
        rounded-full
        bg-emerald-400
        shadow-[0_0_10px_rgba(52,211,153,0.8)]
      "
                />

                <span className="text-[11px] font-semibold">
                  Available for freelance
                </span>
              </div>

              <p className="mt-0.5 pl-3.5 text-[9px] text-zinc-400">
                Let&apos;s build something great
              </p>
            </motion.div>

            {/* ==================================================
                FULL STACK BADGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
    absolute
    bottom-[-18px]
    right-0
    z-20
    hidden
    rounded-xl
    border
    border-zinc-200/80
    bg-white/95
    px-4
    py-2.5
    shadow-xl
    backdrop-blur-xl
    sm:block
    dark:border-zinc-700
    dark:bg-zinc-900/95
  "
            >
              <p className="text-base font-black leading-tight">Full Stack</p>

              <p className="mt-0.5 text-[9px] text-zinc-500">Web Development</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================
          SCROLL
      ======================================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-xs
          text-zinc-500
          sm:flex
        "
      >
        Explore
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
