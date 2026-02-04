import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueStatement from "@/components/landing/ValueStatement";
import FeatureGrid from "@/components/landing/FeatureGrid";
import GettingStarted from "@/components/landing/GettingStarted";
import PrivacyTrust from "@/components/landing/PrivacyTrust";
import ValentineBanner from "@/components/landing/ValentineBanner";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueStatement />
        <FeatureGrid />
        <GettingStarted />
        <PrivacyTrust />
        <ValentineBanner />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
