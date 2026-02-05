import BookingButton from "./BookingButton";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Professional Cleaning Services in Miami</h1>
      <p>Reliable residential & commercial cleaning you can trust.</p>
      <div className="hero-buttons">
        <BookingButton />
        <a href="/contact" className="outline-btn">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
