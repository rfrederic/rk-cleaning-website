import emailjs from "emailjs-com";
import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_5x8j9cr", "template_cthivqi", form, "YdeHq_KLUJPEkRm3I")
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Something went wrong.");
        console.error(err);
      });
  };

  return (
    <section style={{ padding: "3rem" }}>
      <h1 style={{ color: "var(--gold)" }}>Contact Us</h1>

      <form onSubmit={sendEmail}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
        />
        <iframe
          title="Google Reviews"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
        <button className="booking-btn">Send Message</button>
      </form>
    </section>
  );
}
