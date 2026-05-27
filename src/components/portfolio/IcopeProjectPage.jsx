import { Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  BadgeInfo,
  Bot,
  CheckCircle2,
  Code2,
  Cloud,
  CreditCard,
  Database,
  FileText,
  Globe,
  Image as ImageIcon,
  KeyRound,
  Languages,
  LayoutDashboard,
  MapPinned,
  MonitorSmartphone,
  Network,
  Package,
  PenTool,
  Route,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Settings2,
  Smartphone as PhoneIcon,
} from "lucide-react";
import customerapp1 from "../../assets/customerapp1.png";
import customerapp10 from "../../assets/customerapp10.png";
import customerapp2 from "../../assets/customerapp2.png";
import customerapp3 from "../../assets/customerapp3.png";
import customerapp4 from "../../assets/customerapp4.png";
import customerapp5 from "../../assets/customerapp5.png";
import customerapp6 from "../../assets/customerapp6.png";
import customerapp8 from "../../assets/customerapp8.png";
import customerapp9 from "../../assets/customerapp9.png";
import driverapp1 from "../../assets/driverapp1.png";
import driverapp10 from "../../assets/driverapp10.png";
import driverapp2 from "../../assets/driverapp2.png";
import driverapp3 from "../../assets/driverapp3.png";
import driverapp4 from "../../assets/driverapp4.png";
import driverapp5 from "../../assets/driverapp5.png";
import driverapp6 from "../../assets/driverapp6.png";
import driverapp7 from "../../assets/driverapp7.png";
import driverapp8 from "../../assets/driverapp8.png";
import driverapp9 from "../../assets/driverapp9.png";
import admin1 from "../../assets/admin1.png";
import admin10 from "../../assets/admin10.png";
import admin2 from "../../assets/admin2.png";
import admin3 from "../../assets/admin3.png";
import admin4 from "../../assets/admin4.png";
import admin5 from "../../assets/admin5.png";
import admin6 from "../../assets/admin6.png";
import admin7 from "../../assets/admin7.png";
import admin8 from "../../assets/admin8.png";
import admin9 from "../../assets/admin9.png";
import logistics1 from "../../assets/logistics1.png";
import logistics2 from "../../assets/logistics2.png";
import logistics4 from "../../assets/logistics4.png";
import logistics7 from "../../assets/logistics7.png";
import logistics8 from "../../assets/logistics8.png";
import icope1 from "../../assets/icope1.png";
import icope2 from "../../assets/icope2.jpg";
import icope3 from "../../assets/icope3.jpg";
import icope4 from "../../assets/icope4.jpg";
import icope5 from "../../assets/icope5.jpg";
import icope6 from "../../assets/icope6.jpg";
import icope7 from "../../assets/icope7.jpg";
import icope8 from "../../assets/icope8.jpg";
import { projectsBySlug } from "./projectData";

const EASE = [0.22, 1, 0.36, 1];

const pageVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const images = [
  { src: icope1, alt: "ICOPE screen 1" },
  { src: icope2, alt: "ICOPE screen 2" },
  { src: icope3, alt: "ICOPE screen 3" },
  { src: icope4, alt: "ICOPE screen 4" },
  { src: icope5, alt: "ICOPE screen 5" },
  { src: icope6, alt: "ICOPE screen 6" },
  { src: icope7, alt: "ICOPE screen 7" },
  { src: icope8, alt: "ICOPE screen 8" },
];

const groceryCustomerImages = [
  { src: customerapp1, alt: "Grocery customer app screen 1" },
  { src: customerapp2, alt: "Grocery customer app screen 2" },
  { src: customerapp3, alt: "Grocery customer app screen 3" },
  { src: customerapp4, alt: "Grocery customer app screen 4" },
  { src: customerapp5, alt: "Grocery customer app screen 5" },
  { src: customerapp6, alt: "Grocery customer app screen 6" },
  { src: customerapp8, alt: "Grocery customer app screen 8" },
  { src: customerapp9, alt: "Grocery customer app screen 9" },
  { src: customerapp10, alt: "Grocery customer app screen 10" },
];

const groceryDriverImages = [
  { src: driverapp1, alt: "Grocery driver app screen 1" },
  { src: driverapp2, alt: "Grocery driver app screen 2" },
  { src: driverapp3, alt: "Grocery driver app screen 3" },
  { src: driverapp4, alt: "Grocery driver app screen 4" },
  { src: driverapp5, alt: "Grocery driver app screen 5" },
  { src: driverapp6, alt: "Grocery driver app screen 6" },
  { src: driverapp7, alt: "Grocery driver app screen 7" },
  { src: driverapp8, alt: "Grocery driver app screen 8" },
  { src: driverapp9, alt: "Grocery driver app screen 9" },
  { src: driverapp10, alt: "Grocery driver app screen 10" },
];

