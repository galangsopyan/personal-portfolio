"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
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

  const rotateX = useSpring(
    useTransform(mouseY, [-500, 500], [4, -4]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-500, 500], [-4, 4]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - (rect.left + rect.width / 2)
    );

    mouseY.set(
      event.clientY - (rect.top + rect.height / 2)
    );
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
            opacity: [0.16, 0.25, 0.16],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500
            blur-[130px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-8%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400
            blur-[150px]
          "
        />

        {/* Bottom violet */}
        <div
          className="
            absolute
            bottom-[-20%]
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-fuchsia-500/10
            blur-[140px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(120,120,120,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.045)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* Fade */}
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
          MAIN CONTAINER
      ======================================================== */}

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-8rem)]
          max-w-7xl
          items-center
          gap-16
          px-5
          pb-24
          sm:px-8
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-8
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
          {/* Greeting */}

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
              bg-white/60
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
                  bg-violet-500
                  opacity-60
                "
              />

              <span className="relative h-2 w-2 rounded-full bg-violet-500" />
            </span>

            <Sparkles size={14} />

            Hi, I&apos;m Galang Sopyan
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
              leading-[0.92]
              tracking-[-0.055em]
              text-zinc-950
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
              dark:text-white
            "
          >
            Building digital

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
              experiences.
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
            <span>I am a</span>

            <span
              className="
                font-bold
                text-violet-600
                dark:text-violet-400
              "
            >
              Full Stack Developer
            </span>

            <span className="text-zinc-400">.</span>
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
              max-w-xl
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
              dark:text-zinc-400
            "
          >
            Saya membangun website modern yang cepat,
            responsif, dan memiliki pengalaman pengguna
            yang menarik dengan perpaduan teknologi dan
            desain.
          </motion.p>

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
              delay: 0.6,
              duration: 0.6,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {/* Primary */}

            <Link
              href="/projects"
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
              Lihat Project

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

            {/* Contact */}

            <Link
              href="/contact"
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

              Hubungi Saya
            </Link>

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
                px-6
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

              CV
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
              delay: 0.75,
              duration: 0.7,
            }}
            className="
              mt-12
              flex
              flex-wrap
              gap-8
              border-t
              border-zinc-200
              pt-7
              dark:border-zinc-800
            "
          >
            <div>
              <p className="text-2xl font-bold">
                2+
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                10+
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Projects
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                100%
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Dedication
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================
            RIGHT — PREMIUM PHOTO
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
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
            mx-auto
            w-full
            max-w-[500px]
          "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* ==================================================
              HUGE BACKGROUND GLOW
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
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
              dark:bg-violet-600/20
            "
          />

          {/* ==================================================
              ROTATING RING
          ================================================== */}

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
              absolute
              left-1/2
              top-1/2
              h-[88%]
              w-[88%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-violet-500/20
              dark:border-violet-400/20
            "
          />

          {/* ==================================================
              SMALL ORBIT
          ================================================== */}

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
              absolute
              left-1/2
              top-1/2
              h-[100%]
              w-[100%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-400/20
            "
          />

          {/* ==================================================
              3D PHOTO CONTAINER
          ================================================== */}

          <motion.div
            style={{
              rotateX,
              rotateY,
            }}
            className="
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[440px]
              [transform-style:preserve-3d]
            "
          >
            {/* Outer frame */}

            <div
              className="
                absolute
                inset-3
                rounded-[42px]
                bg-gradient-to-br
                from-violet-500
                via-indigo-400
                to-cyan-400
                p-[1px]
                shadow-[0_35px_100px_rgba(76,29,149,0.22)]
                dark:shadow-[0_35px_100px_rgba(124,58,237,0.2)]
              "
            >
              {/* Inner frame */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[41px]
                  bg-zinc-100
                  dark:bg-zinc-900
                "
              >
                {/* Image */}

                <Image
                  src="/profile.jpg"
                  alt="Galang Sopyan"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 90vw,
                    (max-width: 1024px) 60vw,
                    440px
                  "
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-1000
                    ease-out
                    hover:scale-[1.045]
                  "
                />

                {/* Dark bottom gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-zinc-950/50
                    via-transparent
                    to-white/5
                  "
                />

                {/* Violet cinematic glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-500/10
                    via-transparent
                    to-cyan-400/10
                    mix-blend-screen
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
                right-[-4px]
                top-12
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/90
                text-violet-300
                shadow-2xl
                backdrop-blur-xl
                dark:bg-white/90
                dark:text-violet-600
              "
            >
              <Code2 size={25} />
            </motion.div>

            {/* ==================================================
                AVAILABLE BADGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-8
                left-[-12px]
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/90
                px-5
                py-4
                text-white
                shadow-2xl
                backdrop-blur-xl
                sm:left-[-24px]
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_15px_rgba(52,211,153,0.9)]
                  "
                />

                <span className="text-sm font-semibold">
                  Available for freelance
                </span>
              </div>

              <p className="mt-1 pl-[18px] text-xs text-zinc-400">
                Let&apos;s work together
              </p>
            </motion.div>

            {/* ==================================================
                EXPERIENCE BADGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[-18px]
                right-8
                hidden
                rounded-2xl
                border
                border-zinc-200/80
                bg-white/90
                px-5
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:block
                dark:border-zinc-700
                dark:bg-zinc-900/90
              "
            >
              <p
                className="
                  text-xl
                  font-black
                  text-zinc-900
                  dark:text-white
                "
              >
                2+
              </p>

              <p className="text-[11px] text-zinc-500">
                Years Experience
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================
          SCROLL INDICATOR
      ======================================================== */}

      <motion.a
        href="#preview"
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
        Scroll

        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}