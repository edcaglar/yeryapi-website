import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import About from "@/components/About";
import QuickContact from "@/components/QuickContact";
import Services from "@/components/Services";
import LogosStrip from "@/components/LogosStrip";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Slider />
        <About />
        <QuickContact />
        <Services />
        <LogosStrip />
      </main>
      <Footer />
    </div>
  );
}
