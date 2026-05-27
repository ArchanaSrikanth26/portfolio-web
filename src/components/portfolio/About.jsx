import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Cpu, GraduationCap, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" kicker="About" title="Engineer with an eye for end-to-end products." />
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3"
        >
          <p className="flex gap-3">
            <BriefcaseBusiness className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>
              I&apos;m a Full Stack Developer at <span className="font-medium text-foreground">CubenSquare</span>,
              where I design and deliver scalable web applications and RESTful APIs across React, Node.js, Java,
              and Spring Boot.
            </span>
          </p>
          <p className="flex gap-3">
            <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>
              I enjoy the full product lifecycle - from the first wireframe to a containerized deployment on AWS.
              Lately I&apos;ve been combining backend engineering with{" "}
              <span className="text-foreground">OpenAI</span> and{" "}
              <span className="text-foreground">n8n workflows</span> to streamline repetitive business tasks.
            </span>
          </p>
          <p className="flex gap-3">
            <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>
              B.Tech in Artificial Intelligence &amp; Data Science, CGPA 8.4. Based in India and building for a
              global audience.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-2xl p-6 shadow-card-soft">
            <div className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <Cpu className="h-3.5 w-3.5 text-primary" />
              Currently
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-mono text-sm text-primary">Aug 2024 - Present</div>
                <div className="mt-1 font-display text-base font-semibold">Java Full Stack Developer</div>
                <div className="text-sm text-muted-foreground">CubenSquare · On-site</div>
              </div>
              <div className="h-px bg-border" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>Improved system performance by 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>Enhanced UX engagement by 10%</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>Maintained 90% test coverage with JUnit</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
