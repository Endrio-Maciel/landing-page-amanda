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
  images?: string[];
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
    images: [
      "/images/ensaio-andrielly-01.jpg",
      "/images/ensaio-andrielly-02.jpg",
      "/images/ensaio-andrielly-03.jpg",
      "/images/ensaio-andrielly-04.jpg",
      "/images/ensaio-andrielly-05.jpg",
      "/images/ensaio-andrielly-06.jpg",
      "/images/ensaio-andrielly-07.jpg",
      "/images/ensaio-andrielly-08.jpg",
      "/images/ensaio-andrielly-09.jpg",
      "/images/ensaio-andrielly-10.jpg",
    ],
  },
  {
    id: 2,
    title: "Ensaio Pessoal",
    subtitle: "Retratos íntimos com luz natural",
    category: "fotografia",
    tags: ["Ensaio", "Retrato", "Arte"],
    thumb: "/images/ensaio-pessoal-01.jpg",
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
    images: [
      "/images/ensaio-amanda-01.jpg",
      "/images/ensaio-amanda-02.jpg",
      "/images/ensaio-amanda-03.jpg",
      "/images/ensaio-amanda-04.jpg",
      "/images/ensaio-amanda-05.jpg",
      "/images/ensaio-amanda-06.jpg",
    ],
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
    title: "Convite — Chá de Fralda",
    subtitle: "Identidade completa para evento da Lívia",
    category: "design",
    tags: ["Convite", "Evento", "Design"],
    thumb: "/images/design-convite-01.jpg",
    orientation: "portrait",
  },
  {
    id: 8,
    title: "Banner — Amanda Carvalho",
    subtitle: "Material visual para Beauty Studio",
    category: "design",
    tags: ["Banner", "Social Media", "Branding"],
    thumb: "/images/design-banner-01.jpg",
    orientation: "portrait",
  },
  {
    id: 9,
    title: "Logotipo Nycole Aguiar",
    subtitle: "Identidade de marca para terapeuta",
    category: "design",
    tags: ["Logotipo", "Branding"],
    thumb: "/images/design-logotipo-01.jpg",
    featured: true,
    orientation: "portrait",
  },
  {
    id: 7,
    title: "Identidade Visual — Cervejaria",
    subtitle: "Design de rótulo para Cervejaria Ouro Velho",
    category: "design",
    tags: ["Identidade Visual", "Branding", "Rótulo"],
    thumb: "/images/design-identidade-01.jpg",
    orientation: "portrait",
  },
];

export const CATEGORIES = [
  { key: "destaques" as Category, label: "Destaques" },
  { key: "fotografia" as Category, label: "Fotografia" },
  { key: "design" as Category, label: "Design" },
];
