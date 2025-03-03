import Upwork from "@/svgs/upwork";
import { Work } from "@/types";
import { Github, Linkedin, MailIcon } from "lucide-react";

export const navLinks = [
  /*{
    name: "expertise",
    href: "#expertise",
  },*/
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "CV",
    href: "https://read.cv/brandon20",
    external: true,
  },
];

export const works: Work[] = [
  {
    name: "Homie",
    overview: "AI powered project manager",
    link: "https://homie.gg",
    image: "/assets/images/homie.png",
    images: [],
    details: [
      `Homie is an AI-powered project management tool designed to streamline your workflows and simplify project management.`,
    ],
    technologies: ["Next.js", "Framer", "Tailwind CSS"],
    scope: [
      "API Integration",
      "Full-Stack Development",
      "Front-End Development",
      "Responsive Design",
    ],
    year: 2024,
  },
  {
    name: "Sunny Side Up",
    details: [
      `Sunny Side Up is a brand agency based in Singapore.`,
      `This is a fully responsive webiste for Sunny Side Up, built with Next.js 13, Payload CMS, Three.js, and Tailwind CSS.`,
    ],
    overview: "Future-ready brands, today.",
    link: "https://sunnysideup.sg",
    image: "/assets/images/ssu.png",
    images: [
      "/assets/images/ssu-1.png",
      "/assets/images/ssu-2.png",
      "/assets/images/ssu-3.png",
    ],
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
  {
    name: "Venturous Group",
    overview: "Creating urban evolution through tech innovation",
    link: "https://venturousgroup.com",
    image: "/assets/images/venturous-group.jpg",
    images: [
      "/assets/images/venturous-group-1.png",
      "/assets/images/venturous-group-2.png",
    ],
    details: [
      `Venturous Group is an investment firm that invests in early-stage technology companies.`,
      `This website was built with Next.js 13, Tailwind CSS and Payload CMS. It is responsive and accessible across different browsers and devices.`,
      `Other tools and technologies used inlcude: TypeScript, Playwright, HubSpot, and Vercel.`,
    ],
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "SASS",
    ],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
  {
    name: "Artium Deus",
    details: [
      `This is a Next.js website I developed for Artium Deus, an online store for travertine furnitures.`,
    ],
    overview: "Raw is real.",
    link: "https://artiumdeus.com",
    image: "/assets/images/artium-deus.jpg",
    images: [
      "/assets/images/artium-deus-1.png",
      "/assets/images/artium-deus-2.png",
    ],
    technologies: [
      "Next.js 14",
      "Payload CMS",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "API Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
];

export const testimonials = [
  {
    name: "Cherly Boon",
    role: "Creative, Sunny Side Up",
    testimonial: `Brandon is efficient and great at what he does, and was able to effectively communicate and guide on the best alternative steps when we needed a solution. He is also quick and fast! Would definitely work together again, many thanks!`,
  },
  {
    name: "Johan Riddergard",
    role: "Co-Founder, Venturous Group",
    testimonial: `Brandon did a great job with our website. He was very knowledgeable and easy to work with. Would definitely recommend him if you want someone reliable and does high quality work.`,
  },
  {
    name: "Edgar Hambaryan",
    role: "CTO, TheFlowOps",
    testimonial: `I am extremely satisfied with the work done by Brandon. He is an excellent and highly professional programmer, completing the tasks assigned to him quickly and with great expertise. I will certainly collaborate with him again.`,
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/brandon30067308",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/brandon-chikezie-31708823b",
  },
  {
    name: "Telegram",
    url: "https://t.me/chikezie_1",
  },
  // { name: "Upwork", url: "https://www.upwork.com/freelancers/~010506150fd44bc884" }
];

export const contactLinks = [
  {
    name: "Email",
    link: "mailto:brandon.chikezie@outlook.com",
    icon: () => <MailIcon size={20} strokeWidth={2} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/brandon30067308",
    icon: () => <Github size={20} strokeWidth={2} />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/brandon-chikezie-31708823b",
    icon: () => <Linkedin size={20} strokeWidth={2} />,
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~010506150fd44bc884",
    icon: () => <Upwork width={20} className="w-5 h-auto" />,
  },
];

export const footerLinks = [
  {
    name: "home",
    href: "/home",
  },
  {
    name: "projects",
    href: "/#projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
