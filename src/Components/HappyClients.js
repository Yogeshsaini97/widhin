import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaProjectDiagram, FaSmile, FaAward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    number: 9000,
    label: "Projects",
    icon: FaProjectDiagram,
    tooltip: "Since 2012",
    link: "/case-studies/projects",
  },
  {
    number: 2000,
    label: "Clients",
    icon: FaSmile,
    tooltip: "Trusted Worldwide",
    link: "/case-studies/clients",
  },
  {
    number: 28,
    label: "Awards",
    icon: FaAward,
    tooltip: "Industry Recognitions",
    link: "/awards",
  },
];

const HappyClientsCompact = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [start, setStart] = useState(false);

  // Count-up only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-white border-y border-orange-200"
    >
      {/* Micro text */}
      <div className="text-center pt-4 text-sm font-medium text-gray-700">
        Trusted by <span className="text-[#f8991d] font-semibold">2000+</span>{" "}
        Clients Worldwide
      </div>

      {/* Animated underline */}
      <div className="mx-auto mt-2 h-[3px] w-20 bg-[#f8991d] rounded-full animate-pulse" />

      {/* KPI Strip */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between gap-6 overflow-x-auto scrollbar-hide">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="group relative flex items-center gap-3 cursor-pointer min-w-[200px]
                           hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Icon */}
                <Icon className="text-[#f8991d] text-xl shrink-0" />

                {/* Number */}
                <div className="text-3xl font-extrabold text-[#f8991d] leading-none">
                  {start ? (
                    <CountUp end={item.number} duration={2} />
                  ) : (
                    0
                  )}
                  +
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-gray-800">
                  {item.label}
                </div>

                {/* Tooltip */}
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2
                             bg-black text-white text-xs px-2 py-1 rounded
                             opacity-0 group-hover:opacity-100
                             transition-opacity whitespace-nowrap"
                >
                  {item.tooltip}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsCompact;
