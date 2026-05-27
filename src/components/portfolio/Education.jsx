import { motion } from "framer-motion";
import { Award, CalendarDays, GraduationCap, School, Sparkles } from "lucide-react";
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
        className="premium-card premium-card-hover max-w-3xl p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.28em] text-primary/90">
          <CalendarDays className="h-3.5 w-3.5" />
          2020 - 2024
        </div>

        <div className="mt-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
              B.Tech, AI & Data Science
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/75">
              <School className="h-3.5 w-3.5 text-primary" />
              Arjun College of Technology · CGPA 8.4
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/80">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Focused on Artificial Intelligence and Data Science with a strong systems foundation.</span>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/80">
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Certified in Full Stack Web Development and MongoDB CRUD.</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
