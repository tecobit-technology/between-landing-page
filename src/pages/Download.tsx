import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";

const DownloadCTA = lazy(() => import("@/components/landing/DownloadCTA"));

const DownloadPage = () => {
    return (
        <MainLayout>
            <div className="pt-20">
                <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
                    <DownloadCTA />
                </Suspense>
            </div>
        </MainLayout>
    );
};

export default DownloadPage;
