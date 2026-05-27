import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  Globe,
  LayoutDashboard,
  MapPinned,
  MonitorSmartphone,
  Network,
  Package,
  PenTool,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  BookOpen,
  Layers3,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "./Section";
import { projects } from "./projectData";

const stackIconMap = {
  "Flutter (Dart)": Smartphone,
  "React.js": MonitorSmartphone,
  "Node.js": Server,
  "Node.js (Express)": Server,
  "Node.js (Express.js)": Server,
  "Express.js": Server,
  "MongoDB": Database,
  Firebase: Cloud,
  "Google Maps API": MapPinned,
  JWT: ShieldCheck,
  "JWT Auth": ShieldCheck,
  "Tailwind CSS": PenTool,
  Razorpay: CreditCard,
  Java: Code2,
  "Spring Boot": Server,
  Maven: Package,
  "REST API": Globe,
  "REST APIs": Globe,
  "Material UI": LayoutDashboard,
  "MySQL": Database,
  "Vite (React.js)": MonitorSmartphone,
  Microservices: Network,
  "PDF Reports": FileText,
  "Push Notifications": Workflow,
  "Role-Based Access": ShieldCheck,
  "Responsive UI": MonitorSmartphone,
  "Dashboard UI": LayoutDashboard,
  "Access Control": ShieldCheck,
  Admin: LayoutDashboard,
  Instructor: Code2,
  Student: BookOpen,
  "Learning Operations": Workflow,
  "Route Tracking": MapPinned,
  "Order Management": Workflow,
  "Driver Tracking": MapPinned,
  "Map Routing": MapPinned,
  "Production Deployment": Cloud,
  Docker: Package,
  "Query Optimization": Layers3,
  JPA: Database,
  "Invoice Records": FileText,
};

function StackIcon({ name }) {
  const Icon = stackIconMap[name] ?? Code2;
  return <Icon className="h-4 w-4 text-primary" strokeWidth={2.1} />;
}

function StackChip({ name }) {
  return (
    <span className="premium-chip flex items-center gap-2 rounded-full px-3 py-2 font-mono text-[11px] font-medium text-white/90">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10">
        <StackIcon name={name} />
      </span>
      <span>{name}</span>
    </span>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="05" kicker="Selected Work" title="Things I've designed, built and shipped." />
      <div className="grid grid-cols-1 gap-6 auto-rows-fr md:grid-cols-2">
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
              className="premium-card premium-card-hover group relative flex min-h-[420px] h-full flex-col overflow-hidden p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              {p.slug ? (
                <Link
                  to={`/projects/${p.slug}`}
                  aria-label={`${p.name} details`}
                  className="absolute inset-0 z-10 rounded-[1.5rem]"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">{p.tag}</span>
                  <ArrowUpRight className="relative z-20 h-5 w-5 text-white/85 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {p.name}
                </h3>
                <div className="mb-5 h-px w-full bg-white/12" />
                <p className="mb-3 text-sm font-medium leading-relaxed text-white/85 sm:text-base">
                  {p.point}
                </p>
                <div className="mb-2 text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-primary">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <StackChip key={s} name={s} />
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
