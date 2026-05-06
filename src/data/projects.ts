export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: "AI / ML" | "Web Development" | "Systems & Networking";
  featured?: boolean;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  challenges: string[];
  improvements: string[];
  github?: string;
  demo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "ultrasoundnet",
    title: "UltrasoundNet",
    tagline: "Self-supervised deep learning for breast tumor classification",
    category: "AI / ML",
    featured: true,
    year: "2025",
    description:
      "A web-based diagnostic aid that classifies breast tumors from ultrasound images using a hybrid CNN + Transformer architecture, with Grad-CAM explainability and live detection.",
    overview:
      "UltrasoundNet brings research-grade medical imaging to a practical, accessible web interface. It combines convolutional feature extraction with transformer attention to deliver robust classification — even on low-quality ultrasound input.",
    problem:
      "Breast ultrasound images are noisy, low-contrast, and operator-dependent. Traditional CNNs often misclassify under these conditions, and clinicians need explainable predictions they can trust, not opaque scores.",
    solution:
      "A hybrid architecture pairing DenseNet121 feature maps with transformer attention blocks for global context. Self-supervised pretraining reduces dependence on labeled data, while Grad-CAM produces visual heatmaps so users can verify which regions drove the prediction.",
    tech: ["Python", "PyTorch", "DenseNet121", "Transformers", "Grad-CAM", "Flask"],
    features: [
      "Hybrid CNN + Transformer attention architecture",
      "Self-supervised pretraining for limited labeled data",
      "Live image upload and real-time classification",
      "Grad-CAM heatmap overlays for explainability",
      "Robust performance on low-quality scans",
      "Lightweight web interface for clinician use",
    ],
    challenges: [
      "Balancing model size against inference latency in the browser pipeline",
      "Stabilizing self-supervised pretraining on a small medical dataset",
      "Producing Grad-CAM visualizations through transformer attention layers",
    ],
    improvements: [
      "Multi-class extension for additional lesion types",
      "On-device inference via ONNX Runtime Web",
      "DICOM ingestion and clinician annotation workflow",
    ],
    github: "https://github.com/sadmanryian",
  },
  {
    id: "ccn-one-simulator",
    title: "CCN on ONE Simulator",
    tagline: "Content-Centric Networking for Internet of Vehicles",
    category: "Systems & Networking",
    year: "2024",
    description:
      "A Content-Centric Network framework implemented on top of the ONE simulator to study opportunistic IoV scenarios with store-carry-forward delivery.",
    overview:
      "An academic systems project exploring how CCN principles improve content delivery in vehicular ad-hoc networks where connectivity is intermittent. Includes a React-based control surface for configuring and visualizing simulations.",
    problem:
      "Traditional host-centric networking assumes stable end-to-end paths — an assumption that breaks down in vehicular and opportunistic environments with frequent disconnections.",
    solution:
      "A DTN-style store-carry-forward layer combined with CCN naming, implemented as modules in the ONE simulator. A React + Firebase dashboard lets researchers run, persist, and replay scenarios.",
    tech: ["Java", "ONE Simulator", "React", "Firebase", "Bootstrap"],
    features: [
      "Custom CCN routing modules for ONE",
      "Store-carry-forward delivery for intermittent links",
      "Scenario configuration UI",
      "Result persistence via Firebase",
      "Comparative metrics: delivery ratio, latency, overhead",
    ],
    challenges: [
      "Mapping CCN naming semantics into the ONE event model",
      "Synchronizing simulator state with the web dashboard",
    ],
    improvements: [
      "ML-driven cache placement",
      "Real-world trace ingestion (e.g., taxi mobility datasets)",
    ],
    github: "https://github.com/sadmanryian",
  },
  {
    id: "library-os",
    title: "LibraryOS",
    tagline: "Cloud library management for South Asian institutions",
    category: "Web Development",
    year: "2024",
    description:
      "A cloud-based library management platform tailored to the workflows and constraints of educational institutions in Bangladesh.",
    overview:
      "LibraryOS digitizes catalog, member, and circulation workflows for institutions that have historically relied on paper systems. Designed for low-bandwidth environments and bilingual staff.",
    problem:
      "Institutional libraries in the region juggle manual issue/return logs, inconsistent fine collection, and no central catalog — making audits and member services painful.",
    solution:
      "A focused web application covering book and member management, issue/return cycles, and automated fine calculation, deployed on managed infrastructure.",
    tech: ["HTML", "CSS", "WordPress", "MySQL"],
    features: [
      "Book and member CRUD",
      "Issue / return tracking",
      "Automated fine calculation",
      "Role-based admin access",
    ],
    challenges: [
      "Designing for low-bandwidth deployments",
      "Modeling fine rules that vary per institution",
    ],
    improvements: [
      "Bengali-language UI",
      "Barcode / QR-based circulation",
      "Mobile companion app for members",
    ],
    demo: "#",
  },
  {
    id: "glosswear",
    title: "GlossWear",
    tagline: "High-converting fashion landing page",
    category: "Web Development",
    year: "2024",
    description:
      "A polished, conversion-focused landing page for a fashion brand, with strong typographic hierarchy and clear CTAs.",
    overview:
      "GlossWear was built as a marketing surface for product launches: hero, product showcase, social proof, and a single, opinionated call-to-action path.",
    problem:
      "Most small fashion brands launch with generic templates that bury product hero shots and dilute the buying decision with too many CTAs.",
    solution:
      "A single-page narrative with one primary CTA, oversized product imagery, and a layout tuned for mobile-first browsing.",
    tech: ["HTML", "CSS", "WordPress"],
    features: [
      "Mobile-first responsive layout",
      "Single-CTA conversion funnel",
      "Editorial typography",
    ],
    challenges: ["Keeping page weight low while preserving image quality"],
    improvements: ["A/B testing harness", "Integrated checkout"],
    demo: "#",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
