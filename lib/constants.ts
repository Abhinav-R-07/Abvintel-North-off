// Copy & Content Centralization

export const WORDMARK = "abvintel|NORTH";
export const TAGLINE = "We Build What Others Can't Imagine.";
export const EMAIL = "contact@abvintelnorth.com";
export const RESPONSE_TIME = "We respond within 48 hours.";

// Navigation
export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/carbonocura", label: "Carbonocura" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Home Page
export const HOME = {
  hero: {
    eyebrow: "Consulting Studio",
    heading: ["We Build", "What Others", "Can't Imagine."],
    headingOutline: "Imagine.",
    subtext: "We pair disciplined consulting with proprietary deep-tech to solve problems at the frontier of possibility.",
    cta1: "Explore Services",
    cta2: "Start a Project",
  },
  marqueeTicker: "Application Development · Implementation Strategy · Market Research · Brand Advisory · Product Advancement · Deep-Tech R&D · Carbonocura · Carbon Capture Technology · IoT Systems · B2B SaaS · ",
  services: {
    header: "Six Disciplines. One Studio.",
    descriptor: "We combine technical depth with strategic thinking across multiple domains.",
  },
  carbonocuraTeaser: {
    badge: "Granted Patent",
    badgeNumber: "No. 583393",
    heading: "Carbonocura",
    description: "A dual-pathway carbon capture system that converts CO₂ into high-value products: advanced fertilizers and precision fire-suppression components.",
    stats: [
      { label: "Filed", value: "Aug 6 2025" },
      { label: "Granted", value: "Mar 16 2026" },
      { label: "Status", value: "Active" },
    ],
    features: [
      "CO₂ Capture & Liquefaction",
      "Dual Conversion Pathway",
      "Enterprise-Grade Reliability",
    ],
    callout: "Proprietary IP. Proven in pilot. Ready for scale.",
  },
  work: {
    header: "In the Field.",
    note: "Additional engagements under NDA.",
    link: "View all work",
  },
  why: {
    header: "Built Different.",
    categories: [
      { title: "Builders", description: "We don't advise from the sidelines — we architect and build." },
      { title: "Proprietary", description: "Our clients benefit from our own deep-tech portfolio." },
      { title: "End-to-End", description: "From strategy through implementation. No handoffs." },
      { title: "Deep-Tech", description: "We specialize where commodities end and innovation begins." },
    ],
  },
  about: {
    heading: "About Abhinav K.R",
    bio: "Founder and CEO building AbvIntel North with a focus on the intersection of strategy, technology, and first-principles thinking.",
  },
  contact: {
    heading: "Let's Build Something.",
    subtext: "Tell us about your challenge. We'll explore if we're the right fit.",
  },
};

// Services Page
export const SERVICES = [
  {
    number: "01",
    title: "Implementation Support",
    description: "End-to-end project execution, technical oversight, and delivery excellence for complex initiatives.",
    tags: ["Project Management", "Technical Leadership", "Quality Assurance"],
  },
  {
    number: "02",
    title: "Application Development",
    description: "Full-stack application design and development. Web, mobile, and embedded systems tailored to your architecture.",
    tags: ["Web Development", "Mobile Apps", "Systems Integration"],
  },
  {
    number: "03",
    title: "Marketing & Brand Strategy",
    description: "Positioning, messaging, and go-to-market strategy for deep-tech and B2B products.",
    tags: ["Brand Strategy", "GTM", "Positioning"],
  },
  {
    number: "04",
    title: "Research & Analysis",
    description: "Market research, competitive intelligence, technical analysis, and strategic foresight.",
    tags: ["Market Research", "Competitive Analysis", "Due Diligence"],
  },
  {
    number: "05",
    title: "Product Advancement",
    description: "From concept to MVP. Product definition, technical specification, and early-stage development.",
    tags: ["Product Design", "Technical Spec", "MVP Development"],
  },
  {
    number: "06",
    title: "B2B SaaS Development",
    description: "Purpose-built SaaS platforms for enterprise customers. Multi-tenant architecture, security, compliance.",
    tags: ["SaaS Architecture", "Enterprise Features", "Compliance"],
  },
];

// Work Page / Case Studies
export const WORK_ENGAGEMENTS = [
  {
    name: "y:)go",
    subtitle: "Electric Campus Mobility",
    description: "Institutional analysis, brand naming research, app development scoping, marketing strategy, product advisory, partnership strategy, and service agreement development for a next-generation campus e-bike rental platform.",
    tags: ["App Dev", "Brand Strategy", "Research", "Product Advisory", "Implementation"],
    status: "Active",
    details: [
      "Campus E1 e-bike platform",
      "Mobile app architecture scoping",
      "Marketing strategy & positioning",
      "Service agreement framework",
    ],
  },
  {
    name: "Carbonocura",
    subtitle: "Carbon Capture Patent & Platform",
    description: "Software layer development for proprietary carbon capture technology. IoT telemetry pipelines, real-time dashboards, B2B SaaS carbon reporting platform, and enterprise integration.",
    tags: ["IoT", "Deep-Tech", "SaaS", "R&D"],
    status: "In Development",
    details: [
      "IoT hardware bridge & telemetry",
      "Real-time monitoring dashboards",
      "B2B SaaS carbon reporting platform",
      "Enterprise data integration",
      "Regulatory compliance layer",
    ],
  },
];

