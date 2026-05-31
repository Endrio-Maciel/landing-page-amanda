"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";

const NUMEROS = [
  { valor: "11+", label: "Projetos" },
  { valor: "2", label: "Áreas" },
  { valor: "∞", label: "Ideias" },
];

export function About() {
  return (
    <section id="sobre" className="w-full bg-[#1A1612] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 py-24 md:py-32">
          {/* ── Coluna esquerda: foto ── */}
          <RevealOnScroll
            variant="fade"
            amount={0.1}
            className="relative mb-16 lg:mb-0"
          >
            <div className="relative">
              {/* Borda deslocada */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute -left-4 -bottom-4 w-full h-full border border-[var(--color-accent)]/20 rounded-sm z-0"
              />

              {/* Foto */}
              <div
                className="relative z-10 overflow-hidden rounded-sm"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/ensaio-pessoal-01.jpg"
                  alt="Amanda Valladares"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/60 via-transparent to-transparent" />
              </div>

              {/* Chip flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -right-4 top-10 z-20 bg-[#0E0B09]/90 backdrop-blur-md border border-[#2E2820] rounded-sm px-4 py-3"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-1">
                  Disponível
                </p>
                <p className="text-xs text-[#B0A89E]">para projetos</p>
              </motion.div>
            </div>

            {/* Números abaixo da foto */}
            <RevealGroup
              className="grid grid-cols-3 gap-4 mt-8"
              stagger={0.1}
              delay={0.2}
              amount={0.3}
            >
              {NUMEROS.map((n) => (
                <RevealItem key={n.label} variant="fade-up">
                  <div className="text-center">
                    <p
                      className="text-3xl font-light text-[#F2EDE8] mb-1"
                      style={{
                        fontFamily: "var(--font-display, Georgia, serif)",
                      }}
                    >
                      {n.valor}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#4A4238]">
                      {n.label}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealOnScroll>

          {/* ── Coluna direita: texto ── */}
          <div className="flex flex-col justify-center">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[var(--color-accent)]" />
                <span
                  className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]"
                  style={{ fontFamily: "var(--font-mono, monospace)" }}
                >
                  Sobre
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-2"
                style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                Amanda
              </h2>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] italic text-[#B0A89E] mb-10"
                style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                Valladares
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="text-[#B0A89E] text-base leading-relaxed mb-6">
                Sou criativa, observadora e curiosa por natureza. Sempre gostei
                de arte, música, filmes e de prestar atenção nos detalhes e nas
                histórias das pessoas.
              </p>
              <p className="text-[#B0A89E] text-base leading-relaxed mb-10">
                Estudante de Publicidade e Propaganda com referências que vão
                muito além da faculdade — construindo minha vida aos poucos,
                buscando crescer profissionalmente e transformar ideias em
                projetos reais.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#4A4238] mb-6 leading-relaxed">
                Entre câmeras, designs e cafés em dias chuvosos
              </p>
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-[var(--color-accent)] hover:text-[#F2EDE8] transition-all duration-400"
              >
                Vamos trabalhar juntos
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </RevealOnScroll>
          </div>
        </div>

        {/* Linha divisória */}
        <RevealOnScroll
          variant="fade"
          className="relative py-8 border-t border-[#2E2820]"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4A4238]">
              Amanda Valladares — 2025
            </span>
            <span
              className="text-[#2E2820] text-4xl font-light select-none"
              style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
            >
              AV.
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
