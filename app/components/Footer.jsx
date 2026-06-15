export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #141414",
        padding: "1.5rem 2rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>
        © {new Date().getFullYear()} — Feito com Next.js · Hospedado no Vercel
      </p>
    </footer>
  );
}
