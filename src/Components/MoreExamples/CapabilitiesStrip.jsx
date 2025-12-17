import { motion } from "framer-motion";
import {
  FaIndustry,
  FaCogs,
  FaTools,
  FaRobot,
} from "react-icons/fa";

const capabilities = [
  {
    icon: FaIndustry,
    title: "Panel Manufacturing",
    desc: "Certified control panel solutions",
  },
  {
    icon: FaCogs,
    title: "Machine Manufacturing",
    desc: "Precision-built industrial machines",
  },
  {
    icon: FaRobot,
    title: "Industrial Automation",
    desc: "Smart, scalable automation systems",
  },
  {
    icon: FaTools,
    title: "Spares & AMC Support",
    desc: "Reliable after-sales & maintenance",
  },
];

const CapabilitiesStrip = () => {
  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      {/* SUBTLE INDUSTRIAL BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {capabilities.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white dark:bg-neutral-800
                         border border-neutral-200 dark:border-neutral-700
                         rounded-2xl p-8 text-center
                         shadow-sm hover:shadow-xl
                         transition-all"
            >
              {/* ICON */}
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center
                           rounded-2xl bg-brand/10 text-brand
                           transition-transform duration-300
                           group-hover:scale-110"
              >
                <Icon size={30} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {item.title}
              </h3>

              {/* ACCENT LINE */}
              <div className="mx-auto mt-3 h-1 w-10 bg-brand rounded-full
                              transition-all duration-300 group-hover:w-14" />

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesStrip;
