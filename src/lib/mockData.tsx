import { MessageCircle, Camera, Sparkles, Heart, Calendar, Lock, Rocket, Shield, Zap, UserCheck, ShieldCheck, Users } from "lucide-react";

export const siteConfig = {
    name: "Love Temple",
    description: "Your private digital sanctuary. Close the door to the world and open a window to each other.",
    copyright: "2026 Love Temple Inc.",
    stats: {
        sharedMoments: "52M+",
        newSanctuaries: "2.1M+",
        privacyProtection: "100%",
        momentsToday: 12847,
        avgDaysConnected: 847
    }
};

export const features = [
    {
        iconName: "MessageCircle",
        title: "Private Couple Chat",
        description: "Encrypted, intimate, and distraction-free. Your messages belong to just the two of you.",
    },
    {
        iconName: "Camera",
        title: "Moments & Gallery",
        description: "A shared sanctuary for your photos. Relive your favorite memories anytime, anywhere.",
        stat: siteConfig.stats.momentsToday,
        statSuffix: "+",
        statLabel: "Moments Shared Today"
    },
    {
        iconName: "Sparkles",
        title: "Daily Prompts",
        description: "Thoughtful questions to spark deeper conversations and meaningful connections every day.",
    },
    {
        iconName: "Heart",
        title: "Thinking of You",
        description: "Send a gentle notification to let your partner know they're on your mind with a single tap.",
    },
    {
        iconName: "Calendar",
        title: "Journey Journal",
        description: "Celebrate milestones and track your growth as a couple with a beautiful shared timeline.",
        stat: siteConfig.stats.avgDaysConnected,
        statSuffix: "+",
        statLabel: "Average Days Connected"
    },
    {
        iconName: "Lock",
        title: "Privacy First",
        description: "End-to-end encryption and no data selling. Your relationship is private, as it should be.",
    },
    {
        iconName: "Zap",
        title: "Real-time Presence",
        description: "Know when your partner is thinking of you or typing, creating a sense of being together.",
    },
    {
        iconName: "Rocket",
        title: "Seamless Sync",
        description: "Instantly sync photos and messages across all your devices without any delays.",
    },
    {
        iconName: "Shield",
        title: "Biometric Lock",
        description: "Add an extra layer of security with FaceID or Fingerprint to keep your sanctuary truly private.",
    }
];

export const testimonials = [
    {
        quote: "Works perfectly on my phone and laptop. I love how responsive and fast it feels.",
        subtext: "Even on slow internet, the app performs well. The mobile experience is especially impressive.",
        author: "David P.",
        role: "Student",
        initials: "DP"
    },
    {
        quote: "It feels like we have our own little world again. Social media was making us distant, but Love Temple brought the intimacy back.",
        subtext: "We use the shared gallery every day to document our small moments.",
        author: "Sarah & Tom",
        role: "Together 3 years",
        initials: "S&T"
    },
    {
        quote: "The daily prompts spark conversations we wouldn't have otherwise. It's become our favorite nightly ritual.",
        subtext: "Highly recommend for long-distance couples looking to stay connected.",
        author: "Emily R.",
        role: "Artist",
        initials: "ER"
    },
    {
        quote: "The security features give us peace of mind. Knowing our intimate photos are encrypted is everything.",
        subtext: "We tried other apps, but Love Temple's focus on privacy is unmatched.",
        author: "Marcus & J",
        role: "Together 1 year",
        initials: "M&J"
    },
    {
        quote: "It's the only app that doesn't feel like it's trying to sell me something. Purely for our love.",
        subtext: "The aesthetic is so calming. It really does feel like a sanctuary.",
        author: "Alisha K.",
        role: "Designer",
        initials: "AK"
    }
];

export const faqs = [
    {
        q: "Is Love Temple really free?",
        a: "Yes, the core features of Love Temple are completely free. We offer a Premium subscription for cloud backup, extra themes, and unlimited high-res storage."
    },
    {
        q: "How secure is my data?",
        a: "Love Temple uses industry-standard encryption for all data transport and storage. Your private messages and photos are secure and encrypted so only you and your partner can see them."
    },
    {
        q: "Can I use it on multiple devices?",
        a: "Love Temple is currently optimized for primary mobile devices to maintain a secure one-to-one connection. Tablet and desktop web versions are available for shared access."
    },
    {
        q: "What happens if we disconnect?",
        a: "If you decide to disconnect your account, all shared data is archived. You can request a data export or choose to permanently delete your history at any time."
    },
    {
        q: "Is there a limit to how many photos we can share?",
        a: "Free users have a generous 5GB limit for high-res photos. Premium users enjoy unlimited storage with original quality preservation."
    },
    {
        q: "Does Love Temple have a web version?",
        a: "Yes! While we focus on mobile first, you can access your sanctuary from any browser at app.lovetemple.com."
    }
];

export const docsSteps = [
    {
        title: "Getting Started",
        description: "Begin your journey with Love Temple. Our intuitive onboarding process makes it easy to create your private sanctuary in minutes.",
        image: "/Invite/1.jpg",
        iconName: "Rocket",
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
        iconName: "Shield",
        steps: [
            "Enable E2E encryption",
            "Set up a privacy passcode",
            "Manage shared data access",
            "Review security audits"
        ]
    },
    {
        title: "Stay Connected",
        description: "Real-time messaging with your person. Whether you're together or apart, Love Temple keeps you connected in a distraction-free environment.",
        image: "/Invite/4.jpg",
        iconName: "Zap",
        steps: [
            "Enable push notifications",
            "Use custom heart reactions",
            "Share live location safely",
            "Schedule 'Us-Time' alerts"
        ]
    }
];

export const footerNavigation = {
    product: [
        { name: "Features", href: "/features" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Documentation", href: "/docs" },
        { name: "Premium", href: "/signup" }
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
    ],
    privacy: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/privacy" },
        { name: "Cookie Policy", href: "#" },
        { name: "Security", href: "#" }
    ]
};

export const journeyItems = [
    {
        year: "2024",
        title: "The Vision",
        description: "Founded with the belief that couples deserve a digital sanctuary free from the noise of social media."
    },
    {
        year: "2025",
        title: "Initial Launch",
        description: "Alpha release to 10,000 beta testers who helped shape the core intimate features we have today."
    },
    {
        year: "2026",
        title: "Expansion",
        description: "Reaching 2.1 million sanctuary spaces and introducing zero-knowledge encryption for ultimate privacy."
    }
];

export const teamMembers = [
    {
        name: "Elena Rossi",
        role: "Founder & Creative Lead",
        bio: "Visionary behind the 'Soft Romantic' design philosophy."
    },
    {
        name: "Marcus Chen",
        role: "Chief Privacy Officer",
        bio: "Architect of our zero-knowledge encryption framework."
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Community",
        bio: "Dedicated to fostering intentional connections globally."
    }
];

