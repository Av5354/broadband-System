import { Link } from "react-router-dom";
import {
  Globe,
  Wifi,
  Monitor,
  Router,
  Shield,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Internet Service",
    desc: "High-speed broadband internet with unlimited data and consistent connectivity for homes and businesses.",
  },
  {
    icon: Monitor,
    title: "Satellite TV",
    desc: "Crystal clear satellite television with hundreds of channels and premium content packages.",
  },
  {
    icon: Wifi,
    title: "Entertainment",
    desc: "Stream your favorite movies, shows and music with our high-speed entertainment packages.",
  },
  {
    icon: Router,
    title: "Voice Calling",
    desc: "Crystal clear voice calling with unlimited minutes and international coverage options.",
  },
  {
    icon: Shield,
    title: "WiFi Setup",
    desc: "Professional WiFi installation and setup with full coverage for your home or office space.",
  },
  {
    icon: Headphones,
    title: "IT Help",
    desc: "24/7 expert technical support to resolve any connectivity or service issues quickly.",
  },
];

const Services = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What We Offer
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        We offer a wide range of internet and connectivity services to meet your
        needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl"
          >
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-[#0A0D15] flex items-center justify-center text-white mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              {/* <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
