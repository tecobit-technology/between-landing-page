import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingSkeleton from "@/components/landing/LandingSkeleton";

// Lazy load components for better performance
const ThreeCanvas = lazy(() => import("@/components/landing/ThreeCanvas"));
const Header = lazy(() => import("@/components/landing/Header"));
const Hero = lazy(() => import("@/components/landing/Hero"));
const ValueStatement = lazy(() => import("@/components/landing/ValueStatement"));
const FeatureGrid = lazy(() => import("@/components/landing/FeatureGrid"));
const DataInsights2026 = lazy(() => import("@/components/landing/DataInsights2026"));
const GettingStarted = lazy(() => import("@/components/landing/GettingStarted"));
const PrivacyTrust = lazy(() => import("@/components/landing/PrivacyTrust"));
const Docs = lazy(() => import("@/components/landing/Docs"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const ValentineBanner = lazy(() => import("@/components/landing/ValentineBanner"));
const DownloadCTA = lazy(() => import("@/components/landing/DownloadCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const CustomCursor = lazy(() => import("@/components/landing/CustomCursor"));
const MomentsPreview = lazy(() => import("@/components/landing/MomentsPreview"));
const BackToTop = lazy(() => import("@/components/landing/BackToTop"));

// Loading fallback component
const ComponentLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

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
          <>
            {/* Fixed Elements - Placed outside the transform container to ensure position:fixed works relative to viewport */}
            <div className="fixed inset-0 pointer-events-none z-50">
              <div className="pointer-events-auto">
                <Suspense fallback={null}>
                  <Header />
                  <BackToTop />
                  <CustomCursor />
                </Suspense>
              </div>
            </div>

            {/* Background Canvas */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <Suspense fallback={null}>
                <ThreeCanvas />
              </Suspense>
            </div>

            {/* Main Content */}
            <motion.main
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full overflow-x-hidden"
            >
              <Suspense fallback={<ComponentLoader />}>
                <Hero />
              </Suspense>

              <Suspense fallback={<ComponentLoader />}>
                <ValueStatement />
              </Suspense>

              <Suspense fallback={<ComponentLoader />}>
                <div>
                  <DataInsights2026 />
                </div>
              </Suspense>

              <div id="features">
                <Suspense fallback={<ComponentLoader />}>
                  <MomentsPreview />
                </Suspense>
                <Suspense fallback={<ComponentLoader />}>
                  <FeatureGrid />
                </Suspense>
              </div>

              <div id="how-it-works">
                <Suspense fallback={<ComponentLoader />}>
                  <GettingStarted />
                </Suspense>
              </div>

              <div id="privacy">
                <Suspense fallback={<ComponentLoader />}>
                  <PrivacyTrust />
                </Suspense>
              </div>

              <div id="docs">
                <Suspense fallback={<ComponentLoader />}>
                  <Docs />
                </Suspense>
              </div>

              <Suspense fallback={<ComponentLoader />}>
                <FAQ />
              </Suspense>

              <Suspense fallback={<ComponentLoader />}>
                <Testimonials />
              </Suspense>

              <Suspense fallback={<ComponentLoader />}>
                <ValentineBanner />
              </Suspense>

              <div id="download">
                <Suspense fallback={<ComponentLoader />}>
                  <DownloadCTA />
                </Suspense>
              </div>

              <Suspense fallback={<ComponentLoader />}>
                <Footer />
              </Suspense>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
