import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeCanvas from "@/components/landing/ThreeCanvas";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LandingSkeleton from "@/components/landing/LandingSkeleton";
import ValueStatement from "@/components/landing/ValueStatement";
import FeatureGrid from "@/components/landing/FeatureGrid";
import DataInsights2026 from "@/components/landing/DataInsights2026";
import GettingStarted from "@/components/landing/GettingStarted";
import PrivacyTrust from "@/components/landing/PrivacyTrust";
import FAQ from "@/components/landing/FAQ";
import Testimonials from "@/components/landing/Testimonials";
import ValentineBanner from "@/components/landing/ValentineBanner";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import CustomCursor from "@/components/landing/CustomCursor";
import BackToTop from "@/components/landing/BackToTop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of assets and 3D scenes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CustomCursor />
            <BackToTop />
            <ThreeCanvas />
            <Header />
            <main className="relative z-10">
              <Hero />
              <ValueStatement />
              <div>
                <DataInsights2026 />
              </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
