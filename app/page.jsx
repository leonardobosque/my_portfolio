"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["about", "stack", "projects", "contact"];
const DIVIDER = <div style={{ height: "1px", background: "#141414" }} />;

export default function Portfolio() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#e8e8e8",
        fontFamily: "'JetBrains Mono', monospace",
        minHeight: "100vh",
      }}
    >
      <Navbar active={active} />

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 2rem" }}>
        <About />
        {DIVIDER}
        <Stack />
        {DIVIDER}
        <Projects />
        {DIVIDER}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
