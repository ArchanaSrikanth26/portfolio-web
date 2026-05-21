import { motion } from "framer-motion";
import { Mail, Phone, Code2, Briefcase, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2rem] border border-white/20 glass p-8 sm:p-16 overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-5">05 — Contact</div>
          <h2 className="font-display text-2xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
            Let's build <span className="text-primary">something</span>
            <br />
            worth shipping.
          </h2>
          <p className="mt-6 text-base text-white max-w-xl mx-auto">
            Open to full-stack roles, freelance collaborations and ambitious side-projects.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
            <a
              href="mailto:actarchanas@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
            >
              actarchanas@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { Icon: Code2, href: "#", label: "GitHub" },
              { Icon: Briefcase, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:actarchanas@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full border border-white/20 p-3 text-white transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white">
        <span>© 2026 Archana Srikanth</span>
        <span>Designed & built with care.</span>
      </footer>
    </Section>
  );
}
