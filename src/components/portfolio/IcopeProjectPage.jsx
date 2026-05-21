import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeInfo,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  FileText,
  Globe,
  Languages,
  LayoutDashboard,
  MapPinned,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Server,
  Workflow,
  Activity,
  Database,
  Route,
  PanelTop,
  PenTool,
  CreditCard,
  Layers3,
  FileCode2,
  GitBranch,
  KeyRound,
  Package,
  Network,
  Settings2,
  Bot,
} from "lucide-react";
import { projectsBySlug } from "./projectData";

const techIconMap = {
  "Flutter (Dart)": Smartphone,
  "Google Maps API": MapPinned,
  "Tamil Localization": Languages,
  "PDF Reports": FileText,
  "React.js": MonitorSmartphone,
  "Admin Panel": LayoutDashboard,
  "Role-Based Access": ShieldCheck,
  "Responsive UI": PanelTop,
  "Node.js": Server,
  "Express.js": Server,
  "MongoDB": Database,
  "JWT Auth": ShieldCheck,
  Firebase: Cloud,
  "Push Notifications": Workflow,
  "Geo Routing": Route,
  "REST APIs": Globe,
  "Vite (React.js)": MonitorSmartphone,
  "MySQL": Database,
  "Tailwind CSS": PenTool,
  Razorpay: CreditCard,
  "JWT": KeyRound,
  Java: Code2,
  "Spring Boot": Server,
  Maven: Package,
  "REST API": Globe,
  "Material UI": LayoutDashboard,
  "WEX API": Globe,
  Microservices: Network,
  "React admin panel": LayoutDashboard,
  "Flutter mobile app": Smartphone,
  "Dashboard UI": LayoutDashboard,
  "Access Control": ShieldCheck,
  "Secure Login": KeyRound,
  "Order Management": Workflow,
  "Driver Tracking": MapPinned,
  "Map Routing": Route,
  "Production Deployment": Cloud,
  Docker: Package,
  "Query Optimization": Settings2,
  JPA: Database,
  "Role Data": Database,
  Students: BookOpen,
  "Learning Operations": Workflow,
  Admin: LayoutDashboard,
  Instructor: Code2,
  Student: BookOpen,
  "Responsive Layout": PanelTop,
  "Invoice Records": FileText,
  "Fleet Insights": Globe,
  "Broker Onboarding": ShieldCheck,
  "Tenant Data": Database,
  "Fleet Tracking": MapPinned,
  "Production logistics workflow": Workflow,
  "Project UI": MonitorSmartphone,
  "Machine Learning": Bot,
  "TensorFlow.js": Bot,
};

function TechIcon({ name }) {
  const Icon = techIconMap[name] ?? Code2;
  return <Icon className="h-4 w-4 text-primary" strokeWidth={2.1} />;
}

function TechChip({ name }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/50 px-4 py-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        <TechIcon name={name} />
      </span>
      <span className="text-sm font-medium text-white/90">{name}</span>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children, className = "" }) {
  return (
    <section className={`rounded-[1.5rem] border border-white/10 bg-card/75 p-6 shadow-card-soft backdrop-blur-md ${className}`}>
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      {children}
    </section>
  );
}

function InfoGrid({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-background/50 p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</div>
          <div className="mt-1 text-sm font-medium leading-6 text-white">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function IcopeProjectPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projectsBySlug[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-background px-4 py-24 text-foreground">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-card/80 p-8 text-center shadow-card-soft">
          <h1 className="font-display text-2xl font-semibold text-primary">Project not found</h1>
          <p className="mt-4 text-white/80">The project you requested does not exist.</p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background px-5 py-3 text-sm font-medium text-white transition hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/12 to-transparent" />

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {project.badge ?? "Case study"}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-[1.75rem] border border-white/10 bg-card/80 p-7 shadow-card-soft backdrop-blur-md sm:p-10">
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
                  {project.tag}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Detailed case study
                </span>
              </div>

              <h1 className="max-w-3xl font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {project.name}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                {project.summary}
              </p>

              {project.artifactUrl ? (
                <div className="mt-8">
                  <a
                    href={project.artifactUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    Click here to view my project UI
                  </a>
                </div>
              ) : null}

              <div className="mt-10">
                <InfoGrid
                  items={[
                    ["Focus", project.snapshot?.[0]?.[1] ?? "Project delivery"],
                    ["Context", project.snapshot?.[1]?.[1] ?? "Multi-role workflow"],
                    ["Output", project.artifactUrl ? "PDF UI reference" : "Detailed case study"],
                    ["Scope", project.snapshot?.[3]?.[1] ?? "Full product experience"],
                  ]}
                />
              </div>
            </div>
          </article>

          <aside className="grid gap-4">
            <SectionCard title="Project snapshot" icon={BadgeInfo}>
              <div className="grid gap-3">
                {project.snapshot.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-background/50 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</div>
                    <div className="mt-1 text-sm font-medium leading-6 text-white">{value}</div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Key highlights" icon={CheckCircle2}>
              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionCard title="Overview" icon={FileText}>
            <div className="space-y-4">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-white/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Timeline" icon={Activity}>
            <div className="space-y-5">
              {project.timeline.map((step, index) => (
                <div key={step.title} className="relative pl-10">
                  <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-4 w-4 text-primary" />
                  </div>
                  {index !== project.timeline.length - 1 && (
                    <div className="absolute left-[13px] top-7 h-full w-px bg-white/10" />
                  )}
                  <h3 className="text-base font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{step.text}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Tech stack" icon={Code2} className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {project.techGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-background/50 p-5">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                  {group.title}
                </h3>
                <div className="grid gap-3">
                  {group.items.map((item) => (
                    <TechChip key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard title="Outcome" icon={ShieldCheck}>
            <p className="text-sm leading-7 text-white/80">
              {project.name} delivers a clean, professional foundation for the workflow it was designed for,
              helping teams collect structured information, review records quickly, and keep operations organized.
            </p>
          </SectionCard>

          <SectionCard title="Design priorities" icon={Sparkles}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clear user flows",
                "Readable hierarchy",
                "Role-based control",
                "Fast task execution",
                "Mobile-friendly density",
                "Production-ready structure",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-background/50 px-4 py-3 text-sm font-medium text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>
    </main>
  );
}
