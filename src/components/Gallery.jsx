export default function Gallery() {
  return (
    <section style={{ padding: "3rem" }}>
      <h2 style={{ color: "var(--gold)" }}>Before & After</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "1rem",
        }}
      >
        <div style={{ background: "#333", height: "150px" }}></div>
        <div style={{ background: "#444", height: "150px" }}></div>
        <div style={{ background: "#555", height: "150px" }}></div>
      </div>
    </section>
  );
}
