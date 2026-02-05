import BookingButton from "../components/BookingButton";

export default function Services() {
  const services = [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Deep Cleaning",
    "Airbnb / Short-Term Rental Cleaning",
    "Post-Construction Cleaning",
  ];

  return (
    <section style={{ padding: "3rem" }}>
      <h1 style={{ color: "var(--gold)" }}>Our Services</h1>

      {services.map((service) => (
        <div
          key={service}
          style={{ margin: "2rem 0", borderBottom: "1px solid var(--gold)" }}
        >
          <h2>{service}</h2>
          <p>
            Professional, detailed, and reliable service tailored to your needs.
          </p>
          <BookingButton />
        </div>
      ))}
    </section>
  );
}
