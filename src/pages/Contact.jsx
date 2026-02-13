import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_5x8j9cr",
        "template_cthivqi",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "YdeHq_KLUJPEkRm3I"
      );

      console.log("EmailJS success:", result);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert(
        `Something went wrong: ${err?.text || err?.message || "Unknown error"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: "3rem" }}>
      <h1 style={{ color: "var(--gold)" }}>Contact Us</h1>

      <form onSubmit={sendEmail}>
        <input
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          autoComplete="off"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          required
        />
        <button className="booking-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
