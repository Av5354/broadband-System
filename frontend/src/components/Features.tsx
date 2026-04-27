import { Zap, Shield, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    desc: "Blazing fast internet speeds for seamless browsing and streaming.",
  },
  {
    icon: Globe,
    title: "Reliable Network",
    desc: "99.9% uptime guarantee with redundant network infrastructure.",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    desc: "Enterprise-grade security to protect your data and privacy.",
  },
  {
    icon: Headphones,
    title: "24/7 Live Support",
    desc: "Expert support team available round the clock for assistance.",
  },
];

const Features = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4 text-center">
      {/* <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-[#0A0D15] flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <f.icon className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-base">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
