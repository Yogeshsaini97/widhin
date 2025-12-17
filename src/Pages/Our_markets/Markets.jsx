import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
      y: 32,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

       {/* HEADER */}
<div className="max-w-3xl mx-auto mb-12 text-center">
  {/* Eyebrow */}
  <span className="text-[#f8991d] uppercase tracking-widest text-sm font-semibold">
    Industries
  </span>

  {/* Title */}
  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900">
    Markets We Serve
  </h2>

  {/* Animated underline */}
  <div className="relative mt-4 flex justify-center">
    {/* Base thin line */}
    <div className="h-[2px] w-24 bg-[#f8991d]/30 rounded-full" />

    {/* Moving accent */}
    <motion.div
      className="absolute h-[2px] w-10 bg-[#f8991d] rounded-full"
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 40, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    />
  </div>

  {/* Subtitle */}
  <p className="mt-5 text-neutral-600">
    Delivering reliable automation and machine solutions across
    mission-critical industrial sectors.
  </p>
</div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex min-h-[360px] gap-3">
          {marketsData.map((market, idx) => {
            const Icon = market.icon;

            return (
              <div
                key={market.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onClick={() => navigate(market.route)}
                className="
                  group relative flex-1 cursor-pointer overflow-hidden rounded-xl
                  transition-[flex] duration-700 ease-in-out
                  hover:flex-[3.5]
                "
              >
                {/* IMAGE */}
                <img
                  src={market.image}
                  alt={market.name}
                  loading="lazy"
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* INDUSTRIAL OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10"></div>

                {/* PROJECT COUNT */}
                <div className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full
                                bg-black/60 text-white border border-white/10">
                  {market.projects}+ Projects
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg
                                    bg-[#f8991d]/15 text-[#f8991d]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-white text-xl font-semibold tracking-tight">
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
                      text-[#f8991d] text-sm font-medium
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

        {/* MOBILE VIEW */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {marketsData.map((market) => {
            const Icon = market.icon;

            return (
              <div
                key={market.id}
                onClick={() => navigate(market.route)}
                className="
                  snap-start min-w-[85%] relative h-[240px]
                  rounded-xl overflow-hidden cursor-pointer
                "
              >
                <img
                  src={market.image}
                  alt={market.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg
                                    bg-[#f8991d]/15 text-[#f8991d]">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-white text-lg font-semibold">
                      {market.name}
                    </h3>
                  </div>

                  <span className="text-sm text-[#f8991d] font-medium">
                    {market.projects}+ Projects →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Markets;
