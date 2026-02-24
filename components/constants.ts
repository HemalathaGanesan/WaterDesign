export const MenuItem = [
  {
    id: "home",
    path: "/",
    label: "Home",
    show: true,
  },
  {
    id: "about",
    path: "/about",
    label: "About Us",
    show: true,
  },
  {
    id: "services",
    path: "/services",
    label: "Services",
    show: true,
    children: [
      { label: "Proposal Support", path: "/services/proposal" },
      { label: "Design Engineering", path: "/services/design" },
      {
        label: "Treatment Plant Design",
        path: "/services/treatment",
      },
      {
        label: "Technical Documentation",
        path: "/services/technical",
      },
    ],
  },
  {
    id: "projects",
    path: "/projects",
    label: "Projects",
    show: true,
  },
  {
    id: "clients",
    path: "/clients",
    label: "Clients",
    show: false,
  },
  {
    id: "blog",
    path: "/blog",
    label: "Blog",
    show: false,
  },
  {
    id: "contact",
    path: "/contact",
    label: "Contact",
    show: true,
  },
];

export const HeroText = [
  {
    title: "Engineering Reliable Water Infrastructure",
    description:
      "Delivering precision-engineered piping systems designed to support long-lasting, efficient, and safe water infrastructure projects.",
  },
  {
    title: "High-Quality Pipes for Water Distribution",
    description:
      "Manufacturing durable, high-performance pipes that ensure reliable water distribution across residential, industrial, and municipal applications.",
  },
  {
    title: "Innovative Solutions for the Water Industry",
    description:
      "Providing advanced pipe solutions built with modern engineering standards to meet the evolving demands of the water industry.",
  },
];

export const clients = [
  { name: "Ion Exchange India Ltd", src: "/images/iron-exchange.webp" },
  { name: "Eureka Forbes", src: "/images/eurka.png" },
  { name: "Paques Environmental Technology", src: "/images/paques.svg" },
  { name: "Echochem", src: "/images/echochem.png" },
  { name: "Nature Neer Solutions", src: "/images/nanneer.svg" },
  { name: "Tech Enviro", src: "/images/tech-enviro.png" },
  { name: "Watermax", src: "/images/watermax.png" },
  { name: "WKT Enviro Systems", src: "/images/wkt_enviro.png" },
  { name: "Hyma Engineers", src: "/images/hyma.png" },
];

export const servicesTypes = [
  {
    title: "Proposal Stage Support",
    desc: "We assist clients during the tender and proposal stage by providing technical diagrams, preliminary calculations, and design documentation to ensure competitive and accurate submissions.",
  },
  {
    title: "Technical Documentation",
    desc: "Preparation of data sheets, detailed fabrication drawings, P&ID diagrams, design analysis reports, and complete engineering documentation.",
  },
  {
    title: "Design & Detail Engineering",
    desc: "Comprehensive design services for ETP, STP, WTP and High Pressure Systems.Our designs ensure regulatory compliance, performance optimization, and cost efficiency.",
  },
  {
    title: "Site Survey & O&M Support",
    desc: "We provide site surveys, engineering & construction guidance, and complete Operation & Maintenance (O&M) manuals to ensure smooth plant operation.",
  },
];

export const whyUs = [
  "45+ Successfully Delivered Projects",
  "40+ Years Combined Expertise",
  "Industry-Leading Clientele",
  "End-to-End Engineering Solutions",
  "Optimized & Cost-Effective Designs",
  "Dedicated Technical Support",
];
