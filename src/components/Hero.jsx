import BookingButton from "./BookingButton";
import "../styles/hero.css";
import heroImage from "../assets/afro-woman-cleaning-window-with-rag-home.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Professional cleaning service" />
      </div>

      <div className="hero-content">
        <h1>Professional Cleaning Services in Florida</h1>
        <p>Reliable residential & commercial cleaning you can trust.</p>

        <div className="hero-buttons">
          <BookingButton />
          <a href="/contact" className="outline-btn">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
