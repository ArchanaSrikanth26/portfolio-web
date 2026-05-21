import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight, Code2, Briefcase, Mail } from "lucide-react";
import portrait from "@/assets/archana.png";
import resumePdf from "@/assets/Archana_Srikanth_Java.pdf";

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
    <section id="top" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border-2 border-white glass px-3 py-1.5 text-xs font-mono text-white mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities · 2026
          </motion.div>

          <motion.h1 variants={item} className="font-display font-semibold leading-[0.9] text-4xl sm:text-6xl lg:text-8xl tracking-tighter">
            Archana
            <br />
            <span className="text-primary">Srikanth.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-2xl text-lg sm:text-xl text-white leading-relaxed">
            Full Stack Developer crafting scalable web & mobile products with{" "}
            <span className="text-primary">MERN</span>,{" "}
            <span className="text-primary">Java Spring Boot</span>,{" "}
            <span className="text-primary">Flutter</span>, and{" "}
            <span className="text-primary">AI-driven automation</span>.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all duration-300"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
            <a
              href={resumePdf}
              download="Archana_Srikanth_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/20"
            >
              Download resume
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {[
                { Icon: Code2, href: "#" },
                { Icon: Briefcase, href: "#" },
                { Icon: Mail, href: "mailto:actarchanas@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2.5 rounded-full text-white hover:text-primary hover:bg-secondary transition-all border border-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl">
            {[
              { k: "2+", v: "Years experience" },
              { k: `${productionApps}+`, v: "Production apps" },
              { k: "8.4", v: "B.Tech CGPA" },
            ].map((s) => (
              <div key={s.v} className="bg-background/40 p-4 sm:p-0 sm:bg-transparent">
                <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/90">{s.v}</div>
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
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border-2 border-white glass shadow-glow">
            <img
              src={portrait}
              alt="Archana Srikanth, Full Stack Developer"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 text-xs font-mono shadow-card-soft border-2 border-white"
          >
            <div className="text-white">● online</div>
            <div className="text-white mt-0.5">Building in public</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:flex absolute right-8 bottom-10 flex-col items-center gap-2 text-xs text-white font-mono"
        >
          <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>scroll</span>
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
