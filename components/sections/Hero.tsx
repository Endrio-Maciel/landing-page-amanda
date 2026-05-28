"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HEADLINES = [
  "Fotografia, vídeo e design",
  "por Amanda Valladares.",
];

const SUBHEAD = "Criando imagens que fazem alguém sentir alguma coisa ao olhar.";

const SERVICES = ["Videomaker", "Fotógrafa", "Designer", "Diretora Criativa"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.06]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background com parallax */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#0E0B09]" />

        {/* Luz principal — canto inferior esquerdo */}
        {/* rollback rgba: (207,96,64,0.18) / (190,80,40,0.10) */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-10%",
            bottom: "-5%",
            width: "70vw",
            height: "70vw",
            maxWidth: 800,
            maxHeight: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(207,96,64,0.18) 0%, rgba(190,80,40,0.10) 35%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Reflexo de teto — topo direito */}
        {/* rollback rgba: (200,130,70,0.10) / (180,100,50,0.06) */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "5%",
            top: "-10%",
            width: "55vw",
            height: "55vw",
            maxWidth: 680,
            maxHeight: 680,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,130,70,0.10) 0%, rgba(180,100,50,0.06) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Luz ambiente centro — preenchimento geral */}
        {/* rollback rgba: (160,80,40,0.07) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 35% 55%, rgba(160,80,40,0.07) 0%, transparent 100%)",
          }}
        />

        {/* Acento oliva — profundidade lateral direita */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-5%",
            bottom: "10%",
            width: "40vw",
            height: "40vw",
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(122,143,68,0.09) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Grain texture — leve, só para textura */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242, 237, 232, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242, 237, 232, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Conteúdo principal */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20"
      >
        {/* Label topo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[var(--color-accent)]" />
          <span
            className="text-[11px] uppercase tracking-[0.25em] font-mono text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-mono, monospace)" }}
          >
            Portfólio Criativo
          </span>
        </motion.div>

        {/* Headline principal */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            {HEADLINES[0]}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.02em] italic text-[#B0A89E]"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            {HEADLINES[1]}
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="text-sm md:text-base text-[#8C7E74] tracking-wide mb-10 max-w-md"
        >
          {SUBHEAD}
        </motion.p>

        {/* Linha separadora */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-px bg-[#2E2820] origin-left mb-10"
        />

        {/* Rodapé hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* Tags de serviço */}
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase border border-[#4A4238] rounded-sm bg-[#1A1612]/70 text-[#C4B8A8] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-glow)] hover:bg-[var(--color-accent)]/10 transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-[#F2EDE8] text-sm tracking-wider uppercase rounded-sm hover:bg-[var(--color-accent-glow)] transition-colors duration-300"
          >
            Ver Portfólio
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#4A4238]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#4A4238] to-transparent">
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-4 bg-[var(--color-accent)] opacity-60"
          />
        </div>
      </motion.div>
    </section>
  );
}
