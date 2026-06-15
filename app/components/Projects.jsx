import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#3b82f6",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        // projetos
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1px",
          background: "#141414",
        }}
      >
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h2>
              <span
                style={{
                  fontSize: 11,
                  color: "#333",
                  letterSpacing: "0.1em",
                }}
              >
                {p.year}
              </span>
            </div>

            <p
              style={{
                fontSize: 13,
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                textAlign: "justify",
                whiteSpace: "pre-line",
              }}
            >
              {p.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
