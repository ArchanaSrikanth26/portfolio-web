import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="03" kicker="Education" title="My academic foundation." />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl rounded-3xl border border-border glass p-6 sm:p-8 shadow-card-soft"
      >
        <div className="text-xs font-mono uppercase tracking-widest text-primary">2020 — 2024</div>
        <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">
          B.Tech, AI & Data Science
        </h3>
        <div className="mt-2 text-sm text-muted-foreground">
          Arjun College of Technology · CGPA 8.4
        </div>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Specialized in Artificial Intelligence and Data Science with a strong systems foundation.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Certified in Full Stack Web Development (Udemy, Naan Mudhalvan) and MongoDB CRUD
          (MongoDB University).
        </p>
      </motion.div>
    </Section>
  );
}
