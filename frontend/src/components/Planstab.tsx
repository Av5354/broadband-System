import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

const Planstab = () => {
  const [selectedPlan, setSelectedPlan] = useState({});
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("http://localhost/broadband-project/backend/api/get_plans.php")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-center text-white">
            Our Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Card
              key={p.speed}
              className="bg-[#0f172a4d] border border-[#1e293b] rounded-2xl p-5 text-center text-[#22d3ee] hover:scale-105 hover:border-[#00d8ff59] hover:-translate-y-[5px] hover:bg-[rgba(15, 23, 42, 0.5)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 cursor-pointer relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-[48px]">
                  <Wifi className="h-7 w-7" />
                  <h3 className="font-bold text-[36px] text-white">
                    {p.speed}
                  </h3>
                </div>

                <div className="flex justify-between border-b border-[rgba(0,242,255,0.3)] pb-5">
                  <p>{p.info1}</p>
                  <p className="text-white">{p.info2}</p>
                </div>

                {/* Duration selector */}
                <ul className="flex gap-2 bg-[#242D35] mt-5 mb-[48px] p-1 rounded justify-around">
                  {p.features.map((f, index) => (
                    <li
                      key={f}
                      onClick={() =>
                        setSelectedPlan((prev) => ({
                          ...prev,
                          [p.speed]: index,
                        }))
                      }
                      className={`px-5 flex-1 rounded cursor-pointer ${
                        selectedPlan[p.speed] === index
                          ? "bg-[#00d8ff] text-black"
                          : "bg-[#2F383F]"
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 flex flex-col items-center gap-1">
                  <span className="text-3xl font-extrabold text-white">
                    <span className="text-sm align-super font-medium">₹</span>
                    {p.price[selectedPlan[p.speed] || 0]}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    (All prices include GST)
                  </span>
                </div>

                <Button className="w-full rounded-[8px] font-semibold bg-[#C5C5C5] text-black hover:bg-[#C5C5C5]">
                  <Link to="/plans">Subscribe Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Planstab;
