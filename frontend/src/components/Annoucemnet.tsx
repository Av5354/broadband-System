import { Link } from "react-router-dom";

import {
  Wifi,
  Check,
  Globe,
  Monitor,
  Router,
  Phone,
  Shield,
} from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const Announcement = () => {
  return (
    <>
      {/* Quick Links Bar */}
      <section className="relative bg-[rgba(0,242,255,0.08)] p-3  border-t border-b border-[rgba(0,242,255,0.3)] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]  backdrop-blur-[16px] flex items-center">
        <marquee className="text-white  ">
            <span className="mr-5 ">🚀Ultra-Fast Fiber Internet Now Live</span>
            <span className="mr-5">⚡Unlimited Plans Available</span>
            <span className="mr-5">📞24/7 Customer Support</span>
            <span className="mr-5">🌐Serving Your Area Now</span>
            <span className="mr-5">🎉Special Launch Offers</span>
            <span className="mr-5">🚀Ultra-Fast Fiber Internet Now Live</span>
            <span className="mr-5">⚡Unlimited Plans Available</span>
            <span className="mr-5">📞24/7 Customer Support</span>
            <span className="mr-5">🌐Serving Your Area Now</span>
            <span className="mr-5">🎉Special Launch Offers</span>


         
        </marquee>
      </section>
    </>
  );
};
export default Announcement;
