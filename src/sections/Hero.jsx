import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const ROLES = ["Backend Developer", "API Architect", "Systems Builder", "Full Stack Curious"];

export default function Hero() {
  const canvasRef = useRef(null);

  // Particle grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const cols = Math.floor(W / 40);
    const rows = Math.floor(H / 40);
    const dots = [];

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        dots.push({ x: c * 40 + 20, y: r * 40 + 20, base: Math.random() * Math.PI * 2 });
      }
    }

    let mouse = { x: W / 2, y: H / 2 };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        const dist = Math.hypot(mouse.x - d.x, mouse.y - d.y);
        const maxD = 200;
        const alpha = dist < maxD ? 0.08 + (1 - dist / maxD) * 0.25 : 0.06;
        const size = dist < maxD ? 1 + (1 - dist / maxD) * 2 : 1;
        const wave = Math.sin(t / 1000 + d.base) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(d.x, d.y, size * (0.5 + wave * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 148, ${alpha * wave})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Grid lines decoration */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "80px 80px", opacity: 0.3 }} />

      <div className="section-container" style={{ position: "relative", zIndex: 2, paddingTop: "var(--nav-h)" }}>
        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "2.5rem" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite", display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em" }}>OPEN TO OPPORTUNITIES</span>
        </motion.div>

        {/* Main heading */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              marginBottom: "0.2em",
            }}>
            KEVIN<br />
            <span style={{ color: "var(--accent)", WebkitTextStroke: "0px", display: "inline-block" }}>MORALES</span>
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.8rem, 2vw, 1rem)", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Backend Developer & Frontend Explorer
          </span>
          <div style={{ height: 1, width: 60, background: "var(--border-light)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-dim)" }}>MX</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          style={{ maxWidth: 520, color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "3rem" }}>
          {personal.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#000", fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, padding: "0.85rem 2rem", letterSpacing: "0.08em", transition: "transform 0.2s, opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            VIEW WORK →
          </a>
          <a href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid var(--border-light)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", padding: "0.85rem 2rem", letterSpacing: "0.08em", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.2em", writingMode: "vertical-rl" }}>SCROLL</span>
        <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, var(--text-dim), transparent)", animation: "scrollLine 2s infinite" }} />
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transformOrigin:top} 50%{transform:scaleY(1);transformOrigin:top} 100%{transform:scaleY(0);transformOrigin:bottom} }
      `}</style>
    </section>
  );
}
