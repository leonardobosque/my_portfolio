"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Preencha todos os campos.");
      setStatus("error");
      return;
    }
    if (!isValidEmail(form.email)) {
      setErrorMsg("Informe um e-mail válido.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro desconhecido");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Algo deu errado. Tente novamente.");
    }
  };

  return (
    <section id="contact" style={{ padding: "6rem 0 8rem" }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#3b82f6",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        // contato
      </p>

      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        Entre em contato.
      </h2>

      <p style={{ fontSize: 13, color: "#555", marginBottom: "3rem" }}>
        Envie uma mensagem e vamos conversar.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: 480,
        }}
      >
        <input
          className="contact-input"
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="contact-input"
          placeholder="Sua mensagem"
          rows={4}
          style={{ resize: "none" }}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <div>
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={status === "sending" || status === "sent"}
          >
            {status === "sending"
              ? "Enviando..."
              : status === "sent"
                ? "Mensagem enviada ✓"
                : "Enviar mensagem"}
          </button>
        </div>

        {status === "error" && (
          <p style={{ fontSize: 12, color: "#ef4444", marginTop: -8 }}>
            {errorMsg}
          </p>
        )}
        {status === "sent" && (
          <p style={{ fontSize: 12, color: "#22c55e", marginTop: -8 }}>
            Obrigado! Responderei em breve.
          </p>
        )}
      </div>

      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <a className="ext-link" href="mailto:leohb97@hotmail.com">
          leohb97@hotmail.com ↗
        </a>
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
    </section>
  );
}
