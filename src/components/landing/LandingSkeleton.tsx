import { Skeleton } from "@/components/ui/skeleton";

const LandingSkeleton = () => {
    return (
        <div className="min-h-screen bg-background p-6 md:p-12 space-y-20 dark:bg-[#09090b]">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-10 h-10 rounded-xl bg-primary/10" />
                    <Skeleton className="w-24 h-6 bg-primary/10" />
                </div>
                <div className="hidden md:flex gap-8">
                    <Skeleton className="w-20 h-4 bg-muted" />
                    <Skeleton className="w-20 h-4 bg-muted" />
                    <Skeleton className="w-20 h-4 bg-muted" />
                </div>
                <Skeleton className="w-32 h-10 rounded-full bg-primary/20" />
            </div>

            {/* Hero Skeleton */}
            <div className="flex flex-col items-center text-center space-y-8 pt-12">
                <Skeleton className="w-40 h-4 bg-muted mx-auto" />
                <div className="space-y-4">
                    <Skeleton className="w-[80%] h-12 md:h-20 bg-muted mx-auto" />
                    <Skeleton className="w-[60%] h-12 md:h-20 bg-muted mx-auto" />
                </div>
                <Skeleton className="w-[70%] h-6 bg-muted mx-auto" />
                <div className="flex flex-col sm:flex-row gap-4">
                    <Skeleton className="w-48 h-12 rounded-full bg-primary/20" />
                    <Skeleton className="w-40 h-12 rounded-full bg-muted" />
                </div>
                {/* Phone Mockup Skeleton */}
                <Skeleton className="w-[280px] md:w-[320px] h-[550px] rounded-[3rem] bg-muted mt-12 mx-auto" />
            </div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center p-8 rounded-[2.5rem] border border-rose-100/50 space-y-4">
                        <Skeleton className="w-16 h-16 rounded-2xl bg-accent" />
                        <Skeleton className="w-32 h-8 bg-muted" />
                        <Skeleton className="w-24 h-4 bg-muted" />
                    </div>
                ))}
            </div>

            {/* Content Block */}
            <div className="space-y-6">
                <Skeleton className="w-1/4 h-4 bg-muted" />
                <Skeleton className="w-full h-8 bg-muted" />
                <Skeleton className="w-[90%] h-8 bg-muted" />
            </div>
        </div>
    );
};

export default LandingSkeleton;
