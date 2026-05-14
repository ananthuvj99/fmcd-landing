import Navbar from "@/components/Navbar";
import StickyNotesIntro from "@/components/StickyNotesIntro";
import Hero from "@/components/Hero";
import ScrollText from "@/components/ScrollText";
import PlatformOverview from "@/components/PlatformOverview";
import Audience from "@/components/Audience";
import Features from "@/components/Features";
import MobileApp from "@/components/MobileApp";
import FeatureList from "@/components/FeatureList";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <ScrollToTopOnLoad />
      <Navbar />
      <main>
        <StickyNotesIntro />
        <Hero />
        <ScrollText />
        <PlatformOverview />
        <Audience />
        <Features />
        <MobileApp />
        <FeatureList />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
