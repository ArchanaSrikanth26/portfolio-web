import { motion } from "framer-motion";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { LinkedInBadge } from "@/components/ui/social-icons";

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="premium-card premium-card-hover relative overflow-hidden p-8 text-center sm:p-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/10" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="mb-5 text-xs font-mono uppercase tracking-[0.32em] text-primary">05 - Contact</div>
          <h2 className="font-display text-2xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build <span className="text-primary">something</span>
            <br />
            worth shipping.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/78">
            Open to full-stack roles, freelance engagements, and ambitious product collaborations.
          </p>

          <div className="mt-10 flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:actarchanas@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
            >
              actarchanas@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { Icon: Code2, href: "https://github.com/ArchanaSrikanth26/", label: "GitHub" },
              { Icon: LinkedInBadge, href: "https://www.linkedin.com/in/archanasrikanth/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:actarchanas@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="rounded-full border border-white/10 p-3 text-white transition hover:border-primary hover:bg-white/5 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 text-xs font-mono text-white/70 sm:flex-row">
        <span>© 2026 Archana Srikanth</span>
        <span>Designed and built with care.</span>
      </footer>
    </Section>
  );
}
