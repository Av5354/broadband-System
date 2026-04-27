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

const quickLinks = [
  { icon: Globe, label: "Fast Internet" },
  {
    icon: Monitor,
    label: "Satellite TV",
  },
  { icon: Router, label: "Router" },
  {
    icon: Phone,
    label: "Internet of Things",
  },
  { icon: Shield, label: "Privacy" },
  { icon: Wifi, label: "Support" },
];

// const quickLinks = [
//   { icon: Globe, label: "Fast Internet", color: "from-orange-500 to-red-500" },
//   {
//     icon: Monitor,
//     label: "Satellite TV",
//     color: "from-purple-500 to-indigo-500",
//   },
//   { icon: Router, label: "Router", color: "from-blue-500 to-cyan-500" },
//   {
//     icon: Phone,
//     label: "Internet of Things",
//     color: "from-green-500 to-emerald-500",
//   },
//   { icon: Shield, label: "Privacy", color: "from-amber-500 to-orange-500" },
//   { icon: Wifi, label: "Support", color: "from-rose-500 to-pink-500" },
// ];

const Counter = () => {
  return (
    <>
      {/* Quick Links Bar */}
      <section className="relative bg-[#0E0E0E] py-9 mb-8 ">
        <div className="container  px-4 ">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 justify-stretch ">
            {quickLinks.map((q) => (
              <div
                key={q.label}
                className={` bg-[#0f172a4d] border border-[#1e293b] rounded-2xl p-5 text-center text-[#22d3ee]  hover:scale-105 hover:border-[#00d8ff59] hover:-translate-y-[5px] hover:bg-[rgba(15, 23, 42, 0.5)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 cursor-pointer`}
              >
                <q.icon className=" w-12 h-12 rounded-sm mx-auto mb-5 bg-[#22d3ee1a] p-2" />
                <span className="text-lg font-medium text-white">
                  {q.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Counter;
