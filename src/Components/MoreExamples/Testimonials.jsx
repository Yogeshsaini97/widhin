import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The automation systems delivered were engineered to our exact requirements and commissioned on schedule with excellent after-sales support.",
    name: "Plant Head",
    company: "Leading Automotive Manufacturer",
  },
  {
    quote:
      "Their in-house engineering and structured execution made them a reliable long-term automation partner for our manufacturing operations.",
    name: "Operations Director",
    company: "Global FMCG Company",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand uppercase tracking-widest text-sm font-semibold">
            Client Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white">
            Trusted by Manufacturing Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800
                         bg-neutral-50 dark:bg-neutral-800"
            >
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-neutral-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-neutral-500">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
