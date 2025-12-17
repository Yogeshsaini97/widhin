import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import {
  FaIndustry,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ---------------- KPI DATA (ONLY 4 – BUSINESS FOCUSED) ---------------- */

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    icon: FaIndustry,
    tooltip: "Established in 2012",
    link: "/about",
  },
  {
    number: 1200,
    suffix: "+",
    label: "Machines Delivered",
    icon: FaProjectDiagram,
    tooltip: "Successfully commissioned worldwide",
    link: "/projects",
  },
  {
    number: 20,
    suffix: "+",
    label: "Industries Served",
    icon: FaIndustry,
    tooltip: "Automotive, Pharma, FMCG & more",
    link: "/industries",
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Retention",
    icon: FaHandshake,
    tooltip: "Long-term enterprise partnerships",
    link: "/clients",
  },
];

/* ---------------- COMPONENT ---------------- */

const HappyClientsCompact = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [start, setStart] = useState(false);

  /* Count-up only when section is visible */
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
      className="relative bg-white dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800"
    >
      {/* MICRO TRUST LINE */}
      <div className="text-center pt-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Trusted by{" "}
        <span className="text-[#f8991d] font-semibold">2000+</span> Clients
        Worldwide
      </div>

      {/* BRAND UNDERLINE */}
      <div className="mx-auto mt-2 h-[3px] w-20 bg-[#f8991d] rounded-full" />

      {/* KPI GRID */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="group relative flex items-center gap-4
                           cursor-pointer justify-center md:justify-start
                           transition-transform duration-300
                           hover:scale-[1.04]"
              >
                {/* ICON */}
                <div className="p-3 rounded-xl bg-[#f8991d]/10 text-[#f8991d]">
                  <Icon size={22} />
                </div>

                {/* NUMBER + LABEL */}
                <div>
                  <div className="text-3xl font-extrabold text-[#f8991d] leading-none">
                    {start ? (
                      <CountUp end={item.number} duration={2} />
                    ) : (
                      0
                    )}
                    {item.suffix}
                  </div>

                  <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {item.label}
                  </div>
                </div>

                {/* TOOLTIP */}
                <div
                  className="absolute -top-9 left-1/2 -translate-x-1/2
                             bg-black text-white text-xs px-3 py-1 rounded
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
