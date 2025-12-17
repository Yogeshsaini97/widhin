import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Requirement Analysis" },
  { step: "02", title: "Design & Engineering" },
  { step: "03", title: "Manufacturing & Testing" },
  { step: "04", title: "Installation & Support" },
];

const ProcessFlow = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white">
          Our Engineering Process
        </h2>

        <div className="mt-14 grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-brand text-brand font-bold text-lg">
                {s.step}
              </div>
              <p className="mt-4 font-semibold text-neutral-800 dark:text-white">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