// Carbonocura Page
export const CARBONOCURA = {
  hero: {
    heading: "Carbonocura",
    subtitle: "Patent No. 583393 — Granted March 16, 2026",
    description: "A dual-pathway carbon capture and utilization system. Captures CO₂ and converts it into two product streams: advanced fertilizers and precision fire-suppression components. Hardware patent. Software platform in development.",
    cta1: "Patent Details",
    cta2: "Licensing Inquiry",
  },
  patentDetails: {
    fullTitle: "Dual-Pathway Carbon Capture and Utilization System",
    status: "Granted",
    registrationNumber: "583393",
    grantDate: "March 16, 2026",
    applicationNumber: "US 2025/0098765",
    filingDate: "August 6, 2025",
    inventor: "Abhinav K.R, AbvIntel North",
    jurisdiction: "INDIAN Patent and Trademark Office",
  },
  technical: {
    heading: "How It Works",
    description: "Carbonocura employs a proprietary capture mechanism combined with dual conversion pathways to maximize value extraction from captured CO₂.",
    sections: [
      {
        title: "Capture & Purification",
        content: "Advanced sorbent-based capture from atmospheric or point-source CO₂. Multi-stage purification to meet downstream conversion requirements.",
      },
      {
        title: "Fertilizer Pathway",
        content: "Conversion to high-value nitrogen compounds and enhanced phosphate products. Direct agricultural application with superior soil integration.",
      },
      {
        title: "Fire Suppression Pathway",
        content: "Precision liquefaction and packaging for next-gen fire suppression systems. Lower toxicity, higher efficacy vs. traditional halon replacements.",
      },
    ],
  },
  software: {
    heading: "Software Layer",
    subheading: "From Patent to Platform",
    sections: [
      {
        title: "IoT Hardware Bridge",
        description: "Real-time sensor telemetry, equipment state management, predictive maintenance.",
        items: [
          "Multi-device protocol support",
          "Edge computing integration",
          "Fault detection & alerting",
        ],
      },
      {
        title: "B2B SaaS Platform",
        description: "Enterprise dashboard, carbon accounting, regulatory reporting, customer portal.",
        items: [
          "Multi-tenant architecture",
          "Real-time analytics",
          "Compliance reporting",
          "API for integrations",
        ],
      },
      {
        title: "Proof of Concept",
        description: "Validation of core conversion pathways, yield optimization, scaling protocols.",
        items: [
          "Lab-to-pilot transition",
          "Process refinement",
          "Cost reduction roadmap",
        ],
      },
    ],
  },
  vision: {
    heading: "From Patent to Platform",
    description: "Patent 583393 is the foundation. The platform is the delivery mechanism. Carbonocura becomes enterprise software enabling a new category of sustainable manufacturing—where CO₂ is liability converted to asset, and hardware becomes the interface to a planetary-scale carbon market.",
  },
  callout: "Proprietary IP. Proven in pilot. Ready for scale.",
};

// About Page
export const ABOUT = {
  personal: {
    name: "Abhinav K.R",
    title: "Founder & CEO",
    bio: "Built systems in distributed computing, IoT, and climate tech. Believes in first-principles thinking and defending what matters. Patent holder. Advisor. Builder.",
    patents: [
      { number: "583393", title: "Carbonocura", date: "2026" },
    ],
  },
  company: {
    story: "AbvIntel North was built around a single principle: that the best consulting comes from people who also build.",
    expansion: "We pair strategic advisory with proprietary deep-tech development. Clients benefit from our own innovation roadmap. We choose engagements where we can add disproportionate value — technical depth, hard-won insights, and execution capability.",
    timeline: [
      { year: 2025, event: "AbvIntel North founded" },
      { year: 2025, month: "Aug", event: "Carbonocura patent filed" },
      { year: 2026, event: "First client engagement (y:)go)" },
      { year: 2026, month: "Mar", event: "Carbonocura patent granted" },
    ],
  },
  team: [
    {
      name: "Sadhvika Kannan",
      title: "COO & Design Lead",
      bio: "Drives operational excellence and design strategy. Brings disciplined thinking to execution, crafting experiences that align with precision and intention.",
      image: "/sadhvika.jpg",
    },
  ],
  legal: {
    trademark: "AbvIntel North wordmark (abvintel|NORTH) is a trademark of AbvIntel North Inc.",
    patent: "Patent No. 583393 (Carbonocura) granted to Abhinav K.R, assigned to AbvIntel North Inc.",
    copyright: "All work product and methodologies © AbvIntel North Inc. All rights reserved.",
  },
};

// Contact Page
export const CONTACT = {
  heading: "Let's Build Something.",
  description: "Tell us about your challenge. We'll explore if we're the right fit.",
  emailLabel: "contact@abvintelnorth.com",
  responseNote: "We respond within 48 hours.",
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    companyLabel: "Company (optional)",
    companyPlaceholder: "Your company",
    serviceLabel: "What's your need?",
    services: [
      "Implementation Support",
      "Application Development",
      "Marketing & Brand Strategy",
      "Research & Analysis",
      "Product Advancement",
      "B2B SaaS Development",
      "Carbonocura Licensing",
      "Other",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    submitLabel: "Send Message",
    successMessage: "Thanks. We'll be in touch within 48 hours.",
  },
};
