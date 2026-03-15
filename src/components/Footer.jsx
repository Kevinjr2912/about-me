import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
        © 2026 KEVIN MORALES PÉREZ
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GH", href: personal.social.github },
          { label: "LI", href: personal.social.linkedin },
          { label: "IG", href: personal.social.instagram },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
