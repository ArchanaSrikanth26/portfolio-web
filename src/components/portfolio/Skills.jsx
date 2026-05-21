import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  KeyRound,
  Layers3,
  LayoutDashboard,
  Mail,
  Map,
  MonitorSmartphone,
  Network,
  Package,
  Paintbrush,
  PenTool,
  Server,
  Settings2,
  Workflow,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Redux", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Bootstrap", "Flutter (Dart)"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "Hibernate/JPA",
      "Microservices",
      "MVC Architecture",
      "RESTful API Development",
      "JWT Authentication",
      "Dependency Injection",
      "Transaction Management",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Cloud & Services",
    items: ["AWS (S3, SNS, ECR)", "Firebase", "FCM", "Vercel", "Render"],
  },
  {
    title: "AI & Automation",
    items: ["Machine Learning", "TensorFlow.js", "OpenAI API", "n8n (Workflow Automation)", "Prompt Engineering"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Postman", "WebStorm", "WebSocket", "Jira", "Figma", "Scrum/Agile"],
  },
  {
    title: "Payments & APIs",
    items: ["Razorpay", "WEX API", "Google Maps API", "SMTP"],
  },
];

const skillIconMap = {
  "React.js": Code2,
  "Redux": Layers3,
  "TypeScript": FileCode2,
  "JavaScript (ES6+)": Code2,
  "Tailwind CSS": Paintbrush,
  "Material UI": LayoutDashboard,
  "Bootstrap": LayoutDashboard,
  "Flutter (Dart)": MonitorSmartphone,
  "Node.js": Server,
  "Express.js": Server,
  "Java": Code2,
  "Spring Boot": Server,
  "Python": Code2,
  "Hibernate/JPA": Database,
  "Microservices": Network,
  "MVC Architecture": Layers3,
  "RESTful API Development": Globe,
  "JWT Authentication": KeyRound,
  "Dependency Injection": Settings2,
  "Transaction Management": Workflow,
  "MongoDB": Database,
  "MySQL": Database,
  "AWS (S3, SNS, ECR)": Cloud,
  "Firebase": Cloud,
  "FCM": Cloud,
  Vercel: Cloud,
  Render: Cloud,
  "Machine Learning": Bot,
  "TensorFlow.js": Bot,
  "OpenAI API": Bot,
  "n8n (Workflow Automation)": Workflow,
  "Prompt Engineering": Bot,
  Docker: Package,
  Git: GitBranch,
  GitHub: GitBranch,
  Postman: Code2,
  WebStorm: MonitorSmartphone,
  WebSocket: Network,
  Jira: LayoutDashboard,
  Figma: PenTool,
  "Scrum/Agile": Workflow,
  Razorpay: CreditCard,
  "WEX API": Globe,
  "Google Maps API": Map,
  SMTP: Mail,
};

function SkillIcon({ skill }) {
  const Icon = skillIconMap[skill] ?? Code2;

  return <Icon className="h-4 w-4 text-primary" strokeWidth={2.2} />;
}

export function Skills() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <Section id="skills">
      <SectionHeading index="02" kicker="Skills" title="A toolkit for shipping real products." />
      <div className="relative">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
          <CarouselContent>
            {groups.map((g, i) => (
              <CarouselItem key={g.title} className="pl-4 md:basis-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/30 bg-card/90 backdrop-blur-md p-6 sm:p-8 shadow-card-soft"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.32em] text-primary/80 mb-2">
                          Category {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                          {g.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-white/30 bg-background/60 px-4 py-2 text-xs font-mono text-white/90">
                        Use Next / Prev to browse
                      </div>
                    </div>
                    <div className="mb-6 h-px w-full bg-white/60" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {g.items.map((s) => (
                        <div
                          key={s}
                        className="flex items-center gap-3 rounded-2xl border border-white/20 bg-secondary/50 px-4 py-3 text-sm font-medium text-secondary-foreground/90 transition-colors hover:border-primary hover:text-primary sm:text-base"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
                            <SkillIcon skill={s} />
                          </span>
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card-soft transition-colors hover:bg-primary/90"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
}
