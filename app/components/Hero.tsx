"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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
  /* ============================================================
     MOUSE PARALLAX
  ============================================================ */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-500, 500], [4, -4]),
    {
      stiffness: 120,
      damping: 20,
    },
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-500, 500], [-4, 4]),
    {
      stiffness: 120,
      damping: 20,
    },
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - (rect.left + rect.width / 2),
    );

    mouseY.set(
      event.clientY - (rect.top + rect.height / 2),
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
        pt-24
        sm:pt-28
        lg:pt-32
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
            left-[-30%]
            top-[5%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-violet-500
            blur-[110px]
            sm:left-[-12%]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[140px]
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
            right-[-30%]
            top-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-400
            blur-[110px]
            sm:right-[-10%]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-35
            sm:opacity-60
            [background-image:linear-gradient(to_right,rgba(120,120,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.04)_1px,transparent_1px)]
            [background-size:38px_38px]
            sm:[background-size:60px_60px]
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-[var(--background)]
            to-transparent
            sm:h-48
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
          min-h-[calc(100vh-6rem)]
          w-full
          max-w-7xl
          items-center
          gap-14
          px-5
          pb-20
          pt-8
          sm:gap-16
          sm:px-8
          sm:pt-10
          lg:min-h-[calc(100vh-8rem)]
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
          lg:px-10
          lg:pb-24
          lg:pt-0
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
            w-full
            max-w-3xl
          "
        >
          {/* ==================================================
              AVAILABILITY
          ================================================== */}

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
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-500/20
              bg-white/70
              px-3.5
              py-2
              text-[11px]
              font-medium
              text-violet-600
              shadow-sm
              backdrop-blur-xl
              sm:mb-7
              sm:px-4
              sm:text-xs
              dark:bg-zinc-900/60
              dark:text-violet-300
            "
          >
            <span className="relative flex h-2 w-2 shrink-0">
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

          {/* ==================================================
              HEADING
          ================================================== */}

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
              max-w-[900px]
              text-[clamp(3.1rem,14vw,4.5rem)]
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

          {/* ==================================================
              ROLE
          ================================================== */}

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
              mt-6
              flex
              flex-wrap
              items-center
              gap-x-2
              gap-y-1
              text-base
              font-medium
              leading-7
              text-zinc-600
              sm:mt-7
              sm:text-lg
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

            <span className="text-zinc-400">
              &
            </span>

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

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

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
              mt-4
              max-w-xl
              text-[16px]
              leading-7
              text-zinc-500
              sm:mt-5
              sm:text-[17px]
              sm:leading-8
              dark:text-zinc-400
            "
          >
            Saya membangun website, aplikasi web,
            dashboard, dan solusi berbasis AI dengan
            fokus pada performa, pengalaman pengguna,
            serta desain yang modern dan responsif.
          </motion.p>

          {/* ==================================================
              TECH STACK
          ================================================== */}

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
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Python",
              "PHP",
              "FastAPI",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-zinc-200
                  bg-white/60
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-zinc-600
                  backdrop-blur-xl
                  sm:px-3.5
                  sm:py-2
                  sm:text-[15px]
                  dark:border-zinc-800
                  dark:bg-zinc-900/50
                  dark:text-zinc-400
                "
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* ==================================================
              CTA
          ================================================== */}

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
              grid
              w-full
              grid-cols-1
              gap-3
              sm:flex
              sm:w-auto
              sm:flex-wrap
            "
          >
            {/* Projects */}

            <a
              href="#projects"
              className="
                group
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
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
                sm:w-auto
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
                min-h-12
                w-full
                items-center
                justify-center
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
                sm:w-auto
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
                min-h-12
                w-full
                items-center
                justify-center
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
                sm:w-auto
                dark:border-zinc-700
              "
            >
              <Download size={16} />

              Download CV
            </a>
          </motion.div>

          {/* ==================================================
              STATS
          ================================================== */}

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
              mt-10
              grid
              max-w-xl
              grid-cols-3
              border-t
              border-zinc-200
              pt-6
              sm:mt-12
              sm:pt-7
              dark:border-zinc-800
            "
          >
            {/* Stat 1 */}

            <div>
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-2xl
                "
              >
                10+
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                Projects Built
              </p>
            </div>

            {/* Stat 2 */}

            <div
              className="
                border-l
                border-zinc-200
                pl-4
                sm:pl-6
                dark:border-zinc-800
              "
            >
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-2xl
                "
              >
                40+
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                Technologies
              </p>
            </div>

            {/* Stat 3 */}

            <div
              className="
                border-l
                border-zinc-200
                pl-4
                sm:pl-6
                dark:border-zinc-800
              "
            >
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-2xl
                "
              >
                AI
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                Focus Area
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================
            RIGHT — HERO VISUAL
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
            px-0
            sm:px-0
          "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* ==================================================
              MAIN GLOW
          ================================================== */}

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
              h-[75%]
              w-[75%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/30
              blur-[70px]
              sm:blur-[100px]
            "
          />

          {/* ==================================================
              ORBIT 1
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
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[105%]
              w-[105%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-violet-500/15
              sm:block
            "
          />

          {/* ==================================================
              ORBIT 2
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
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[115%]
              w-[115%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-400/15
              sm:block
            "
          />

          {/* ==================================================
              IMAGE + BADGES
          ================================================== */}

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
            {/* ==================================================
                IMAGE FRAME
            ================================================== */}

            <div
              className="
                relative
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-zinc-950
                shadow-[0_25px_70px_rgba(76,29,149,0.25)]
                sm:aspect-[16/9]
                sm:rounded-[28px]
                sm:shadow-[0_35px_100px_rgba(76,29,149,0.25)]
                dark:shadow-[0_25px_70px_rgba(124,58,237,0.2)]
                sm:dark:shadow-[0_35px_100px_rgba(124,58,237,0.2)]
              "
            >
              <Image
                src="/profile.jpg"
                alt="Galang Sopyan - Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 94vw, (max-width: 768px) 90vw, 50vw"
                className="
                  object-cover
                  object-center
                "
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
                  rounded-[24px]
                  ring-1
                  ring-inset
                  ring-white/10
                  sm:rounded-[28px]
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
                right-2
                top-[8%]
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/90
                text-violet-600
                shadow-2xl
                backdrop-blur-xl
                sm:right-[-8px]
                sm:top-[12%]
                sm:h-16
                sm:w-16
                sm:rounded-2xl
              "
            >
              <Code2
                size={21}
                className="sm:hidden"
              />

              <Code2
                size={25}
                className="hidden sm:block"
              />
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
                left-2
                top-[30%]
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-zinc-950/90
                text-cyan-400
                shadow-2xl
                backdrop-blur-xl
                sm:left-[-20px]
                sm:top-[32%]
                sm:h-14
                sm:w-14
                sm:rounded-2xl
              "
            >
              <BrainCircuit
                size={20}
                className="sm:hidden"
              />

              <BrainCircuit
                size={23}
                className="hidden sm:block"
              />
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
                bottom-[-14px]
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
                sm:bottom-[-18px]
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

                <span
                  className="
                    text-[11px]
                    font-semibold
                  "
                >
                  Available for freelance
                </span>
              </div>

              <p
                className="
                  mt-0.5
                  pl-3.5
                  text-[9px]
                  text-zinc-400
                "
              >
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
              <p
                className="
                  text-base
                  font-black
                  leading-tight
                "
              >
                Full Stack
              </p>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  text-zinc-500
                "
              >
                Web Development
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================
          SCROLL INDICATOR
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