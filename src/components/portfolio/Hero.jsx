import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight, Code2, Mail } from "lucide-react";
import portrait from "@/assets/archana.png";
import resumePdf from "@/assets/Archana_Srikanth_Java.pdf";
import { LinkedInBadge } from "@/components/ui/social-icons";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const [productionApps, setProductionApps] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProductionApps((current) => {
        if (current >= 5) {
          window.clearInterval(timer);
          return 5;
        }

        return current + 1;
      });
    }, 180);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl text-center lg:text-left">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 glass px-3 py-1.5 font-mono text-[11px] text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities · 2026
          </motion.div>

          <motion.div variants={item} className="mx-auto mb-5 max-w-xs lg:hidden">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 glass shadow-glow">
              <img
                src={portrait}
                alt="Archana Srikanth, Full Stack Developer"
                width={1024}
                height={1024}
                className="aspect-square h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="hidden font-display text-3xl font-semibold tracking-tighter text-white sm:block sm:text-4xl lg:text-5xl"
          >
            Archana Srikanth
          </motion.h1>

          <motion.h1
            variants={item}
            className="whitespace-nowrap font-display text-[clamp(1.8rem,8vw,2.5rem)] font-semibold leading-none tracking-tighter text-primary sm:hidden"
          >
            Archana Srikanth.
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base lg:mx-0">
            Full Stack Developer building scalable web and mobile products with{" "}
            <span className="text-primary">MERN</span>,{" "}
            <span className="text-primary">Java Spring Boot</span>,{" "}
            <span className="text-primary">Flutter</span>, and{" "}
            <span className="text-primary">AI-assisted automation</span>.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
            >
              View selected work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/5"
            >
              Contact me
            </a>
            <a
              href={resumePdf}
              download="Archana_Srikanth_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-primary/20 hover:scale-[1.01]"
            >
              Download resume
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {[
                { Icon: Code2, href: "https://github.com/ArchanaSrikanth26/" },
                { Icon: LinkedInBadge, href: "https://www.linkedin.com/in/archanasrikanth/" },
                { Icon: Mail, href: "mailto:actarchanas@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-white/10 p-2.5 text-white transition-all hover:border-primary hover:bg-white/5 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:max-w-xl sm:gap-4 lg:mx-0">
            {[
              { k: "2+", v: "Years experience" },
              { k: `${productionApps}+`, v: "Production apps" },
              { k: "8.4", v: "B.Tech CGPA" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2.5 backdrop-blur-md sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
              >
                <div className="font-display text-base font-semibold leading-none whitespace-nowrap text-primary sm:text-2xl">
                  {s.k}
                </div>
                <div className="mt-1 whitespace-nowrap text-[10px] leading-tight text-white/78 sm:text-[13px]">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 glass shadow-glow">
            <img
              src={portrait}
              alt="Archana Srikanth, Full Stack Developer"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-card/80 px-3.5 py-2.5 font-mono text-[11px] shadow-card-soft"
          >
            <div className="text-white">● online</div>
            <div className="mt-0.5 text-white">Open to collaboration</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden flex-col items-center gap-2 font-mono text-[11px] text-white lg:absolute lg:bottom-8 lg:right-6 lg:flex"
        >
          <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
