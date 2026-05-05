import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollText from "@/components/ScrollText";
import PlatformOverview from "@/components/PlatformOverview";
import Audience from "@/components/Audience";
import Features from "@/components/Features";
import MobileApp from "@/components/MobileApp";
import FeatureList from "@/components/FeatureList";
import Integrations from "@/components/Integrations";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollText />
        <PlatformOverview />
        <Audience />
        <Features />
        <MobileApp />
        <FeatureList />
        <Integrations />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
