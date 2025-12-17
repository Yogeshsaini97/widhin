import { motion } from "framer-motion";
import {
  FaCogs,
  FaCertificate,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

/* ---------------- DATA ---------------- */

const points = [
  {
    icon: FaCogs,
    title: "In-House Engineering",
    metric: "15+ Years",
    desc: "End-to-end design, manufacturing, and testing under one roof.",
    badges: ["Custom", "OEM"],
  },
  {
    icon: FaCertificate,
    title: "Industry Compliance",
    metric: "ISO-Ready",
    desc: "Built with safety standards, certified processes, and quality checks.",
    badges: ["ISO", "OEM"],
  },
  {
    icon: FaCheckCircle,
    title: "Proven Execution",
    metric: "1200+ Machines",
    desc: "Successfully commissioned systems across multiple industries.",
    badges: ["Custom"],
  },
  {
    icon: FaTools,
    title: "After-Sales Support",
    metric: "99% Retention",
    desc: "Reliable service, spares, AMC, and long-term partnerships.",
    badges: ["Support"],
  },
];

/* ---------------- ANIMATION ---------------- */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-brand uppercase tracking-widest text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Engineering Confidence, Delivered
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Trusted automation and machine manufacturing backed by experience,
            compliance, and long-term support.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {points.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group bg-white dark:bg-neutral-800
                           border border-neutral-200 dark:border-neutral-700
                           rounded-2xl p-6
                           shadow-sm hover:shadow-xl
                           transition-all duration-300"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={22} />
                  </div>

                  {/* METRIC */}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full
                                   bg-neutral-100 dark:bg-neutral-700
                                   text-neutral-700 dark:text-neutral-200">
                    {p.metric}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {p.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.desc}
                </p>

                {/* BADGES */}
                <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full
                                 bg-brand/10 text-brand font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CLIENT LOGOS (SUBTLE) */}
        <div className="mt-14 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="text-center text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Trusted by Industry Leaders
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {/* Replace with real logos */}
            <span className="text-sm font-semibold text-neutral-400">SIEMENS</span>
            <span className="text-sm font-semibold text-neutral-400">ABB</span>
            <span className="text-sm font-semibold text-neutral-400">SCHNEIDER</span>
            <span className="text-sm font-semibold text-neutral-400">ROCKWELL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
