import { Lock, Eye, Server, Fingerprint } from "lucide-react";

const PrivacyTrust = () => {
  const trustPoints = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encrypted",
      description: "Your messages are encrypted before they leave your device. Only you two can read them.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "No Third-Party Access",
      description: "We don't sell your data. We don't show ads. Your privacy is our promise.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Secure Infrastructure",
      description: "Industry-leading security standards protect your data at every layer.",
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Protection",
      description: "Optional fingerprint or face lock keeps your space truly private.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left side - messaging */}
            <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-blue-light/50 to-transparent">
              <span className="inline-block text-blue-mist text-sm font-semibold tracking-wide uppercase mb-4">
                Privacy & Trust
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Your space is sacred.
                <br />
                We keep it that way.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Between is built on a foundation of trust. We believe the most intimate parts of your relationship 
                deserve the highest level of protection—and that's exactly what we provide.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-mist/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-blue-mist" />
                </div>
                <div>
                  <div className="text-foreground font-semibold">SOC 2 Compliant</div>
                  <div className="text-muted-foreground text-sm">Enterprise-grade security</div>
                </div>
              </div>
            </div>
            
            {/* Right side - trust points */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid gap-6">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-light/60 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-rose-light group-hover:scale-105">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyTrust;
