import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Rooms from "@/app/components/Rooms";
import Amenities from "@/app/components/Amenities";
import Experiences from "@/app/components/Experiences";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import Booking from "@/app/components/Booking";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />

      <Gallery />
      <Experiences />
      <Testimonials />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}
