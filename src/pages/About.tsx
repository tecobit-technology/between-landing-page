import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";

const AboutSection = lazy(() => import("@/components/landing/AboutSection"));

const AboutPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<div className="h-screen" />}>
                <AboutSection />
            </Suspense>
        </MainLayout>
    );
};

export default AboutPage;
