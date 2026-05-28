export type Category = "destaques" | "fotografia" | "design";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  tags: string[];
  thumb: string;
  featured?: boolean;
  orientation?: "portrait" | "landscape";
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ensaio Andrielly",
    subtitle: "Fotografia de moda em locação histórica",
    category: "fotografia",
    tags: ["Ensaio", "Moda", "Locação"],
    thumb: "/images/ensaio-andrielly-01.jpg",
    featured: true,
    orientation: "portrait",
  },
  {
    id: 2,
    title: "Ensaio Pessoal",
    subtitle: "Retratos íntimos com luz natural",
    category: "fotografia",
    tags: ["Ensaio", "Retrato", "Arte"],
    thumb: "/images/ensaio-pessoal-01.jpg",
    featured: true,
    orientation: "portrait",
  },
  {
    id: 3,
    title: "Amanda Carvalho — Nail Designer",
    subtitle: "Ensaio feminino para marca pessoal",
    category: "fotografia",
    tags: ["Marca Pessoal", "Ensaio", "Studio"],
    thumb: "/images/ensaio-amanda-01.jpg",
    featured: true,
    orientation: "portrait",
  },
  {
    id: 4,
    title: "Aniversário Andrielly",
    subtitle: "Cobertura fotográfica de evento",
    category: "fotografia",
    tags: ["Evento", "Aniversário"],
    thumb: "/images/aniversario-andrielly-01.jpg",
    orientation: "portrait",
  },
  {
    id: 5,
    title: "Aniversário Pedro",
    subtitle: "Cobertura fotográfica de evento",
    category: "fotografia",
    tags: ["Evento", "Aniversário"],
    thumb: "/images/aniversario-pedro-01.jpg",
    orientation: "landscape",
  },
  {
    id: 6,
    title: "Identidade Visual — Chá de Fraldas",
    subtitle: "Identidade completa para evento da Lívia",
    category: "design",
    tags: ["Identidade Visual", "Evento", "Branding"],
    thumb: "",
    orientation: "landscape",
  },
  {
    id: 7,
    title: "Logo + Landing Page",
    subtitle: "Branding digital para Achadinhos",
    category: "design",
    tags: ["Logo", "Landing Page", "Instagram"],
    thumb: "",
    orientation: "landscape",
  },
  {
    id: 8,
    title: "Templates Nail Designer",
    subtitle: "Materiais visuais para Amanda Carvalho",
    category: "design",
    tags: ["Templates", "Social Media", "Branding"],
    thumb: "",
    orientation: "landscape",
  },
  {
    id: 9,
    title: "Logotipo Nycole Terapias",
    subtitle: "Identidade de marca para terapeuta",
    category: "design",
    tags: ["Logotipo", "Branding"],
    thumb: "",
    orientation: "landscape",
  },
];

export const CATEGORIES = [
  { key: "destaques" as Category, label: "Destaques" },
  { key: "fotografia" as Category, label: "Fotografia" },
  { key: "design" as Category, label: "Design" },
];
