import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg-3)" : "var(--bg-2)",
        border: `1px solid ${hovered ? project.accent + "50" : "var(--border)"}`,
        borderRadius: "4px",
        padding: "2.5rem",
        transition: "all 0.3s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%",
        background: project.accent, filter: "blur(80px)", opacity: hovered ? 0.08 : 0,
        transition: "opacity 0.5s",
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: project.accent, letterSpacing: "0.15em" }}>
            {project.id}
          </span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, marginTop: "0.25rem" }}>
            {project.name}
          </h3>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dim)", marginTop: "0.25rem", letterSpacing: "0.08em" }}>
            {project.subtitle}
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {project.links.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: project.accent,
                border: `1px solid ${project.accent}40`, padding: "0.4rem 0.75rem", borderRadius: "2px",
                letterSpacing: "0.08em", transition: "all 0.2s", background: `${project.accent}10`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${project.accent}25`; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${project.accent}10`; }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.75rem" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)",
            border: "1px solid var(--border)", padding: "0.3rem 0.65rem", letterSpacing: "0.08em",
          }}>
            #{tag}
          </span>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.1em", display: "block", marginBottom: "0.6rem" }}>
          BUILT WITH
        </span>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.stack.map(s => (
            <span key={s} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: project.accent,
              background: `${project.accent}10`, padding: "0.2rem 0.6rem",
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "8rem 0", borderTop: "1px solid var(--border)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.2em", display: "block", marginBottom: "1rem" }}>
            03 — PROJECTS
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.95 }}>
              SELECTED<br /><span style={{ color: "var(--accent)" }}>WORK</span>
            </h2>
            <a href="https://github.com/Kevinjr2912" target="_blank" rel="noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", borderBottom: "1px solid var(--border-light)", paddingBottom: "2px", letterSpacing: "0.08em", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.color = "var(--accent)"; e.target.style.borderColor = "var(--accent)"; }}
              onMouseLeave={e => { e.target.style.color = "var(--text-muted)"; e.target.style.borderColor = "var(--border-light)"; }}
            >
              ALL REPOS ON GITHUB ↗
            </a>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
