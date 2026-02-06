import { Heart, Gift, Sparkles } from "lucide-react";

const ValentineBanner = () => {
  return (
    <section className="py-12 md:py-16 relative z-10">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#CD848C] shadow-2xl shadow-[#CD848C]/20 p-8 md:p-16">

          {/* Decorative floating icons */}
          <Heart className="absolute top-10 right-10 text-white/20 w-12 h-12 -rotate-12" />
          <Heart className="absolute bottom-10 left-10 text-white/20 w-8 h-8 rotate-12" />
          <Sparkles className="absolute top-1/3 left-1/4 text-white/20 w-6 h-6 animate-pulse" />

          <div className="relative z-10 flex flex-col items-center md:items-start md:flex-row justify-between gap-10">

            <div className="text-center md:text-left max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
                <Gift className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-semibold tracking-wide uppercase">Valentine's Special</span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
                Love deserves a <br />
                <span className="italic">beautiful beginning</span>
              </h2>

              <p className="text-white/90 text-lg font-medium leading-relaxed max-w-md">
                Start your Between journey this Valentine's Day with 3 months of Premium—free.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 min-w-max">
              <button className="bg-white text-[#CD848C] rounded-full px-8 py-4 font-bold text-base transition-all duration-300 hover:bg-[#FAF8F6] hover:scale-105 shadow-lg">
                Claim Your Gift
              </button>
              <span className="text-white/70 text-xs font-medium tracking-wide uppercase">
                Offer ends February 14th
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentineBanner;
