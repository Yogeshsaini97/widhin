import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- DATA ---------------- */

const ecosystem = {
  PLC: [
    { name: "SIEMENS", link: "/capabilities/plc/siemens" },
    { name: "ABB", link: "/capabilities/plc/abb" },
    { name: "SCHNEIDER ELECTRIC", link: "/capabilities/plc/schneider" },
    { name: "ROCKWELL AUTOMATION", link: "/capabilities/plc/rockwell" },
    { name: "MITSUBISHI ELECTRIC", link: "/capabilities/plc/mitsubishi" },
    { name: "OMRON", link: "/capabilities/plc/omron" },
  ],
  Motion: [
    { name: "BOSCH REXROTH", link: "/capabilities/motion/bosch" },
    { name: "DELTA", link: "/capabilities/motion/delta" },
    { name: "YASKAWA", link: "/capabilities/motion/yaskawa" },
    { name: "EMERSON", link: "/capabilities/motion/emerson" },
  ],
  Robotics: [
    { name: "FANUC", link: "/capabilities/robotics/fanuc" },
    { name: "KEYENCE", link: "/capabilities/robotics/keyence" },
    { name: "HONEYWELL", link: "/capabilities/robotics/honeywell" },
    { name: "L&T", link: "/capabilities/robotics/lnt" },
  ],
};

const certifications = ["ISO 9001", "CE", "IEC"];

/* ---------------- COMPONENT ---------------- */

const AutomationEcosystem = () => {
  const navigate = useNavigate();

  // Flatten all brands for spotlight logic
  const allBrands = Object.values(ecosystem).flat();
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔦 Spotlight rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % allBrands.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [allBrands.length]);

  return (
    <section className="relative bg-white border-t border-neutral-200 py-14 overflow-hidden">

      {/* SECTION TITLE */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Trusted Across the Automation Ecosystem
        </p>
      </div>

      {/* ECOSYSTEM GROUPS */}
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {Object.entries(ecosystem).map(([category, brands]) => (
          <div key={category}>

            {/* CATEGORY LABEL */}
            <div className="mb-4 text-[11px] uppercase tracking-widest text-neutral-500">
              {category}
            </div>

            {/* CENTERED MARQUEE VIEWPORT */}
            <div className="relative overflow-hidden">

              {/* MARQUEE TRACK */}
              <motion.div
                className="flex gap-4 w-max mx-auto"
                animate={{ x: ["0%", "-40%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                }}
              >
                {[...brands, ...brands].map((brand, idx) => {
                  const isActive =
                    allBrands[activeIndex]?.name === brand.name;

                  return (
                    <div
                      key={`${brand.name}-${idx}`}
                      onClick={() => navigate(brand.link)}
                      className={`cursor-pointer min-w-[160px] h-12
                        flex items-center justify-center
                        rounded-xl border
                        text-xs font-semibold
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#f8991d]/10 border-[#f8991d]/50 text-[#f8991d]"
                            : "bg-white border-neutral-200 text-neutral-500 hover:border-[#f8991d]/40 hover:text-[#f8991d]"
                        }`}
                    >
                      {brand.name}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <div className="mt-14 border-t border-neutral-200 pt-8">
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map(cert => (
            <div
              key={cert}
              className="px-4 py-2 rounded-full
                         border border-neutral-300
                         text-xs font-semibold
                         text-neutral-600"
            >
              {cert} Certified
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationEcosystem;
