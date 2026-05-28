"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-4 bg-[#0E0B09]/90 backdrop-blur-md border-b border-[#1E1A16]"
            : "py-6"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-light tracking-wider text-[#F2EDE8] hover:text-[var(--color-accent)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
          >
            AV<span className="text-[var(--color-accent)]">.</span>
          </a>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-[#6E6256] hover:text-[#F2EDE8] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contato"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-4 py-2 rounded-sm hover:bg-[var(--color-accent)]/10 transition-all duration-300"
          >
            Fale Comigo
          </a>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#F2EDE8]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-[#F2EDE8]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#F2EDE8]"
            />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0E0B09]/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light tracking-wider text-[#F2EDE8] hover:text-[var(--color-accent)] transition-colors"
                style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
