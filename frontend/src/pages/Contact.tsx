import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div>
      <section className="bg-[#07E0E9] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]  backdrop-blur-[16px]  py-16 ">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black uppercase mb-2">Get In Touch</p>
          <h1 className="text-7xl mb-4 md:7xl lg:8xl font-display font-bold  text-black font-playfair ">
            Let’s Build Connection
          </h1>
          <p className="text-black/70 max-w-4xl m-auto">
            Reach out for fast, reliable support and seamless connectivity
            solutions tailored to your needs. Our team is ready to assist you
            anytime.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default Contact;
