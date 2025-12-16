import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { marketsData } from "./marketsdata";

const Markets = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  /* GSAP entry animation */
  useEffect(() => {
    if (!cardsRef.current.length) return;

    gsap.from(cardsRef.current, {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <section className="w-full bg-gray-50 px-6 py-12">
   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
  Industries We Serve
</h2>

<p className="mt-3 text-lg text-gray-600 max-w-2xl">
  Delivering engineering excellence across diverse industrial sectors
</p>



      {/* DESKTOP VIEW */}
      <div className="hidden md:flex min-h-[380px] gap-2">
        {marketsData.map((market, idx) => {
          const Icon = market.icon;

          return (
            <div
              key={market.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              onClick={() => navigate(market.route)}
              className="
                group relative flex-1 cursor-pointer overflow-hidden rounded-lg
                transition-[flex] duration-700 ease-in-out
                hover:flex-[4]
              "
            >
              {/* Image with subtle zoom (NO blur) */}
              <img
                src={market.image}
                alt={market.name}
                loading="lazy"
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* Project Count Badge */}
              <div className="absolute top-4 right-4 bg-brand text-white text-sm px-3 py-1 rounded-full shadow">
                {market.projects}+ Projects Delivered
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-brand w-6 h-6" />
                  <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
                    {market.name}
                  </h3>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(market.route);
                  }}
                  className="
                    inline-flex items-center gap-2
                    text-brand font-medium
                    opacity-0 translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
                >
                  View Projects
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE SWIPE VIEW */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {marketsData.map((market) => {
          const Icon = market.icon;

          return (
            <div
              key={market.id}
              onClick={() => navigate(market.route)}
              className="
                snap-start min-w-[80%] relative h-[260px]
                rounded-xl overflow-hidden cursor-pointer
              "
            >
              <img
                src={market.image}
                alt={market.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="text-brand w-5 h-5" />
                  <h3 className="text-white text-xl font-semibold">
                    {market.name}
                  </h3>
                </div>

                <span className="text-sm text-brand">
                  {market.projects}+ Projects →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Markets;