const saasAdminImages = [
  { src: admin1, alt: "SaaS admin screen 1" },
  { src: admin2, alt: "SaaS admin screen 2" },
  { src: admin3, alt: "SaaS admin screen 3" },
  { src: admin4, alt: "SaaS admin screen 4" },
  { src: admin5, alt: "SaaS admin screen 5" },
  { src: admin6, alt: "SaaS admin screen 6" },
  { src: admin7, alt: "SaaS admin screen 7" },
  { src: admin8, alt: "SaaS admin screen 8" },
  { src: admin9, alt: "SaaS admin screen 9" },
  { src: admin10, alt: "SaaS admin screen 10" },
];

const logisticsImages = [
  { src: logistics1, alt: "Logistics screen 1" },
  { src: logistics2, alt: "Logistics screen 2" },
  
  { src: logistics4, alt: "Logistics screen 4" },
  { src: logistics7, alt: "Logistics screen 7" },
  { src: logistics8, alt: "Logistics screen 8" },
];

const techIconMap = {
  "Flutter (Dart)": Smartphone,
  "Google Maps API": MapPinned,
  "Tamil Localization": Languages,
  "PDF Reports": FileText,
  "React.js": MonitorSmartphone,
  "Admin Panel": LayoutDashboard,
  "Role-Based Access": ShieldCheck,
  "Responsive UI": MonitorSmartphone,
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
  Students: BadgeInfo,
  "Learning Operations": Workflow,
  Admin: LayoutDashboard,
  Instructor: Code2,
  Student: BadgeInfo,
  "Responsive Layout": MonitorSmartphone,
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

const snapshotIconMap = {
  Platform: PhoneIcon,
  "Core Stack": Code2,
  "Key Features": Sparkles,
  Delivery: Workflow,
  "Business Focus": LayoutDashboard,
  "Mobile Focus": Smartphone,
};

const noGalleryProjects = new Set(["fuel-management-system", "learning-management-system"]);

function TechIcon({ name }) {
  const Icon = techIconMap[name] ?? Code2;
  return <Icon className="h-4 w-4 text-primary" strokeWidth={2.1} />;
}

function TechChip({ name }) {
  return (
    <div className="premium-chip flex items-center gap-2.5 rounded-2xl px-3 py-2.5 backdrop-blur-md transition-all duration-300">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10">
        <TechIcon name={name} />
      </span>
      <span className="text-[13px] font-medium leading-snug text-white/88">{name}</span>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children, className = "" }) {
  return (
    <section className={`premium-card premium-card-hover p-6 backdrop-blur-xl sm:p-7 ${className}`}>
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      {children}
    </section>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.26em] text-white/55">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>
      <div className="mt-3 text-sm font-semibold leading-6 text-white">{value}</div>
    </div>
  );
}

