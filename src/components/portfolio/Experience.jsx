import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const points = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const point = {
  hidden: { opacity: 0, x: -16, y: 8 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const items = [
  {
    when: "August 2024 - Present",
    role: "Full Stack Developer | MERN",
    org: "On-Site | CubenSquare, Chennai",
    points: [
      "Designed and developed scalable web applications and RESTful APIs using React.js, Node.js, Java, and Spring Boot, improving overall system performance by 15%.",
      "Built responsive, user-friendly interfaces with React.js and Tailwind CSS, increasing user engagement by 10%.",
      "Integrated payment gateways and implemented AI-driven invoice generation workflows using n8n and OpenAI API to automate core business processes.",
      "Applied unit and integration testing with JUnit and Mockito, achieving 90% test coverage across critical modules.",
      "Maintained version control using Git and conducted API testing with Postman within an Agile/Scrum environment.",
      "Worked across production deployments serving clients in Canada and Malaysia.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="work">
      <SectionHeading index="04" kicker="Experience" title="The story so far." />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="premium-card premium-card-hover relative overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-90" />
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/35 to-transparent shadow-glow sm:left-6" />
          <div className="space-y-14">
            {items.map((it) => (
              <motion.div
                key={it.role}
                variants={card}
                whileHover={{ y: -4 }}
                className="group relative rounded-[1.25rem] pl-14 transition-all duration-300 sm:pl-20"
              >
                <div className="absolute left-2 top-1.5 h-5 w-5 rounded-full border border-primary/60 bg-background shadow-[0_0_0_6px_rgba(77,163,255,0.08),0_0_24px_rgba(77,163,255,0.32)] transition-transform duration-300 group-hover:scale-110 sm:left-4" />
                <div className="text-xs font-mono uppercase tracking-[0.32em] text-primary/90">{it.when}</div>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {it.role}
                </h3>
                <div className="mb-5 text-xs text-white/70 sm:text-sm">{it.org}</div>
                <motion.ul variants={points} className="space-y-3 text-white/76">
                  {it.points.map((p) => (
                    <motion.li key={p} variants={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-primary/70 shadow-[0_0_18px_rgba(77,163,255,0.35)]" />
                      <span className="max-w-3xl">{p}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
