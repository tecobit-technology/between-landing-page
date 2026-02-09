import { motion } from "framer-motion";
import { Book, Code, Rocket, Heart, Shield, Zap } from "lucide-react";

const Docs = () => {
    const features = [
        {
            title: "Getting Started",
            description: "Begin your journey with Love Temple. Our intuitive onboarding process makes it easy to create your private sanctuary in minutes.",
            image: "/Invite/1.jpg",
            icon: Rocket,
            steps: [
                "Download the Love Temple app",
                "Create your account securely",
                "Invite your special person",
                "Start building memories together"
            ]
        },
        {
            title: "Privacy First",
            description: "Your conversations are end-to-end encrypted. We've built Love Temple with privacy as the foundation, ensuring your intimate moments remain truly private.",
            image: "/Invite/2.jpg",
            icon: Shield,
            steps: [
                "End-to-end encryption by default",
                "No data mining or tracking",
                "Your data belongs to you",
                "Complete control over your content"
            ]
        },
        {
            title: "Share Moments",
            description: "Capture and share your favorite moments together. From photos to messages, create a timeline of your relationship that's just for the two of you.",
            image: "/Invite/3.jpg",
            icon: Heart,
            steps: [
                "Private photo sharing",
                "Shared calendar events",
                "Memory timeline",
                "Special date reminders"
            ]
        },
        {
            title: "Stay Connected",
            description: "Real-time messaging with your person. Whether you're together or apart, Love Temple keeps you connected in a distraction-free environment.",
            image: "/Invite/4.jpg",
            icon: Zap,
            steps: [
                "Instant messaging",
                "Voice & video calls",
                "Read receipts",
                "Typing indicators"
            ]
        }
    ];



    const screenshots = [
        {
            src: "/app-home-screen.png",
            title: "Home Screen",
            description: "See your connection status and days together"
        },
        {
            src: "/1.jpg",
            title: "Getting Started",
            description: "Easy onboarding to join your space"
        },
        {
            src: "/2.jpg",
            title: "Chat Messages",
            description: "Private messaging just for you two"
        },
        {
            src: "/3.jpg",
            title: "Photo Sharing",
            description: "Share moments and memories together"
        },
        {
            src: "/4.jpg",
            title: "Calendar & Events",
            description: "Remember important dates together"
        },
        {
            src: "/5.jpg",
            title: "Settings",
            description: "Customize your experience"
        }
    ];

    return (
        <section id="docs" className="relative py-16 lg:py-32 bg-gradient-to-b from-background to-accent/10 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />

            <div className="container-tight relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Book className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Documentation</span>
                    </div>
                    <h2 className="heading-section mb-6">
                        How Love Temple Works
                    </h2>
                    <p className="text-base md:text-lg text-secondary-foreground max-w-2xl mx-auto px-4">
                        A comprehensive guide to getting started and making the most of your private sanctuary.
                    </p>
                </motion.div>

                {/* Featured App Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-32"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* App Screenshot */}
                        <div className="relative group order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                            <div className="relative">
                                <img
                                    src="/app-home-screen.png"
                                    alt="Love Temple App - Your quiet space together"
                                    className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white/20"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 shadow-lg shadow-primary/30">
                                <Heart className="w-7 h-7 text-white fill-current" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                                Just You Two.<br />
                                <span className="text-primary">Together.</span>
                            </h3>
                            <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                                A simple, beautiful space for couples. See how long you've been together,
                                know when your partner is online, and get daily conversation ideas to stay close.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "See how many days you've been together",
                                    "Know when your partner is here with you",
                                    "Get daily questions to talk about",
                                    "Simple and easy to use"
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                        </div>
                                        <span className="text-secondary-foreground text-base">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Sections */}
                <div className="space-y-20 md:space-y-32 mb-16 md:mb-32">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="relative rounded-3xl shadow-2xl w-full aspect-[9/16] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border-2 border-primary/20 mb-6">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="space-y-3">
                                    {feature.steps.map((step, stepIndex) => (
                                        <motion.div
                                            key={stepIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 * stepIndex }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <span className="text-secondary-foreground">{step}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* App Screenshots Gallery - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            App Screenshots
                        </h3>
                        <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
                            Explore the beautiful, simple interface designed for couples
                        </p>
                    </div>

                    {/* Featured First Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-500" />
                            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-2xl">
                                <img
                                    src={screenshots[0].src}
                                    alt={screenshots[0].title}
                                    className="rounded-2xl shadow-lg w-full aspect-[9/16] object-cover border-4 border-white group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <div className="text-center mt-6">
                                <h4 className="text-2xl font-bold text-charcoal mb-2">{screenshots[0].title}</h4>
                                <p className="text-base text-secondary-foreground">{screenshots[0].description}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid of Remaining Screenshots */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {screenshots.slice(1).map((screenshot, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Screenshot Card */}
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={screenshot.src}
                                            alt={screenshot.title}
                                            className="w-full aspect-[9/16] object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-sm font-bold text-white mb-1">{screenshot.title}</h4>
                                        <p className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {screenshot.description}
                                        </p>
                                    </div>

                                    {/* Border Highlight */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
                                </div>

                                {/* Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center z-10">
                                    <span className="text-xs font-bold text-white">{index + 2}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature Highlights Below */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: "🔒", title: "Private & Secure", desc: "End-to-end encrypted" },
                            { icon: "💕", title: "Just You Two", desc: "No distractions" },
                            { icon: "📱", title: "Easy to Use", desc: "Simple interface" },
                            { icon: "✨", title: "Beautiful Design", desc: "Made with love" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 hover:from-accent/50 hover:to-accent/20 transition-all duration-300"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="text-base font-bold text-charcoal mb-1">{item.title}</h4>
                                <p className="text-sm text-secondary-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Docs;
