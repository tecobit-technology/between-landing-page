import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";

const PrivacyTrust = lazy(() => import("@/components/landing/PrivacyTrust"));

const PrivacyPage = () => {
    return (
        <MainLayout>
            <div className="py-12">
                <Suspense fallback={<div className="h-screen" />}>
                    <PrivacyTrust />
                </Suspense>
            </div>
        </MainLayout>
    );
};

export default PrivacyPage;
