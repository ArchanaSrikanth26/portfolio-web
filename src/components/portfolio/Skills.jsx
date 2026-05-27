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
      <SectionHeading index="02" kicker="Skills" title="A toolkit built for shipping reliable products." />
      <div className="relative">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
          <CarouselContent>
            {groups.map((g, i) => (
              <CarouselItem key={g.title} className="pl-2 md:basis-full md:pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="premium-card premium-card-hover group relative overflow-hidden p-4 sm:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <div className="mb-2 text-[9px] font-mono uppercase tracking-[0.28em] text-primary/80 sm:text-[10px] sm:tracking-[0.32em]">
                          Category {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-3xl">
                          {g.title}
                        </h3>
                      </div>
                    
                    </div>
                    <div className="mb-5 h-px w-full bg-white/12 sm:mb-6" />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {g.items.map((s) => (
                        <div
                          key={s}
                          className="premium-chip flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-[11px] font-medium sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 sm:h-8 sm:w-8">
                            <SkillIcon skill={s} />
                          </span>
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end sm:mt-8">
                      <button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-card-soft transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 sm:px-6 sm:py-3 sm:text-sm"
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
