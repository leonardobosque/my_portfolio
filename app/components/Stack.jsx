import { STACK } from "../data/stack";

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "6rem 0" }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#3b82f6",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        // stack técnico
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
        }}
      >
        {STACK.map(({ category, items }) => (
          <div key={category}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "#3b82f6",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              {category}
            </p>
            {items.map((item) => (
              <div key={item} className="stack-item">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
