import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const items = [
  {
    when: "August 2024 - Present",
    role: "Full Stack Developer | MERN",
    org: "On-Site | CubenSquare, Chennai",
    points: [
      "Designed and developed scalable web applications and RESTful APIs using React.js, Node.js, Java, and Spring Boot, improving overall system performance by 15%.",
      "Built responsive, user-friendly interfaces with React.js and Tailwind CSS, increasing user engagement by 10%.",
      "Integrated payment gateways (Razorpay) and implemented AI-driven invoice generation workflows using n8n and OpenAI API to automate core business processes.",
      "Applied unit and integration testing with JUnit and Mockito, achieving 90% test coverage across critical modules.",
      "Maintained version control using Git and conducted API testing with Postman within an Agile/Scrum development environment.",
      "Worked across production deployments serving clients in Canada and Malaysia.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="work">
      <SectionHeading index="04" kicker="Experience" title="The story so far." />
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="absolute left-2 sm:left-4 top-1.5 h-5 w-5 rounded-full border-2 border-white/50 bg-background shadow-glow" />
              <div className="text-xs font-mono text-primary uppercase tracking-widest">{it.when}</div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">{it.role}</h3>
              <div className="text-sm text-muted-foreground mb-4">{it.org}</div>
              <ul className="space-y-2 text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-primary mt-1.5 h-1 w-3 bg-primary/60 rounded-full shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
