import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import { Heart, Shield, Star, Award, MapPin } from "lucide-react";
import { siteConfig, journeyItems, teamMembers } from "@/lib/mockData";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 md:py-48 relative overflow-hidden bg-background">
            <div className="container-tight relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center gap-2 mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                            OUR JOURNEY
                        </span>
                    </motion.div>
                    <h1 className="heading-hero text-charcoal mb-8 px-4">
                        Built for <span className="font-serif-italic text-primary italic lowercase">connection</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed px-6 opacity-80">
                        At {siteConfig.name}, we believe that in an increasingly noisy world, the most valuable thing we have is our intimate connection with our significant other. We didn't build another social network—we built a private sanctuary.
                    </p>
                </div>

                {/* Core Philosophy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden group"
                    >
                        <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                            <Heart className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center mb-10 shadow-glow">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Our Mission</h2>
                            <p className="text-secondary-foreground leading-relaxed text-lg lg:text-xl opacity-75">
                                To provide couples with a dedicated space that encourages intentionality, fosters deeper communication, and preserves the sanctity of their private memories without the distractions of the modern web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden group"
                    >
                        <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                            <Shield className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center mb-10 shadow-glow">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Our Philosophy</h2>
                            <p className="text-secondary-foreground leading-relaxed text-lg lg:text-xl opacity-75">
                                Privacy isn't a feature; it's a fundamental right. Your relationship data is yours alone. We use zero-knowledge encryption because we believe your sanctuary should be yours to keep, forever.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <div className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">The Path to Presence</h2>
                        <div className="w-16 h-1.5 bg-primary/20 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative">
                        <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-primary/10 -z-10" />
                        {journeyItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="text-center px-6 relative"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary font-bold mb-8 border-4 border-background shadow-glow relative z-10 group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>
                                <div className="font-serif text-3xl font-bold text-primary mb-3 italic">{item.year}</div>
                                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">{item.title}</h3>
                                <p className="text-secondary-foreground leading-relaxed text-lg opacity-70">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Passionate Minds</h2>
                        <p className="text-secondary-foreground text-lg opacity-60">The small, dedicated group behind your sanctuary.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-8 md:p-10 rounded-[3rem] text-center group hover:bg-white transition-all duration-500 hover:shadow-soft"
                            >
                                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-8 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-700 overflow-hidden shadow-glow p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                                        <img src={`/Invite/${idx + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2">{member.name}</h3>
                                <div className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-6">{member.role}</div>
                                <p className="text-secondary-foreground leading-relaxed text-base opacity-75">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="p-10 md:p-24 rounded-[3.5rem] md:rounded-[5rem] bg-charcoal text-white relative overflow-hidden shadow-2xl group"
                >
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex -space-x-3 md:-space-x-5 mb-14">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-charcoal bg-accent overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-transform duration-500 hover:z-20">
                                    <img src={`/Invite/${i}.jpg`} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">Ready to create your sanctuary?</h2>
                        <p className="text-white/60 text-lg md:text-2xl max-w-2xl mb-14 leading-relaxed font-serif-italic">
                            Join 2.1 million+ couples who have simplified their connection. Start your private journey together today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                            <Magnetic strength={0.4}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => window.location.href = '#download'}
                                    className="btn-primary w-full shadow-glow py-6 text-xl"
                                >
                                    Download Love Temple
                                </motion.button>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
