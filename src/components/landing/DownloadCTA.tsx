import { Apple, Play, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "@/components/ui/Magnetic";

const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 md:py-48 relative overflow-hidden bg-[#F22666]">
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F22666] via-[#F22666] to-[#e91e5a]" />

      {/* Animated Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-white/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-500/30 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4 opacity-40 animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Column: Branding & Action */}
          <div className="text-center lg:text-left text-white max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-white overflow-hidden flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <img src="/logo.jpg" alt="Love Temple" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-none">Love Temple</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-hero text-white mb-8"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              Start your <br />
              <span className="text-white/80 italic font-serif-italic">private sanctuary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl mb-12 text-white/90 leading-relaxed font-medium px-4 lg:px-0"
            >
              Join over 2.1 million couples who have already secured their digital home. Just you and your person.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <Magnetic strength={0.4}>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#F22666] font-bold text-lg rounded-full shadow-2xl hover:bg-opacity-90 transition-all active:scale-[0.98] min-w-[260px] whitespace-nowrap"
                >
                  Download Love Temple
                </Link>
              </Magnetic>
              <div className="flex items-center gap-8 justify-center h-full">
                <Apple className="w-8 h-8 opacity-70 cursor-pointer hover:opacity-100 transition-all hover:scale-110" />
                <Play className="w-8 h-8 opacity-70 cursor-pointer hover:opacity-100 transition-all hover:scale-110" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center justify-center lg:justify-start gap-3"
            >
              <ShieldCheck className="w-5 h-5 text-white/50" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-white/50 uppercase">E2E Encrypted & Private</span>
            </motion.div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="relative order-first lg:order-last mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
                {/* Phone Frame */}
                <div className="relative bg-charcoal rounded-[3.2rem] md:rounded-[3.5rem] p-2.5 md:p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] md:border-[12px] border-charcoal/95 border-t-[10px] md:border-t-[12px] border-b-[10px] md:border-b-[12px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-charcoal rounded-b-2xl z-20" />
                  <img
                    src="/Invite/HeroImage.jpg"
                    alt="App Preview"
                    className="rounded-[2.4rem] md:rounded-[2.5rem] w-full h-full aspect-[9/19.5] object-cover"
                  />
                  <div className="absolute inset-x-3 bottom-12 p-5 z-20">
                    <div className="bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">LT</div>
                        <div className="flex-1">
                          <div className="h-2 w-24 bg-charcoal/10 rounded-full mb-2" />
                          <div className="h-2 w-16 bg-charcoal/5 rounded-full" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary"><Heart size={20} fill="currentColor" /></div>
                        <div className="flex-1 h-3 bg-primary/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 md:-top-12 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex"
                >
                  <Sparkles className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm font-bold text-charcoal">Daily Prompt</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/10 blur-[130px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
