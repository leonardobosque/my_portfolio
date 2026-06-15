"use client";

import { useState, useEffect } from "react";

function useTypewriter(text, speed = 60) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function About() {
  const typed = useTypewriter("Desenvolvedor Fullstack.");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 56,
      }}
    >
      <div className="fade-in">
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "#3b82f6",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          {">"}
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
            color: "#fff",
          }}
        >
          Leonardo Henrique Bosque
          <br />
          <span style={{ color: "#333" }}>
            {typed}
            <span className="blink" style={{ color: "#3b82f6" }}>
              _
            </span>
          </span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#555",
            maxWidth: 900,
            lineHeight: 1.8,
            marginBottom: "3rem",
            textAlign: "justify",
          }}
        >
          Desenvolvo soluções digitais de ponta a ponta, transformando processos
          corporativos em fluxos inteligentes, automatizados e escaláveis. Do
          banco de dados à interface, priorizo performance, usabilidade e
          resultados para o negócio.
        </p>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <span className="ext-link" onClick={() => scrollTo("projects")}>
            Ver projetos →
          </span>
          <a
            className="ext-link"
            href="https://github.com/leonardobosque"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="ext-link"
            href="https://www.linkedin.com/in/leonardohenriquebosque/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {[
          [1, "5+", "anos de experiência"],
          [2, "5+", "projetos entregues"],
          [3, "10+", "tecnologias dominadas"],
        ].map(([id, n, l]) => (
          <div key={id}>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              {n}
            </p>
            <p style={{ fontSize: 12, color: "#444", letterSpacing: "0.05em" }}>
              {l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
