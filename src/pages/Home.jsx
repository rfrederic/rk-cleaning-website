import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cleaning Services in Florida | R&K Cleaning Services LLC</title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services in Daytona Beach, Florida."
        />
      </Helmet>

      <Hero />
      <ServicesPreview />
      <Gallery />
      <Testimonials />
    </>
  );
}
