export const personal = {
  name: "Kevin Morales Pérez",
  role: "Backend Developer",
  secondary: "& Frontend Explorer",
  tagline: "I engineer robust backend systems and craft the interfaces that bring them to life.",
  bio: "Software Engineering student in my 8th semester, obsessed with building things that work well under the hood. My world is backend — APIs, databases, distributed systems — but I believe a great engineer understands the full stack. That curiosity keeps me learning frontend too, because the best products are built by people who see the whole picture.",
  location: "México",
  social: {
    github: "https://github.com/Kevinjr2912",
    linkedin: "https://www.linkedin.com/in/kevin-morales-p%C3%A9rez-12675a291/",
    instagram: "https://www.instagram.com/kev.29.06/",
  },
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL", "Go"],
  backend: ["Node.js", "Express", "NestJS", "FastAPI", "Gin"],
  frontend: ["React", "Angular", "JetpackCompose"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  orm: ["Sequelize", "Mongoose"],
  devops: ["AWS", "Docker", "Nginx"],
  architecture: ["MVC", "MVVM", "Ports & Adapters", "DDD"],
  messaging: ["RabbitMQ"],
};

export const projects = [
  {
    id: "01",
    name: "Abastock",
    subtitle: "Inventory & Sales Management",
    description:
      "Mobile-first app for grocery stores and small businesses to digitize their inventory management and sales tracking. Replaces spreadsheets and handwritten logs with a clean, intuitive interface.",
    tags: ["Mobile", "Inventory", "Sales", "Digitalization"],
    stack: ["Jetpack Compose", "Typescript", "Express", "PostgreSQL"],
    links: [
      { label: "Backend", url: "https://github.com/Kevinjr2912/abastock-frontend" },
      { label: "Frontend", url: "https://github.com/Kevinjr2912/abastock-frontend" }
    ],
    accent: "#00FF94",
  },
  {
    id: "02",
    name: "F1 Store",
    subtitle: "E-Commerce Platform",
    description:
      "Product showcase and e-commerce platform for F1 merchandise. Owners publish products without needing social media posts, and customers browse, customize — size, design — and purchase directly on the web.",
    tags: ["E-Commerce", "F1", "Custom Orders", "Catalog"],
    stack: ["React", "Node.js", "MySQL", "Sequelize"],
    links: [
      { label: "Frontend", url: "https://github.com/Kevinjr2912/FrontendProject" },
    ],
    accent: "#FF3C3C",
  },
  {
    id: "03",
    name: "AquaFlow",
    subtitle: "IoT Water Reutilization",
    description:
      "IoT-powered system that monitors used water quality in real time and determines what activities it's safe for — irrigation, cleaning, flushing — pushing sustainability through smart data analysis.",
    tags: ["IoT", "Sustainability", "Real-Time", "Data Analysis"],
    stack: ["FastAPI", "Python", "MQTT", "Express", "TypeScript", "PostgreSQL"],
    links: [
      { label: "Main API", url: "https://github.com/Kevinjr2912/AquaFlowAPIMain" },
      { label: "Sensors API", url: "https://github.com/Kevinjr2912/AquaFlowAPISensorsReadings" },
      { label: "Data Analysis", url: "https://github.com/Kevinjr2912/AquaFlowDataAnalysis" },
    ],
    accent: "#0EA5E9",
  },
];

export const experience = [
  {
    company: "Universidad Politécnica de Chiapas",
    role: "Software Engineering Student",
    period: "2022 — Present",
    description: "8th semester. Developing real-world projects across the full stack, with deep focus on backend architecture, distributed systems, and software design patterns.",
  },
];
