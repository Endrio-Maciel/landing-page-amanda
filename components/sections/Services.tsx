"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const SERVICES = [
  {
    number: "01",
    category: "Fotografia",
    tagline: "Imagens que contam histórias reais",
    description:
      "Do ensaio intimista ao evento memorável, cada clique carrega intenção. O foco é criar imagens que transmitam emoção, personalidade e verdade.",
    items: [
      "Ensaio pessoal e de moda",
      "Marca pessoal",
      "Cobertura de eventos",
      "Retratos com luz natural",
    ],
    cta: "Quero um ensaio",
  },
  {
    number: "02",
    category: "Vídeo",
    tagline: "Movimento com intenção criativa",
    description:
      "Conteúdo audiovisual para marcas e pessoas que querem comunicar com profundidade. De Reels dinâmicos a vídeos institucionais com alma.",
    items: [
      "Reels e conteúdo para redes sociais",
      "Vídeo institucional",
      "Cobertura de eventos",
      "Conteúdo para marca pessoal",
    ],
    cta: "Quero um vídeo",
  },
  {
    number: "03",
    category: "Design",
    tagline: "Identidade visual com personalidade",
    description:
      "Criação de marcas que parecem reais, não geradas. Do logotipo ao material completo, tudo pensado para comunicar quem você é.",
    items: [
      "Identidade visual completa",
      "Templates para redes sociais",
      "Landing page e branding digital",
      "Direção de arte",
    ],
    cta: "Quero um projeto",
  },
];

export function Services() {
  return (
    <section id="servicos" className="w-full bg-[#0E0B09] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">

        {/* Header */}
        <RevealOnScroll className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            <span
              className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              Serviços
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            O que posso fazer
            <br />
            <span className="italic text-[#B0A89E]">por você.</span>
          </h2>
        </RevealOnScroll>

        {/* Lista de serviços */}
        <div>
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.number} delay={i * 0.05}>
              <div className="group border-t border-[#2E2820] py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 hover:border-[var(--color-accent)]/30 transition-colors duration-500">

                {/* Esquerda: número + nome + descrição */}
                <div>
                  <div className="flex items-baseline gap-5 mb-5">
                    <span
                      className="text-[#2E2820] text-7xl md:text-8xl font-light leading-none select-none group-hover:text-[#3A342C] transition-colors duration-500"
                      style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
                    >
                      {service.number}
                    </span>
                    <h3
                      className="text-3xl md:text-4xl font-light leading-tight tracking-[-0.02em]"
                      style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
                    >
                      {service.category}
                    </h3>
                  </div>
                  <p
                    className="text-[var(--color-accent)] text-sm tracking-wide mb-4 italic"
                    style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
                  >
                    {service.tagline}
                  </p>
                  <p className="text-[#6E6256] text-sm leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* Direita: entregáveis + CTA */}
                <div className="flex flex-col justify-between gap-8">
                  <ul className="space-y-4 pt-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-[#B0A89E] text-sm">
                        <span className="w-5 h-px bg-[#4A4238] flex-shrink-0 group-hover:bg-[var(--color-accent)]/40 transition-colors duration-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="group/btn self-start inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-5 py-3 rounded-sm hover:bg-[var(--color-accent)] hover:text-[#F2EDE8] transition-all duration-300"
                  >
                    {service.cta}
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>

              </div>
            </RevealOnScroll>
          ))}
          <div className="border-t border-[#2E2820]" />
        </div>

      </div>
    </section>
  );
}
