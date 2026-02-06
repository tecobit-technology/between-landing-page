import ThreeCanvas from "@/components/landing/ThreeCanvas";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueStatement from "@/components/landing/ValueStatement";
import FeatureGrid from "@/components/landing/FeatureGrid";
import GettingStarted from "@/components/landing/GettingStarted";
import PrivacyTrust from "@/components/landing/PrivacyTrust";
import FAQ from "@/components/landing/FAQ";
import Testimonials from "@/components/landing/Testimonials";
import ValentineBanner from "@/components/landing/ValentineBanner";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ThreeCanvas />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ValueStatement />
        <div id="features">
          <FeatureGrid />
        </div>
        <div id="how-it-works">
          <GettingStarted />
        </div>
        <div id="privacy">
          <PrivacyTrust />
        </div>
        <FAQ />
        <Testimonials />
        <ValentineBanner />
        <div id="download">
          <DownloadCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
