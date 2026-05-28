"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, CATEGORIES, type Category } from "@/data/projects";
import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";

const DESIGN_COLORS: Record<number, string> = {
  6: "from-[#2E1A10] to-[#1A1612]",
  7: "from-[#1A1E10] to-[#141612]",
  8: "from-[#1E1A14] to-[#141210]",
  9: "from-[#12181E] to-[#0E1214]",
};

const VIDEO_COLORS: Record<number, string> = {
  10: "from-[#1A1012] to-[#0E0B09]",
  11: "from-[#101A12] to-[#0B0E09]",
};

export function Portfolio() {
  const [active, setActive] = useState<Category>("destaques");

  const filtered = useMemo(() => {
    if (active === "destaques") return PROJECTS.filter((p) => p.featured);
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="w-full bg-[#0E0B09] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Header */}
        <RevealOnScroll className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-mono, monospace)" }}>
              Trabalhos
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            Portfólio
          </h2>
        </RevealOnScroll>

        {/* Filtros */}
        <RevealOnScroll delay={0.15} className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-sm border transition-all duration-300 ${
                active === cat.key
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-[#F2EDE8]"
                  : "border-[#2E2820] text-[#6E6256] hover:border-[var(--color-accent)]/50 hover:text-[#A09488]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </RevealOnScroll>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.97, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.94, filter: "blur(4px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative overflow-hidden rounded-sm cursor-pointer bg-[#1A1612]"
                style={{ aspectRatio: project.orientation === "portrait" ? "3/4" : "4/3" }}
              >
                {/* Imagem ou placeholder */}
                {project.thumb ? (
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "center top" }}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      project.category === "design"
                        ? (DESIGN_COLORS[project.id] ?? "from-[#1A1612] to-[#0E0B09]")
                        : (VIDEO_COLORS[project.id] ?? "from-[#1A1612] to-[#0E0B09]")
                    } flex items-center justify-center`}
                  >
                    <span className="text-[40px] opacity-10 select-none">
                      {project.category === "design" ? "◻" : "▷"}
                    </span>
                  </div>
                )}

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B09]/90 via-[#0E0B09]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Info card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-[#F2EDE8] text-lg font-light leading-tight"
                    style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#B0A89E] text-xs mt-1">{project.subtitle}</p>
                </div>

                {/* Categoria badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[#0E0B09]/80 text-[#6E6256] rounded-sm">
                    {project.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
