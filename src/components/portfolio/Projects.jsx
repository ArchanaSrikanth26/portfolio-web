import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import icopeHandbookTamilPdf from "../../assets/ICOPE HANDBOOK TAMIL.pdf";
import groceryCustomerPdf from "../../assets/LPS - GROCERY CUSTOMER APP.pdf";
import saasAdminPdf from "../../assets/SAAS - ADMIN PANEL.pdf";

const projects = [
  {
    name: "ICOPE Handbook Application",
    tag: "WHO Project (AIIMS) | Mar 2026 - Present",
    point: "Developed a mobile healthcare app with patient data management, questionnaire workflows, PDF reports, Tamil support, and an admin web panel.",
    stack: ["Flutter (Dart)", "React.js", "Node.js", "Google Maps API"],
    pdfUrl: icopeHandbookTamilPdf,
  },
  {
    name: "Grocery Mobile Applications",
    tag: "Customer & Driver Apps | Nov 2025 - Feb 2026",
    point: "Built cross-platform Customer and Driver apps in Flutter with push notifications, live location tracking, and route optimization.",
    stack: ["Flutter (Dart)", "Node.js (Express)", "MongoDB", "Firebase", "Google Maps API", "JWT"],
    pdfUrl: groceryCustomerPdf,
  },
  {
    name: "SAAS Grocery Application",
    tag: "Super Admin & Vendor Panel | Aug 2025 - Oct 2025",
    point: "Developed a multi-vendor grocery platform with role-based dashboards for inventory, order, and driver management.",
    stack: ["React.js", "Node.js", "Flutter (Dart)", "Google Maps API", "Firebase", "Razorpay", "JWT"],
    pdfUrl: saasAdminPdf,
  },
  {
    name: "Logistics Management System",
    tag: "Production (Malaysia) | Apr 2025 - Jul 2025",
    point: "Built a role-based logistics platform with vehicle management, AI invoice generation, live GPS tracking, and Dockerized deployment.",
    stack: ["Vite (React.js)", "Node.js (Express)", "MySQL", "Tailwind CSS", "Razorpay", "JWT", "Google Maps API", "Docker", "SMTP"],
  },
  {
    name: "Fuel Management System (FMS)",
    tag: "Production (Canada) | Dec 2024 - Mar 2025",
    point: "Developed broker onboarding, multi-tenant access control, WEX API integration, and dashboards for fleet insights and fuel performance.",
    stack: ["React.js", "Java", "Spring Boot", "Maven", "REST API", "Material UI", "WEX API", "Microservices"],
  },
  {
    name: "Learning Management System (LMS)",
    tag: "Aug 2024 - Nov 2024",
    point: "Developed a role-based LMS for admins, instructors, and students with responsive dashboards and improved query efficiency.",
    stack: ["React.js", "Java", "Spring Boot", "MySQL", "REST APIs", "Material UI", "JPA"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="05" kicker="Selected Work" title="Things I've designed, built and shipped." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {projects.map((p, i) => {
          const Card = p.pdfUrl ? motion.a : motion.article;

          return (
            <Card
              key={p.name}
              {...(p.pdfUrl ? { href: p.pdfUrl, target: "_blank", rel: "noreferrer" } : {})}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full min-h-[420px] flex-col rounded-3xl border border-border bg-card p-7 overflow-hidden shadow-card-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">{p.tag}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  {p.name}
                </h3>
                <div className="h-px w-full bg-border/70 mb-5" />
                <p className="text-muted-foreground leading-relaxed font-medium mb-3">
                  {p.point}
                </p>
                <div className="mb-2 text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-1 rounded bg-secondary border border-white/15 text-muted-foreground font-bold">
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
