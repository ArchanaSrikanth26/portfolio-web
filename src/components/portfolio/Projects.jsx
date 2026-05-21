import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "./Section";
import { projects } from "./projectData";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="05" kicker="Selected Work" title="Things I've designed, built and shipped." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {projects.map((p, i) => {
          const Card = motion.article;

          return (
            <Card
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full min-h-[420px] flex-col rounded-3xl border border-white/20 bg-card p-7 overflow-hidden shadow-card-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              {p.slug ? (
                <Link
                  to={`/projects/${p.slug}`}
                  aria-label={`${p.name} details`}
                  className="absolute inset-0 z-10 rounded-3xl"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">{p.tag}</span>
                  <ArrowUpRight className="relative z-20 h-5 w-5 text-white group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {p.name}
                </h3>
                <div className="h-px w-full bg-white mb-5" />
                <p className="mb-3 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                  {p.point}
                </p>
                <div className="mb-2 text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-primary">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded bg-secondary px-2 py-1 font-mono text-[11px] font-medium text-white/90">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
