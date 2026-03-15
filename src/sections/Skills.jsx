import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const categories = [
  { label: "Languages", items: skills.languages, color: "#C678DD" },
  { label: "Backend", items: skills.backend, color: "#00FF94" },
  { label: "Frontend", items: skills.frontend, color: "#61AFEF" },
  { label: "Databases", items: skills.databases, color: "#E06C75" },
  { label: "ORM / ODM", items: skills.orm, color: "#D19A66" },
  { label: "DevOps", items: skills.devops, color: "#FF3C3C" },
  { label: "Architecture", items: skills.architecture, color: "#56B6C2" },
  { label: "Messaging", items: skills.messaging, color: "#98C379" },
];

function Tag({ name, color }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      color: color,
      background: `${color}12`,
      border: `1px solid ${color}30`,
      padding: "0.35rem 0.75rem",
      borderRadius: "2px",
      letterSpacing: "0.05em",
      display: "inline-block",
      transition: "all 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = `${color}25`; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${color}12`; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 0", borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
      <div className="section-container">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.2em", display: "block", marginBottom: "1rem" }}>
            02 — SKILLS
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.95 }}>
              MY TECH<br /><span style={{ color: "var(--accent)" }}>STACK</span>
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: 380, fontSize: "0.95rem", lineHeight: 1.7 }}>
              Tools I use daily and technologies I'm comfortable shipping to production.
            </p>
          </div>
        </motion.div>

        {/* Marquee of all techs */}
        <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1rem 0", marginBottom: "4rem" }}>
          <div style={{ display: "flex", gap: "3rem", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, i) => (
              <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
                {s} <span style={{ color: "var(--accent)" }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "var(--border)" }}>
          {categories.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }} viewport={{ once: true }}
              style={{ background: "var(--bg)", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{cat.label}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.items.map(item => <Tag key={item} name={item} color={cat.color} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </section>
  );
}
