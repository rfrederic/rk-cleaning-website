import before1 from "../assets/before1.jpg";
import before2 from "../assets/before2.jpg";
import before3 from "../assets/before3.jpg";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpeg";

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
        <img src={before2} alt="After cleaning" />
        <img src={before3} alt="After cleaning" />
        <img src={photo1} alt="After cleaning" />
        <img src={photo2} alt="After cleaning" />
        <img src={before1} alt="Before cleaning" />
      </div>
    </section>
  );
}
