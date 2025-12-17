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
    badges: ["Installed Base"],
  },
  {
    icon: FaTools,
    title: "After-Sales Support",
    metric: "99% Retention",
    desc: "Reliable service, spares, AMC, and long-term partnerships.",
    badges: ["Service", "AMC"],
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white dark:bg-neutral-900">
      {/* Top industrial divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#f8991d] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#f8991d] uppercase tracking-widest text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Engineering Confidence, Delivered
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Automation and machine manufacturing backed by experience,
            compliance, and long-term support.
          </p>

          {/* Capability signal */}
          <div className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
            Engineering &nbsp;•&nbsp; Automation &nbsp;•&nbsp; Compliance &nbsp;•&nbsp; Support
          </div>
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
                className="group relative bg-white dark:bg-neutral-800
                           border border-neutral-200/80 dark:border-neutral-700/80
                           rounded-2xl p-6
                           shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                           hover:shadow-[0_14px_40px_rgba(248,153,29,0.15)]
                           transition-all duration-300"
              >
                {/* Metric badge */}
                <span className="absolute -top-3 right-4 text-xs font-semibold px-3 py-1 rounded-full
                                 bg-neutral-100 dark:bg-neutral-700
                                 text-neutral-700 dark:text-neutral-200">
                  {p.metric}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl
                                bg-[#f8991d]/10 text-[#f8991d] mb-4">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.desc}
                </p>

                {/* Badges */}
                <div className="mt-4 flex gap-2 translate-y-2 opacity-0
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-300">
                  {p.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full
                                 bg-[#f8991d]/10 text-[#f8991d] font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        

      </div>
    </section>
  );
};

export default WhyChooseUs;
