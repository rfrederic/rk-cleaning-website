export default function Contact() {
  return (
    <section style={{ padding: "3rem" }}>
      <h1 style={{ color: "var(--gold)" }}>Contact Us</h1>

      <form style={{ maxWidth: "500px" }}>
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Message" rows="5"></textarea>
        <button className="booking-btn">Send Message</button>
      </form>
    </section>
  );
}
