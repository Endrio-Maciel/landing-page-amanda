"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const WHATSAPP_NUMBER = "5181820743";

// Atualizar com os dados reais
const CONTACT_LINKS = [
  {
    label: "WhatsApp",
    value: "+55 51 8182-0743",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    label: "Instagram",
    value: "@amanda_valladares", // atualizar handle
    href: "https://instagram.com/amanda__valladares",
  },
  {
    label: "Email",
    value: "amanda@email.com", // atualizar email
    href: "mailto:amanda@email.com",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Amanda!${name ? ` Meu nome é ${name}.` : ""} ${
      message || "Gostaria de conversar sobre um projeto."
    }`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contato" className="w-full bg-[#1A1612] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Header */}
        <RevealOnScroll className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            <span
              className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              Contato
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            Vamos criar algo
            <br />
            <span className="italic text-[#B0A89E]">inesquecível.</span>
          </h2>
        </RevealOnScroll>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Esquerda: descrição + links */}
          <RevealOnScroll delay={0.05}>
            <p className="text-[#6E6256] text-sm leading-relaxed mb-12 max-w-sm">
              Tem um projeto em mente? Quer conversar sobre como posso ajudar
              sua marca? Manda uma mensagem — respondo por WhatsApp.
            </p>

            <ul className="space-y-0">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-[#2E2820] py-5 hover:border-[var(--color-accent)]/40 transition-colors duration-300"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#B0A89E] mb-1">
                        {link.label}
                      </p>
                      <p className="text-[#B0A89E] text-sm group-hover:text-[#F2EDE8] transition-colors duration-300">
                        {link.value}
                      </p>
                    </div>
                    <span className="text-[#4A4238] text-lg group-hover:text-[var(--color-accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* Direita: formulário */}
          <RevealOnScroll delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#B0A89E]">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como posso te chamar?"
                    className="bg-transparent border-b border-[#2E2820] py-3 text-[#F2EDE8] text-sm placeholder:text-[#3A342C] focus:outline-none focus:border-[var(--color-accent)]/60 transition-colors duration-300 w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#B0A89E]">
                    Mensagem
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Me conta sobre seu projeto..."
                    rows={5}
                    className="bg-transparent border-b border-[#2E2820] py-3 text-[#F2EDE8] text-sm placeholder:text-[#3A342C] focus:outline-none focus:border-[var(--color-accent)]/60 transition-colors duration-300 resize-none w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="group self-start flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-[#F2EDE8] text-sm tracking-wider uppercase rounded-sm hover:bg-[var(--color-accent-glow)] transition-colors duration-300"
                >
                  Enviar pelo WhatsApp
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
                <p className="text-[10px] text-[#B0A89E] leading-relaxed">
                  Você será redirecionado para o WhatsApp com a mensagem já
                  preenchida.
                </p>
              </div>
            </form>
          </RevealOnScroll>
        </div>

        {/* Rodapé da página */}
        <RevealOnScroll
          variant="fade"
          className="mt-24 pt-8 border-t border-[#2E2820]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4A4238]">
              Amanda Valladares — 2026
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4A4238]">
              Fotografia · Vídeo · Design
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
