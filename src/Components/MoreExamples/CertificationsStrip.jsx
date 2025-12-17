import { motion } from "framer-motion";

const certifications = [
  { name: "ISO 9001 Certified" },
  { name: "CE Compliant Systems" },
  { name: "UL Standard Components" },
  { name: "OEM Approved Processes" },
];

const CertificationsStrip = () => {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <p className="text-center text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Certifications & Compliance
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10"
        >
          {certifications.map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700
                         text-sm font-semibold text-neutral-700 dark:text-neutral-300
                         bg-white dark:bg-neutral-800"
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsStrip;
