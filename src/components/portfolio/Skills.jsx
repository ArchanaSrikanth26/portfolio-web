import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/90 backdrop-blur-md p-6 sm:p-8 shadow-card-soft"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.32em] text-primary/80 mb-2">
                          Category {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                          {g.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-mono text-muted-foreground">
                        Use Next / Prev to browse
                      </div>
                    </div>
                    <div className="h-px w-full bg-border/70 mb-6" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {g.items.map((s) => (
                        <div
                          key={s}
                          className="rounded-2xl border border-white/15 bg-secondary/50 px-4 py-3 text-sm sm:text-base font-semibold text-secondary-foreground/90 transition-colors hover:border-white/60 hover:text-primary"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-card-soft transition-colors hover:bg-red-500"
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
