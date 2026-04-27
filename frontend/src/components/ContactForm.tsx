import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
        });

        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Card className="border-0 shadow-[var(--card-shadow)]">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-xl"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-xl"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="rounded-xl"
              />
              <Button
                type="submit"
                className="w-full rounded-[8px] hover:bg-[#0F1117]  bg-[#0F1117] border-0 text-white"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            {/* <h2 className="text-xl font-bold mb-6">Get in Touch</h2> */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "+91 98765 43210" },
                { icon: Mail, label: "info@ekasittech.com" },
                { icon: MapPin, label: "EKASIT TECH, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#10252D] flex items-center justify-center text-[#22d3ee]   flex-shrink-0">
                    <c.icon className="h-5 w-5 " />
                  </div>
                  <span className="text-white">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-56">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA3OMKwNTcnNDYuNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
