import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" kicker="About" title="Engineer with an eye for end-to-end products." />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a Full Stack Developer at <span className="text-foreground font-medium">CubenSquare</span>,
            where I design and ship scalable web applications and RESTful APIs across React, Node.js, Java
            and Spring Boot.
          </p>
          <p>
            I enjoy the entire arc of a product - from the first wireframe to a containerized deployment on AWS.
            Lately I've been blending classic backend engineering with{" "}
            <span className="text-foreground">OpenAI</span> and{" "}
            <span className="text-foreground">n8n workflows</span> to automate the boring parts of business.
          </p>
          <p>
            B.Tech in Artificial Intelligence & Data Science, CGPA 8.4. Based in India, building for the world.
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
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Currently
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-primary font-mono">August 2024 - Present</div>
                <div className="font-display font-semibold text-lg mt-1">Full Stack Developer | MERN</div>
                <div className="text-sm text-muted-foreground">On-Site | CubenSquare, Chennai</div>
              </div>
              <div className="h-px bg-border" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">→</span> Designed and developed scalable web applications and RESTful APIs</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Built responsive interfaces with React.js and Tailwind CSS</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Improved product quality with JUnit and Mockito testing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
