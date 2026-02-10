import { motion } from "framer-motion";
import { Heart, Shield, Star, Award, MapPin } from "lucide-react";
import { siteConfig, journeyItems, teamMembers } from "@/lib/mockData";

const AboutSection = () => {
    return (
        <section className="py-24 md:py-40 relative overflow-hidden">
            <div className="container-tight relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center gap-2 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                            OUR STORY
                        </span>
                    </motion.div>
                    <h1 className="heading-hero text-charcoal mb-8">
                        Built for <span className="font-serif-italic text-primary italic lowercase">connection</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        At {siteConfig.name}, we believe that in an increasingly noisy world, the most valuable thing we have is our intimate connection with our significant other. We didn't build another social network—we built a private sanctuary.
                    </p>
                </div>

                {/* Core Philosophy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-[3rem] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Heart className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-accent text-primary flex items-center justify-center mb-8 shadow-sm">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Our Mission</h2>
                            <p className="text-secondary-foreground leading-relaxed text-lg">
                                To provide couples with a dedicated space that encourages intentionality, fosters deeper communication, and preserves the sanctity of their private memories without the distractions of the modern web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-[3rem] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Shield className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-accent text-primary flex items-center justify-center mb-8 shadow-sm">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Our Philosophy</h2>
                            <p className="text-secondary-foreground leading-relaxed text-lg">
                                Privacy isn't a feature; it's a fundamental right. Your relationship data is yours alone. We use zero-knowledge encryption because we believe your sanctuary should be yours to keep, forever.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">Our Journey</h2>
                        <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-primary/5 -z-10" />
                        {journeyItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="text-center px-4"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold mb-6 border-4 border-background shadow-md">
                                    {idx + 1}
                                </div>
                                <div className="font-serif text-2xl font-bold text-primary mb-2">{item.year}</div>
                                <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                                <p className="text-secondary-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">The Team</h2>
                        <p className="text-secondary-foreground">A small, passionate group dedicated to your connection.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-[2.5rem] text-center group hover:bg-white/40 transition-colors"
                            >
                                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-inner">
                                    <img src={`/Invite/${idx + 1}.jpg`} alt="" className="w-full h-full object-cover opacity-80" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">{member.name}</h3>
                                <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</div>
                                <p className="text-secondary-foreground text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-12 md:p-20 rounded-[4rem] bg-charcoal text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex -space-x-4 mb-10">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-charcoal bg-accent overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                    <img src={`/Invite/${i}.jpg`} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to create your sanctuary?</h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12">
                            Join 2.1 million+ couples who have simplified their connection. Start your private journey together today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary w-full shadow-glow"
                            >
                                Get Started Free
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
