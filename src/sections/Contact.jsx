import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const contactLinks = [
  {
    label: "GitHub",
    handle: "@Kevinjr2912",
    href: personal.social.github,
    accent: "#00FF94",
    desc: "Check my repos",
  },
  {
    label: "LinkedIn",
    handle: "Kevin Morales Pérez",
    href: personal.social.linkedin,
    accent: "#0EA5E9",
    desc: "Let's connect professionally",
  },
  {
    label: "Instagram",
    handle: "@kev.29.06",
    href: personal.social.instagram,
    accent: "#E06C75",
    desc: "Day-to-day stuff",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "8rem 0 6rem", borderTop: "1px solid var(--border)", background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
      {/* Big BG text */}
      <div style={{
        position: "absolute", bottom: "-2rem", left: "50%", transform: "translateX(-50%)",
        fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 15vw, 14rem)", fontWeight: 800,
        color: "transparent", WebkitTextStroke: "1px var(--border)", letterSpacing: "-0.05em",
        whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none",
      }}>
        LET'S BUILD
      </div>

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.2em", display: "block", marginBottom: "1.5rem" }}>
            04 — CONTACT
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "1.5rem" }}>
            HAVE AN<br /><span style={{ color: "var(--accent)" }}>IDEA?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Whether it's a job opportunity, a cool project, or just want to talk tech — I'm always open to a conversation.
          </p>
        </motion.div>

        {/* Social links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", maxWidth: 800, margin: "0 auto" }}>
          {contactLinks.map((link, i) => (
            <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{ background: "var(--bg)", padding: "2rem 1.5rem", display: "block", textDecoration: "none", transition: "background 0.2s", textAlign: "center" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--bg-3)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: link.accent, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>{link.label}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>{link.handle}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)" }}>{link.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact .section-container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
