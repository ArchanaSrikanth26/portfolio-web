import groceryCustomerPdf from "../../assets/LPS - GROCERY CUSTOMER APP.pdf";
import saasAdminPdf from "../../assets/SAAS - ADMIN PANEL.pdf";
import icopeHandbookTamilPdf from "../../assets/ICOPE HANDBOOK TAMIL.pdf";

export const projects = [
  {
    slug: "icope-handbook-application",
    name: "ICOPE Handbook Application",
    tag: "WHO Project (AIIMS) | Mar 2026 - Present",
    point:
      "Developed a bilingual healthcare app with guided assessments, PDF reports, and an admin panel.",
    stack: ["Flutter (Dart)", "React.js", "Node.js", "Google Maps API"],
    artifactUrl: icopeHandbookTamilPdf,
    artifactLabel: "View project reference",
    badge: "WHO Project",
    summary: "A bilingual assessment platform for field teams and supervisors.",
    overview: [
      "The ICOPE Handbook Application simplifies structured healthcare assessments for field use.",
      "It supports Tamil users, generates clean PDF summaries, and keeps supervisor review organized.",
    ],
    snapshot: [
      ["Platform", "Flutter mobile app + React admin panel"],
      ["Core Stack", "Flutter, React.js, Node.js, MongoDB"],
      ["Integrations", "Firebase, Google Maps API, PDF export"],
      ["Delivery", "Mobile workflow + web operations layer"],
    ],
    highlights: [
      "Guided patient assessment flows",
      "Tamil-first interface support",
      "PDF summaries for clinical handoff",
      "Admin panel for record review",
    ],
    timeline: [
      {
        title: "Workflow mapping",
        text: "Mapped patient, caregiver, and admin journeys.",
      },
      {
        title: "Mobile build",
        text: "Built the Flutter flow with structured forms and Tamil support.",
      },
      {
        title: "Admin dashboard",
        text: "Delivered the React review panel and report views.",
      },
      {
        title: "Integration",
        text: "Connected backend services, location logic, and PDF export.",
      },
    ],
    techGroups: [
      {
        title: "Mobile App",
        items: ["Flutter (Dart)", "Google Maps API", "Tamil Localization", "PDF Reports"],
      },
      {
        title: "Web Dashboard",
        items: ["React.js", "Admin Panel", "Role-Based Access", "Responsive UI"],
      },
      {
        title: "Backend & Data",
        items: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
      },
      {
        title: "Integrations",
        items: ["Firebase", "Push Notifications", "Geo Routing", "REST APIs"],
      },
    ],
  },
  {
    slug: "grocery-mobile-applications",
    name: "Grocery Mobile Applications",
    tag: "Customer & Driver Apps | Nov 2025 - Feb 2026",
    point:
      "Developed cross-platform customer and driver apps in Flutter with push notifications, live location tracking, and route optimization.",
    stack: ["Flutter (Dart)", "Node.js (Express)", "MongoDB", "Firebase", "Google Maps API", "JWT"],
    artifactUrl: groceryCustomerPdf,
    artifactLabel: "View project reference",
    badge: "Mobile Apps",
    summary:
      "A paired consumer and logistics solution designed to streamline ordering, delivery, and route tracking.",
    overview: [
      "This project delivered two connected Flutter applications: one for customers to browse and order groceries, and one for drivers to manage delivery tasks.",
      "The product focused on practical day-to-day usability, with push notifications, live map tracking, route guidance, and a responsive interface for mobile users.",
      "The architecture was structured to support real operational workflows while keeping the customer experience smooth and easy to navigate.",
    ],
    snapshot: [
      ["Platform", "Flutter customer app + Flutter driver app"],
      ["Core Stack", "Flutter, Node.js, MongoDB, Firebase"],
      ["Key Features", "Orders, delivery tracking, notifications"],
      ["Delivery", "Mobile-first commerce and logistics flow"],
    ],
    highlights: [
      "Separate customer and driver experiences",
      "Live location tracking for deliveries",
      "Push notifications for order updates",
      "Route optimization for delivery efficiency",
      "Secure authentication and API-driven flows",
    ],
    timeline: [
      {
        title: "App flow design",
        text: "Defined the customer ordering journey and the driver delivery workflow so both apps could work together without friction.",
      },
      {
        title: "Mobile build-out",
        text: "Implemented the Flutter screens, navigation, and state handling needed for shopping, order updates, and delivery actions.",
      },
      {
        title: "Realtime logistics",
        text: "Connected live location and notification handling to make the delivery experience more transparent and reliable.",
      },
      {
        title: "Release stabilization",
        text: "Refined the handoff between the customer and driver apps and validated the production workflow end to end.",
      },
    ],
    techGroups: [
      {
        title: "Mobile",
        items: ["Flutter (Dart)", "Responsive UI", "Push Notifications", "Google Maps API"],
      },
      { title: "Backend", items: ["Node.js", "Express.js", "JWT Auth", "REST APIs"] },
      { title: "Data", items: ["MongoDB", "Firebase", "FCM", "Route Tracking"] },
      {
        title: "Ops",
        items: ["Order Management", "Driver Tracking", "Map Routing", "Secure Login"],
      },
    ],
  },
  {
    slug: "saas-grocery-application",
    name: "SAAS Grocery Application",
    tag: "Super Admin & Vendor Panel | Aug 2025 - Oct 2025",
    point:
      "Developed a multi-vendor grocery platform with role-based dashboards for inventory, order, and driver management.",
    stack: [
      "React.js",
      "Node.js",
      "Flutter (Dart)",
      "Google Maps API",
      "Firebase",
      "Razorpay",
      "JWT",
    ],
    artifactUrl: saasAdminPdf,
    artifactLabel: "View project reference",
    badge: "SaaS Platform",
    summary:
      "A multi-vendor grocery operating system that brings super admin, vendor, and delivery management into one structured interface.",
    overview: [
      "The SaaS Grocery Application was built to support vendors and administrators through a role-based platform for inventory, orders, and dispatch management.",
      "The system balances operational flexibility with controlled access, making it easier to manage multiple stores and delivery flows from a central dashboard.",
      "It combines a React admin experience with mobile-friendly components to keep the business side efficient and easy to scale.",
    ],
    snapshot: [
      ["Platform", "React admin panel + Flutter mobile workflows"],
      ["Core Stack", "React.js, Node.js, Flutter, Firebase"],
      ["Business Focus", "Multi-vendor operations and order control"],
      ["Delivery", "Role-based commerce management layer"],
    ],
    highlights: [
      "Role-based dashboards for different user types",
      "Inventory and order management controls",
      "Vendor oversight and delivery dispatch tools",
      "Razorpay integration for payments",
      "Firebase support for app notifications and sync",
    ],
    timeline: [
      {
        title: "Role and workflow planning",
        text: "Mapped how super admins, vendors, and drivers should interact so permissions and responsibilities stayed clear.",
      },
      {
        title: "Dashboard implementation",
        text: "Built the React-based control center for inventory, orders, and operational monitoring across vendor accounts.",
      },
      {
        title: "Platform integrations",
        text: "Connected payment, notification, and location services to support the live grocery workflow.",
      },
      {
        title: "Operational hardening",
        text: "Refined the platform for real-world usage, focusing on consistency, role isolation, and maintainability.",
      },
    ],
    techGroups: [
      { title: "Admin", items: ["React.js", "Dashboard UI", "Role-Based Access", "Material UI"] },
      { title: "Mobile", items: ["Flutter (Dart)", "Google Maps API", "Firebase", "JWT"] },
      { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Secure Auth"] },
      {
        title: "Payments",
        items: ["Razorpay", "Order Processing", "Vendor Management", "Notifications"],
      },
    ],
  },
  {
    slug: "logistics-management-system",
    name: "Logistics Management System",
    tag: "Production (Malaysia) | Apr 2025 - Jul 2025",
    point:
      "Developed a role-based logistics platform with vehicle management, AI invoice generation, live GPS tracking, and Dockerized deployment.",
    stack: [
      "Vite (React.js)",
      "Node.js (Express)",
      "MySQL",
      "Tailwind CSS",
      "Razorpay",
      "JWT",
      "Google Maps API",
      "Docker",
      "SMTP",
    ],
    artifactUrl: null,
    artifactLabel: null,
    badge: "Production",
    summary:
      "A logistics control platform that helps teams manage vehicles, tracking, invoices, and operational workflows from one place.",
    overview: [
      "This system was built for logistics operations where visibility, accuracy, and role control matter across vehicles, invoices, and status updates.",
      "The application includes live GPS tracking, AI-assisted invoice generation, and a workflow that supports production use with Dockerized deployment.",
      "It was designed to reduce manual coordination and provide a cleaner operational picture for day-to-day logistics teams.",
    ],
    snapshot: [
      ["Platform", "React web app + Node.js backend"],
      ["Core Stack", "Vite, Express, MySQL, Docker"],
      ["Key Features", "Vehicle tracking, invoices, role control"],
      ["Delivery", "Production logistics workflow"],
    ],
    highlights: [
      "Vehicle and fleet management dashboards",
      "AI invoice generation for operational efficiency",
      "Live GPS tracking with Google Maps integration",
      "Dockerized deployment for production stability",
      "Role-based access and secure workflows",
    ],
    timeline: [
      {
        title: "Fleet workflow design",
        text: "Structured the vehicle, driver, and invoice flows so the system matched actual logistics operations.",
      },
      {
        title: "Web app development",
        text: "Built the React interface for operations teams to manage records, vehicles, and reporting tasks.",
      },
      {
        title: "Tracking and automation",
        text: "Added GPS-based visibility and invoice automation to reduce repetitive manual work.",
      },
      {
        title: "Production rollout",
        text: "Packaged the app for deployment and validated the operational paths used in production.",
      },
    ],
    techGroups: [
      {
        title: "Frontend",
        items: ["React.js", "Tailwind CSS", "Role-Based UI", "Responsive Layout"],
      },
      { title: "Backend", items: ["Node.js", "Express.js", "JWT Auth", "REST APIs"] },
      { title: "Data", items: ["MySQL", "Invoice Records", "Vehicle Tracking", "SMTP"] },
      {
        title: "Ops",
        items: ["Docker", "Google Maps API", "Razorpay", "Production Deployment"],
      },
    ],
  },
  {
    slug: "fuel-management-system",
    name: "Fuel Management System (FMS)",
    tag: "Production (Canada) | Dec 2024 - Mar 2025",
    point:
      "Developed broker onboarding, multi-tenant access control, WEX API integration, and dashboards for fleet insights and fuel performance.",
    stack: [
      "React.js",
      "Java",
      "Spring Boot",
      "Maven",
      "REST API",
      "Material UI",
      "WEX API",
      "Microservices",
    ],
    artifactUrl: null,
    artifactLabel: null,
    badge: "Production",
    summary:
      "A fuel operations system designed to centralize broker onboarding, fleet visibility, and fuel-performance reporting.",
    overview: [
      "The FMS project focused on building a secure and scalable operations layer for fuel management workflows.",
      "It supports broker onboarding, multi-tenant access control, WEX API integration, and reporting dashboards that help fleets understand fuel usage and performance.",
      "The result is a platform that favors data clarity, role safety, and reliable service integration.",
    ],
    snapshot: [
      ["Platform", "React frontend + Java Spring backend"],
      ["Core Stack", "React.js, Java, Spring Boot, Maven"],
      ["Integrations", "WEX API, REST services, dashboards"],
      ["Delivery", "Production fleet and fuel operations"],
    ],
    highlights: [
      "Broker onboarding and tenant isolation",
      "WEX API integration for fuel operations",
      "Dashboards for fleet insights and fuel performance",
      "Microservice-friendly backend structure",
      "Role-aware access control and data handling",
    ],
    timeline: [
      {
        title: "Domain mapping",
        text: "Mapped the broker, fleet, and tenant flows to support a multi-organization fuel platform.",
      },
      {
        title: "Backend services",
        text: "Implemented the Spring Boot layer for business rules, integration handling, and secure APIs.",
      },
      {
        title: "Dashboard delivery",
        text: "Shipped the React dashboards that surface fuel and fleet data in a usable format.",
      },
      {
        title: "Integration hardening",
        text: "Validated WEX API communication and stabilized the platform for production use.",
      },
    ],
    techGroups: [
      { title: "Frontend", items: ["React.js", "Material UI", "Dashboards", "Access Control"] },
      { title: "Backend", items: ["Java", "Spring Boot", "Maven", "REST APIs"] },
      {
        title: "Integrations",
        items: ["WEX API", "Microservices", "Tenant Data", "Fleet Insights"],
      },
      {
        title: "Operations",
        items: ["Broker Onboarding", "Reporting", "Secure Roles", "Production Support"],
      },
    ],
  },
  {
    slug: "learning-management-system",
    name: "Learning Management System (LMS)",
    tag: "Aug 2024 - Nov 2024",
    point:
      "Developed a role-based LMS for admins, instructors, and students with responsive dashboards and improved query efficiency.",
    stack: ["React.js", "Java", "Spring Boot", "MySQL", "REST APIs", "Material UI", "JPA"],
    artifactUrl: null,
    artifactLabel: null,
    badge: "Education",
    summary:
      "A learning platform that organizes courses, access control, and student-facing experiences with clean dashboards.",
    overview: [
      "The LMS project was built to improve how instructors, admins, and students interact with course content and dashboard workflows.",
      "It focuses on role-based access, responsive UI patterns, and query efficiency so the application feels usable and maintainable.",
      "The platform lays out a solid foundation for learning operations with clearer data flow and simpler administration.",
    ],
    snapshot: [
      ["Platform", "React frontend + Java Spring backend"],
      ["Core Stack", "React.js, Java, Spring Boot, MySQL"],
      ["Focus", "Role-based learning workflows"],
      ["Delivery", "Admin, instructor, and student dashboards"],
    ],
    highlights: [
      "Separate views for admins, instructors, and students",
      "Responsive dashboards for learning workflows",
      "Improved query efficiency and data handling",
      "REST API-driven architecture",
      "Material UI-based interface consistency",
    ],
    timeline: [
      {
        title: "Access model design",
        text: "Defined how each role should interact with content, records, and dashboard features.",
      },
      {
        title: "Frontend and backend build",
        text: "Implemented the React and Spring Boot layers with responsive interfaces and robust APIs.",
      },
      {
        title: "Optimization pass",
        text: "Improved query performance and refined the data flow for day-to-day LMS usage.",
      },
      {
        title: "Workflow stabilization",
        text: "Validated the role-based dashboard experience and prepared the system for practical use.",
      },
    ],
    techGroups: [
      { title: "Frontend", items: ["React.js", "Material UI", "Responsive UI", "Dashboards"] },
      { title: "Backend", items: ["Java", "Spring Boot", "REST APIs", "JPA"] },
      { title: "Data", items: ["MySQL", "Query Optimization", "Role Data", "Students"] },
      { title: "Workflow", items: ["Admin", "Instructor", "Student", "Learning Operations"] },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
