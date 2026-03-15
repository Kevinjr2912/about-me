import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-h)",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
          {/* Logo */}
          <a href="#hero" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
            KMP<span style={{ color: "var(--text-dim)" }}>©</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--accent)"}
                onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
              >
                {link.label}
              </a>
            ))}
            <a href={personal.social.github} target="_blank" rel="noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#000", background: "var(--accent)", padding: "0.45rem 1rem", borderRadius: "2px", letterSpacing: "0.08em", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.target.style.opacity = "0.85"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >
              GitHub →
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn"
            style={{ display: "none", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ position: "fixed", inset: 0, zIndex: 999, background: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem" }}
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
