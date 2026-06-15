"use client";

import { useState } from "react";

const NAV_LINKS = ["about", "stack", "projects", "contact"];

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#0a0a0a",
        borderBottom: "1px solid #141414",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#3b82f6",
          }}
        >
          DEV
        </span>

        <div className="desktop-nav" style={{ display: "flex", gap: "2.5rem" }}>
          {NAV_LINKS.map((id) => (
            <span
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {id}
            </span>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#e8e8e8",
            cursor: "pointer",
            fontSize: 20,
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderTop: "1px solid #141414",
          }}
        >
          {NAV_LINKS.map((id) => (
            <span
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {id}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
