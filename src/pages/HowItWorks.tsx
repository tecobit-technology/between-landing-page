import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";

const GettingStarted = lazy(() => import("@/components/landing/GettingStarted"));

const HowItWorksPage = () => {
    return (
        <MainLayout>
            <div className="py-12">
                <Suspense fallback={<div className="h-screen" />}>
                    <GettingStarted />
                </Suspense>
            </div>
        </MainLayout>
    );
};

export default HowItWorksPage;
