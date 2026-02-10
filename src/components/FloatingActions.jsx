import "../styles/floating.css";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href="tel:+14633260025" className="call-btn">
        📞
      </a>
      <a
        href="https://wa.me/14633260025"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