function GalleryCarousel({ title, badge, images, aspectClass = "aspect-[9/16]" }) {
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return undefined;

    const timer = window.setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, [carouselApi]);

  return (
    <div className="mx-auto w-full max-w-[92vw] rounded-[1.5rem] border border-white/10 bg-[#040816] p-3 shadow-card-soft sm:max-w-none sm:rounded-[1.75rem] sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4 sm:gap-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-primary/85 sm:text-[11px] sm:tracking-[0.28em]">
            {title}
          </div>
          <div className="mt-1 text-[11px] text-white/60 sm:text-sm">{images.length} screens</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/60 sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
          {badge}
        </div>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setCarouselApi}
        className="w-full touch-pan-y"
      >
        <CarouselContent className="touch-pan-y">
          {images.map((image, index) => (
            <CarouselItem key={image.alt} className="basis-full">
              <motion.div
                variants={itemVariants}
                className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#030712] p-3 shadow-card-soft sm:rounded-[1.5rem] sm:p-4"
              >
                <div className={`relative overflow-hidden rounded-[1rem] bg-[#030712] ring-1 ring-white/5 ${aspectClass}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between px-1 sm:mt-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/50 sm:text-[11px] sm:tracking-[0.28em]">
                    Screen {index + 1}
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-white/55 sm:text-[10px] sm:tracking-[0.2em]">
                    {badge}
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-20 -left-2 h-8 w-8 border-white/10 bg-background/80 text-white shadow-card-soft hover:bg-white/10 sm:-left-3 sm:h-10 sm:w-10" />
        <CarouselNext className="z-20 -right-2 h-8 w-8 border-white/10 bg-background/80 text-white shadow-card-soft hover:bg-white/10 sm:-right-3 sm:h-10 sm:w-10" />
      </Carousel>
    </div>
  );
}

export function IcopeProjectPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projectsBySlug[slug];
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return undefined;

    const timer = window.setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, [carouselApi]);

  if (!project) {
    return (
      <main className="min-h-screen bg-background px-4 py-24 text-foreground">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-card/80 p-8 text-center shadow-card-soft backdrop-blur-xl">
          <h1 className="font-display text-2xl font-semibold text-white">Project not found</h1>
          <p className="mt-4 text-white/75">The project you requested does not exist.</p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,163,255,0.14),transparent_35%),radial-gradient(circle_at_top_right,rgba(124,196,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/12 to-transparent" />

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/70 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {project.badge ?? "Case study"}
          </div>
        </div>

        <motion.article
          variants={pageVariants}
          initial="hidden"
          animate="show"
          className="premium-card premium-card-hover p-7 backdrop-blur-xl sm:p-10"
        >
          <motion.div variants={itemVariants} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
              {project.tag}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
              Detailed case study
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {project.name}
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {project.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.artifactUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
            >
              {project.artifactLabel ?? "View PDF reference"}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 grid gap-3 sm:grid-cols-2">
            {project.snapshot.map(([label, value]) => {
              const Icon = snapshotIconMap[label] ?? BadgeInfo;
              return <StatCard key={label} icon={Icon} label={label} value={value} />;
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="mb-4 text-xs font-mono uppercase tracking-[0.28em] text-primary/90">Overview</div>
            <div className="space-y-3 text-sm leading-7 text-white/78 sm:text-base">
              <p>{project.summary}</p>
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="mb-4 text-xs font-mono uppercase tracking-[0.28em] text-primary/90">
              Highlights
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/82"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.article>

        {!noGalleryProjects.has(project.slug) ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionCard title="Project Images" icon={ImageIcon} className="lg:col-span-2">
              {project.slug === "grocery-mobile-applications" ? (
                <div className="grid gap-5 lg:grid-cols-2">
                  <GalleryCarousel
                    title="Customer App"
                    badge="Customer"
                    images={groceryCustomerImages}
                    aspectClass="aspect-[3/4] sm:aspect-[16/10]"
                  />
                  <GalleryCarousel
                    title="Driver App"
                    badge="Driver"
                    images={groceryDriverImages}
                    aspectClass="aspect-[3/4] sm:aspect-[16/10]"
                  />
                </div>
              ) : project.slug === "saas-grocery-application" ? (
                <GalleryCarousel
                  title="Admin Panel"
                  badge="Admin"
                  images={saasAdminImages}
                  aspectClass="aspect-[3/4] sm:aspect-[16/10]"
                />
              ) : project.slug === "logistics-management-system" ? (
                <GalleryCarousel
                  title="Logistics System"
                  badge="Logistics"
                  images={logisticsImages}
                  aspectClass="aspect-[3/4] sm:aspect-[16/10]"
                />
              ) : project.slug === "icope-handbook-application" ? (
                <GalleryCarousel
                  title="ICOPE Screens"
                  badge="ICOPE"
                  images={images}
                  aspectClass="aspect-[4/5] sm:aspect-[16/10]"
                />
              ) : (
                <div className="relative">
                  <Carousel
                    opts={{ align: "start", loop: true, slidesToScroll: 2 }}
                    setApi={setCarouselApi}
                    className="w-full touch-pan-y"
                  >
                    <CarouselContent className="touch-pan-y">
                      {images.map((image, index) => (
                        <CarouselItem key={image.alt} className="basis-full sm:basis-1/2">
                          <motion.div
                            variants={itemVariants}
                            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#040816] p-3 shadow-card-soft sm:rounded-[1.75rem] sm:p-4"
                          >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#030712] ring-1 ring-white/5 sm:aspect-[16/9] sm:rounded-[1.2rem]">
                              <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="mt-2.5 flex items-center justify-between px-1 sm:mt-3">
                              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/50 sm:text-[11px] sm:tracking-[0.28em]">
                                Screen {index + 1}
                              </div>
                              <div className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-white/55 sm:text-[10px] sm:tracking-[0.2em]">
                                {project.badge ?? "Project"}
                              </div>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-3 border-white/10 bg-background/80 text-white shadow-card-soft hover:bg-white/10" />
                    <CarouselNext className="-right-3 border-white/10 bg-background/80 text-white shadow-card-soft hover:bg-white/10" />
                  </Carousel>
                </div>
              )}
            </SectionCard>
          </div>
        ) : null}

        <div className="mt-8">
          <SectionCard title="Tech stack" icon={Code2} className="w-full">
            <div className="grid gap-3 xl:grid-cols-2">
              {project.techGroups.map((group) => (
                <div key={group.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="mb-3 inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/90">
                    {group.title}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <TechChip key={item} name={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>
    </main>
  );
}
