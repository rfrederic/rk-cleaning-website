import before1 from "../assets/before1.JPG";
import before2 from "../assets/before2.JPG";
import before3 from "../assets/before3.JPG";
import "../styles/Variables.css";
import "../styles/Gallery.css";
import React from "react";

export default function Gallery() {
  return (
    <section style={{ padding: "3rem" }}>
      <h2 style={{ color: "var(--gold)" }}>Before & After</h2>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <img src={before1} alt="Before cleaning" />
        <img src={before2} alt="After cleaning" />
        <img src={before3} alt="After cleaning" />
      </div>
    </section>
  );
}
