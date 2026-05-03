export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "geock",
    title: "Geock",
    subtitle: "Bioinformatics Deep Learning",
    description: "Deep learning framework for protein-engineering with attention mechanisms. Predicts binding affinities and identifies key mutation sites for drug discovery using transformer architectures.",
    tags: ["Python", "PyTorch", "Deep Learning", "Bioinformatics"],
    github: "https://github.com/Hanishchow/geock",
    featured: true,
  },
  {
    id: "geock-v2",
    title: "Geock-v2",
    subtitle: "Next-Gen Bioinformatics",
    description: "Enhanced version with ensemble methods, uncertainty quantification, and web interface. Features real-time molecular docking predictions and interactive visualization.",
    tags: ["Python", "FastAPI", "React", "Visualization"],
    github: "https://github.com/Hanishchow/geock-v2",
    featured: true,
  },
  {
    id: "gstack",
    title: "GStack",
    subtitle: "AI Engineering Workflow",
    description: "23-specialist AI engineering workflow implementing Think → Plan → Build → Review → Test → Ship → Reflect. Multi-agent orchestration for complex software development.",
    tags: ["TypeScript", "AI Agents", "Workflow", "Orchestration"],
    github: "https://github.com/Hanishchow/gstack",
    featured: true,
  },
  {
    id: "kaito-pr-agent",
    title: "Kaito PR Agent",
    subtitle: "AI Code Review Assistant",
    description: "Autonomous agent that reviews pull requests, suggests improvements, and ensures code quality. Integrates with GitHub Actions for automated reviews on every PR.",
    tags: ["AI", "Code Review", "GitHub", "Automation"],
    github: "https://github.com/Hanishchow/kaito-pr-agent",
    featured: true,
  },
  {
    id: "stellar-evolution",
    title: "Stellar Evolution",
    subtitle: "Astrophysics Simulation",
    description: "Simulate stellar lifecycle from nebula to supernova. Visualize mass loss, nucleosynthesis, and element formation using computational physics.",
    tags: ["Python", "Simulation", "Astrophysics", "Visualization"],
    github: "https://github.com/Hanishchow/stellar-evolution",
  },
  {
    id: "gravitational-wave-sonifier",
    title: "GW Sonifier",
    subtitle: "Astrophysics Sonification",
    description: "Convert gravitational wave signals to sound. Experience the cosmic dance of binary black holes through audio visualization.",
    tags: ["Python", "Audio", "Astrophysics", "Sonification"],
    github: "https://github.com/Hanishchow/gravitational-wave-sonifier",
  },
  {
    id: "quantum-n-body",
    title: "Quantum N-Body",
    subtitle: "Quantum Mechanics Simulation",
    description: "GPU-accelerated N-body quantum mechanics solver. Simulates quantum tunneling, entanglement, and decoherence for multiple particles.",
    tags: ["Python", "CUDA", "Quantum", "GPU"],
    github: "https://github.com/Hanishchow/quantum-n-body",
  },
  {
    id: "three-body-sim",
    title: "Three-Body Problem",
    subtitle: "Classical Mechanics",
    description: "Interactive chaotic three-body problem simulation with Poincaré sections. Explore the sensitive dependence on initial conditions in classical mechanics.",
    tags: ["Python", "Physics", "Chaos", "Simulation"],
    github: "https://github.com/Hanishchow/three-body-sim",
  },
  {
    id: "cosmic-sync",
    title: "Cosmic Sync",
    subtitle: "Space Data Sync",
    description: "Automated pipeline for astronomical data synchronization. Integrates multiple survey telescopes and formats for analysis.",
    tags: ["Python", "Data Pipeline", "Astronomy", "ETL"],
    github: "https://github.com/Hanishchow/cosmic-sync",
  },
  {
    id: "crispr-multiplex-optimizer",
    title: "CRISPR Optimizer",
    subtitle: "Gene Editing",
    description: "Multi-target guide RNA design for CRISPR systems. Optimizes efficiency while minimizing off-target effects across the genome.",
    tags: ["Python", "Bioinformatics", "CRISPR", "Optimization"],
    github: "https://github.com/Hanishchow/crispr-multiplex-optimizer",
  },
];

export const skills = [
  { category: "AI/ML", items: ["PyTorch", "TensorFlow", "Transformers", "RAG", "Agent Systems"] },
  { category: "Web Dev", items: ["Next.js", "React", "TypeScript", "Node.js", "FastAPI"] },
  { category: "Scientific", items: ["Bioinformatics", "Computational Physics", "Data Analysis", " Simulations"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Linux", "SQL"] },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/Hanishchow", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/hanishchow", icon: "Linkedin" },
  { name: "Email", url: "mailto:hanishchow@gmail.com", icon: "Mail" },
];