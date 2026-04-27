import { Target, Eye, ThumbsUp, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import broadbandImg from "@/assets/broadband.jpg";
import Services from "@/components/Services";
import Features from "@/components/Features";

const About = () => (
  <div>
    <section className="bg-[#07E0E9] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]  backdrop-blur-[16px]  py-16 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-black uppercase mb-2">Our Story</p>
        <h1 className="text-7xl mb-4 md:7xl lg:8xl font-display font-bold  text-black font-playfair ">
          Network Excellence
        </h1>
        <p className="text-black/70 max-w-4xl m-auto">
          Delivering ultra-fast, reliable internet with seamless connectivity,
          empowering homes and businesses through advanced technology, unmatched
          performance, and trusted service excellence.
        </p>
      </div>
    </section>

    <section className="container  px-4 pt-16 ">
      <h2 className="text-2xl font-bold mb-4 text-white ">Who We Are</h2>
      <p className="text-white leading-relaxed">
        EKASIT TECH is a leading internet service provider committed to bridging
        the digital divide. We deliver fast, affordable, and dependable internet
        to homes, businesses, and communities. With a passion for technology and
        a customer-first approach, we have grown into a trusted name in
        connectivity.
      </p>
    </section>
    <section className="bg-[#0A0D15] py-16">
      <div className="container  px-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <Card className="shadow-[var(--card-shadow)] bg-[#0f172a4d] border border-[#1e293b] rounded-2xl p-5  text-[#22d3ee]  hover:scale-105 hover:border-[#00d8ff59] hover:-translate-y-[5px] hover:bg-[rgba(15, 23, 42, 0.5)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 cursor-pointer">
          <CardContent className="p-6 flex gap-4 items-start ">
            <div className="h-12 w-12 rounded-xl bg-[#22d3ee1a]  flex items-center justify-center text-[#00F2FF] flex-shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To provide fast, reliable, and affordable internet access to
                every household and business, empowering people through
                connectivity.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-[var(--card-shadow)] bg-[#0f172a4d] border border-[#1e293b] rounded-2xl p-5 text-[#22d3ee]  hover:scale-105 hover:border-[#00d8ff59] hover:-translate-y-[5px] hover:bg-[rgba(15, 23, 42, 0.5)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 cursor-pointer">
          <CardContent className="p-6 flex gap-4 items-start">
            <div className="h-12 w-12 rounded-xl bg-[#22d3ee1a]   flex items-center justify-center text-[#00F2FF]  flex-shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Vision</h3>
              <p className="text-muted-foreground text-sm">
                To become the most trusted and innovative ISP, connecting
                millions with seamless, high-speed internet experiences.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <Services />
    <Features />

    {/* <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-10 text-white">
        Why Choose EKASIT TECH
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            icon: ThumbsUp,
            title: "Customer First",
            desc: "We put our customers at the center of everything.",
          },
          {
            icon: Award,
            title: "Quality Network",
            desc: "Enterprise-grade infrastructure for reliable performance.",
          },
          {
            icon: Users,
            title: "Local Support",
            desc: "Dedicated support team that understands your needs.",
          },
          {
            icon: Clock,
            title: "Quick Setup",
            desc: "Get connected within 24 hours of placing your order.",
          },
        ].map((f) => (
          <div key={f.title} className="flex items-start gap-3 p-4">
            <f.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
  </div>
);

export default About;
