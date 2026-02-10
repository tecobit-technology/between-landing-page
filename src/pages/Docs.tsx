import { Suspense, lazy } from "react";
import MainLayout from "@/components/layout/MainLayout";

const Docs = lazy(() => import("@/components/landing/Docs"));

const DocsPage = () => {
    return (
        <MainLayout>
            <div className="py-12">
                <Suspense fallback={<div className="h-screen" />}>
                    <Docs />
                </Suspense>
            </div>
        </MainLayout>
    );
};

export default DocsPage;
