// Project Data Source for Dynamic Case Studies and Catalog
const projectsData = [
  {
    id: "ai-saas-platform",
    title: "NeuroFlow AI - Workflow Automation SaaS",
    category: "ai",
    categoryName: "AI & Machine Learning",
    tagline: "Autonomous Agent Orchestration & Workflow Intelligence Platform",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    client: "NeuroFlow Labs, San Francisco",
    year: "2026",
    role: "Lead AI & Full-Stack Engineer",
    duration: "4 Months",
    liveUrl: "https://example.com/demo/neuroflow",
    githubUrl: "https://github.com/example/neuroflow-ai",
    overview: "NeuroFlow AI is an enterprise-grade cloud automation suite that allows teams to build, deploy, and monitor multi-modal autonomous AI agents that handle complex customer operations, code review pipelines, and analytics synthesis.",
    challenge: "Enterprise clients needed a way to orchestrate large language models across distributed internal systems with low latency, strict data privacy controls, and real-time execution graphs without incurring prohibitive API costs.",
    solution: "Designed an asynchronous event-driven microservices architecture using Python FastAPI, Redis stream queues, and a React + Next.js interactive flow canvas with real-time WebSockets state updates. Implemented semantic caching to reduce LLM costs by 42%.",
    technologies: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API", "TailwindCSS", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "Cost Reduction", value: "42%" },
      { label: "Active Enterprise Users", value: "15k+" },
      { label: "Latency Benchmark", value: "<180ms" },
      { label: "Uptime Reliability", value: "99.98%" }
    ],
    features: [
      "Visual Drag-and-Drop Node Canvas for building agent pipelines",
      "Real-time WebSocket streaming telemetry & step-by-step logs",
      "Fine-tuned RAG vector search with hybrid BM25 and vector embeddings",
      "Role-Based Access Control (RBAC) & Enterprise SSO integration"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "apex-ecommerce-hub",
    title: "Apex Luxe - Next-Gen E-Commerce Experience",
    category: "web",
    categoryName: "Full-Stack Web App",
    tagline: "High-Performance Luxury Fashion E-Commerce with 3D Product Previews",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    client: "Apex Luxury Group, London",
    year: "2025",
    role: "Full-Stack Web Architect",
    duration: "3 Months",
    liveUrl: "https://example.com/demo/apex-luxe",
    githubUrl: "https://github.com/example/apex-ecommerce",
    overview: "A flagship digital storefront built for high-end boutique brands, featuring instant page transitions, Three.js 3D interactive product rendering, personalized smart recommendations, and 1-click international checkout.",
    challenge: "The legacy storefront suffered from sluggish load times (over 4.2s), low mobile conversion rates, and a disconnect between high-end offline branding and standard 2D online store templates.",
    solution: "Rebuilt from the ground up using headless architecture with Next.js App Router, Three.js/WebGL for interactive 360-degree garment inspection, and Stripe global payment processing with zero layout shift (CLS < 0.01).",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Stripe API", "Node.js", "GraphQL", "Vercel"],
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Average Page Load", value: "0.6s" },
      { label: "Monthly GMV", value: "$1.2M" }
    ],
    features: [
      "Interactive 3D WebGL material & product viewer",
      "AI-driven sizing and outfit recommendation widget",
      "Instant optimistic cart & multi-currency Stripe checkout",
      "PWA support with offline product catalog caching"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "fintech-crypto-dashboard",
    title: "NovaPay - Real-Time Web3 & Crypto Portfolio Tracker",
    category: "web",
    categoryName: "FinTech & Web3",
    tagline: "Ultra-Fast Multi-Chain Analytics & Trading Terminal",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    client: "Nova Financial Technologies, Singapore",
    year: "2025",
    role: "Full-Stack & Web3 Developer",
    duration: "5 Months",
    liveUrl: "https://example.com/demo/novapay",
    githubUrl: "https://github.com/example/novapay-dashboard",
    overview: "NovaPay is a high-frequency financial dashboard for tracking cryptocurrency holdings, automated arbitrage signals, and wallet analytics across Ethereum, Solana, and Layer 2 networks.",
    challenge: "Handling tens of thousands of real-time price updates per second without freezing the UI or draining battery on client devices.",
    solution: "Utilized Web Workers for background data processing, lightweight Canvas-based charting (TradingView Lightweight Charts), and localized state buffers to ensure 60fps silky smooth rendering at all times.",
    technologies: ["Vue.js 3", "Vite", "TypeScript", "Ethers.js", "Chart.js", "Node.js", "WebSockets", "Supabase"],
    metrics: [
      { label: "Data Throughput", value: "50k msg/s" },
      { label: "UI FPS", value: "Solid 60fps" },
      { label: "Tracked Assets Value", value: "$45M+" },
      { label: "Daily Active Traders", value: "24k" }
    ],
    features: [
      "Multi-wallet non-custodial portfolio aggregation",
      "Customizable drag-and-drop widget layout with dark/neon themes",
      "Smart gas tracker and instant MEV-protected swap routes",
      "Automated tax-lot PnL calculator and PDF export"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "health-pulse-mobile",
    title: "PulseFit - AI Health & Biometric Tracking App",
    category: "mobile",
    categoryName: "Mobile & HealthTech",
    tagline: "Cross-Platform AI Workout & Sleep Optimization App",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    client: "Pulse Biometrics, Austin TX",
    year: "2026",
    role: "AI & Mobile App Lead",
    duration: "6 Months",
    liveUrl: "https://example.com/demo/pulsefit",
    githubUrl: "https://github.com/example/pulsefit-mobile",
    overview: "PulseFit connects seamlessly with Apple Watch and Garmin smart devices to deliver AI-driven recovery recommendations, posture correction via smartphone camera computer vision, and dynamic workout plans.",
    challenge: "Executing accurate on-device computer vision for real-time exercise rep counting without requiring server uploads or causing thermal throttling.",
    solution: "Integrated TensorFlow Lite on-device models with React Native using native C++ bridges, optimizing model inference to under 22ms per frame.",
    technologies: ["React Native", "Expo", "TypeScript", "TensorFlow Lite", "Apple HealthKit", "Node.js", "Firebase"],
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Total Downloads", value: "120k+" },
      { label: "Pose Accuracy", value: "96.4%" },
      { label: "Daily Retention", value: "64%" }
    ],
    features: [
      "Camera-based live rep counting & posture feedback",
      "Biometric recovery score computed from HRV and sleep cycles",
      "Offline workout player with voice coaching guidance",
      "Social leaderboard and community fitness challenges"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510519138171-c42337e7a5c8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "zenith-ui-design-system",
    title: "Zenith Design System & Component Library",
    category: "uiux",
    categoryName: "UI/UX & Design Systems",
    tagline: "Enterprise Design Tokens, 60+ Accessible Components & Figma Kit",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85",
    client: "Open Source / Community",
    year: "2024",
    role: "Lead Design Technologist",
    duration: "3 Months",
    liveUrl: "https://example.com/demo/zenith-ui",
    githubUrl: "https://github.com/example/zenith-design-system",
    overview: "A comprehensive, WCAG AAA accessible design system with comprehensive tokens, dark/light theme engine, and complete Storybook documentation for rapid enterprise development.",
    challenge: "Teams across multiple business units were re-implementing basic UI components resulting in brand inconsistency, accessibility bugs, and slow sprint velocity.",
    solution: "Created an atomic design token architecture with automated Figma-to-Code sync, comprehensive unit tests, and automated visual regression testing with Storybook and Chromatic.",
    technologies: ["Figma", "Storybook", "React", "CSS Modules", "Tailwind", "Radix UI", "Jest"],
    metrics: [
      { label: "Dev Velocity Increase", value: "+55%" },
      { label: "WCAG Compliance", value: "AAA 100%" },
      { label: "Weekly Downloads", value: "35k" },
      { label: "Design Token Sets", value: "12 Themes" }
    ],
    features: [
      "Over 65 production-ready accessible React components",
      "Dynamic theming engine with zero runtime CSS overhead",
      "Full keyboard navigation & screen-reader optimized ARIA patterns",
      "Interactive Storybook documentation with live playground"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "cloud-ops-monitoring",
    title: "Vigilant Cloud - Kubernetes Infrastructure Observability",
    category: "ai",
    categoryName: "Cloud & DevOps",
    tagline: "AI-Powered Anomaly Detection & Log Intelligence for Kubernetes",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    banner: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    client: "Vigilant Cloud Systems, Berlin",
    year: "2024",
    role: "Cloud & AI Backend Engineer",
    duration: "4 Months",
    liveUrl: "https://example.com/demo/vigilant-cloud",
    githubUrl: "https://github.com/example/vigilant-cloud",
    overview: "Real-time microservices telemetry suite that pinpoints root causes of microservice latency spikes and pod crashes before they impact end users.",
    challenge: "Engineering teams were drowning in millions of uncorrelated logs during outages, causing high Mean Time to Resolution (MTTR).",
    solution: "Engineered a high-throughput streaming pipeline using Golang, Kafka, and ClickHouse, paired with an AI clustering model that groups related alerts into single actionable root-cause insights.",
    technologies: ["Go", "Kafka", "ClickHouse", "Kubernetes", "Docker", "Prometheus", "Grafana", "React"],
    metrics: [
      { label: "MTTR Reduction", value: "68%" },
      { label: "Events Processed/Sec", value: "250k" },
      { label: "Storage Compression", value: "10x" },
      { label: "Alert Noise Reduced", value: "85%" }
    ],
    features: [
      "Automated K8s cluster topology mapping and dependency graphs",
      "Natural language log search with automatic regex extraction",
      "Slack and PagerDuty bi-directional smart alert triaging",
      "Resource cost forecasting and waste identification dashboard"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// Helper functions for easy querying
function getProjectById(id) {
  return projectsData.find(p => p.id === id) || projectsData[0];
}

function getFeaturedProjects() {
  return projectsData.filter(p => p.featured);
}

function getProjectsByCategory(category) {
  if (!category || category === "all") return projectsData;
  return projectsData.filter(p => p.category === category);
}
