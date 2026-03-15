import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const stats = [
  { value: "8th", label: "Semester" },
  { value: "3+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 0", borderTop: "1px solid var(--border)" }}>
      <div className="section-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }} viewport={{ once: true }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.2em", display: "block", marginBottom: "1.5rem" }}>
                01 — ABOUT
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                HELLO,<br /><span style={{ color: "var(--accent)" }}>I'M</span><br />KEVIN.
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.5rem" }}>
                {personal.bio}
              </p>

              {/* Social links */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                {[
                  { label: "GitHub", href: personal.social.github },
                  { label: "LinkedIn", href: personal.social.linkedin },
                  { label: "Instagram", href: personal.social.instagram },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.12em", borderBottom: "1px solid var(--border-light)", paddingBottom: "2px", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.target.style.color = "var(--accent)"; e.target.style.borderColor = "var(--accent)"; }}
                    onMouseLeave={e => { e.target.style.color = "var(--text-dim)"; e.target.style.borderColor = "var(--border-light)"; }}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: stats + card */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }}
            >
              {/* Code card */}
              <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1.5rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ color: "var(--text-dim)", lineHeight: 1.9 }}>
                  <span style={{ color: "#C678DD" }}>const</span>{" "}
                  <span style={{ color: "#61AFEF" }}>kevin</span>{" = {"}
                  <br />
                  {"  "}<span style={{ color: "#E06C75" }}>role</span>:{" "}
                  <span style={{ color: "#98C379" }}>"Backend Developer"</span>,
                  <br />
                  {"  "}<span style={{ color: "#E06C75" }}>focus</span>:{" "}
                  <span style={{ color: "#98C379" }}>"APIs & Systems"</span>,
                  <br />
                  {"  "}<span style={{ color: "#E06C75" }}>learning</span>:{" "}
                  <span style={{ color: "#98C379" }}>"Always"</span>,
                  <br />
                  {"  "}<span style={{ color: "#E06C75" }}>available</span>:{" "}
                  <span style={{ color: "#D19A66" }}>true</span>,
                  <br />
                  {"}"}
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ background: "var(--bg)", padding: "1.5rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", marginTop: "0.4rem", letterSpacing: "0.15em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .section-container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
