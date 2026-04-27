import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Planstab from "@/components/Planstab";

const Plans = () => (
  <div>
    <section className="bg-[#07E0E9] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]  backdrop-blur-[16px]  py-16 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-black uppercase mb-2">Get In Touch</p>
        <h1 className="text-7xl mb-4 md:7xl lg:8xl font-display font-bold  text-black font-playfair ">
          Flexible Plans
        </h1>
        <p className="text-black/70 max-w-4xl m-auto">
          Explore flexible, high-speed internet plans designed for every need,
          with transparent pricing and reliable performance.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <Planstab />
    </section>
  </div>
);

export default Plans;
