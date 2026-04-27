import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Check,
  Globe,
  Monitor,
  Router,
  Phone,
  Shield,
} from "lucide-react";

import hero from "../assets/h1.mp4";
import demo from "../assets/demo.mp4";

const quickLinks = [
  { icon: Globe, label: "Fast Internet", color: "from-orange-500 to-red-500" },
  {
    icon: Monitor,
    label: "Satellite TV",
    color: "from-purple-500 to-indigo-500",
  },
  { icon: Router, label: "Router", color: "from-blue-500 to-cyan-500" },
  {
    icon: Phone,
    label: "Internet of Things",
    color: "from-green-500 to-emerald-500",
  },
  { icon: Shield, label: "Privacy", color: "from-amber-500 to-orange-500" },
  { icon: Wifi, label: "Support", color: "from-rose-500 to-pink-500" },
];

const Hero = () => (
  <>
    {/* Hero Banner */}
    <section className="relative overflow-hidden bg-[#0E0E0E] ">
      <div className="absolute inset-0 " />
      <div className="relative  flex flex-row container mx-auto px-4 py-24 md:py-36 border-t border-white">
        <div className="w-1/2 pt-2">
          <p className="text-white/70 text-lg  ">Reliable Internet Services</p>
          <h1 className=" inline-block text-4xl md:text-8xl font-normal text-white leading-tight mb-6 border-b-[3px] border-[#00f2ff] pb-2">
            EKASIT
          </h1>
          <p className="text-white/70 text-lg  mb-8">
            It’s time to upgrade to ultra-fast, unlimited fiber internet. Enjoy
            lightning speed, zero interruptions, and a connection you can rely
            on—every second of the day. Connect now and experience internet like
            never before.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#ffffffc2]  hover:bg-[#ffffffc2] border-0 text-black font-semibold px-10 shadow-lg shadow-orange-500/30 text-base"
          >
            <Link to="/plans">View Plans</Link>
          </Button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <video src={hero} autoPlay loop muted className="w-full " />
        </div>
      </div>
    </section>
  </>
);

export default Hero;
