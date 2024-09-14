import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Product from "@/components/Product";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Product />
      <Pricing />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
