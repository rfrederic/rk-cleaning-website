import "../styles/testimonials.css";

export default function Testimonials() {
  const reviews = [
    { name: "Maria G.", text: "Amazing service. My home looks brand new!" },
    { name: "James L.", text: "Professional and reliable. Highly recommend." },
    { name: "Sofia R.", text: "Best cleaning service in Florida!" },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      {reviews.map((r, i) => (
        <div key={i} className="testimonial-card">
          <p>"{r.text}"</p>
          <strong>- {r.name}</strong>
        </div>
      ))}
    </section>
  );
}
