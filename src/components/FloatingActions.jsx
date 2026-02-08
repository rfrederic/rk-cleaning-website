import "../styles/floating.css";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href="tel:+1XXXXXXXXXX" className="call-btn">
        📞
      </a>
      <a
        href="https://wa.me/1XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        💬
      </a>
    </div>
  );
}
