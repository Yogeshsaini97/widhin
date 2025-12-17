import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustryCTA = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Automotive Manufacturing?
          <br className="hidden md:block" />
          Let’s Engineer Your Automation Solution.
        </motion.h2>

        <p className="mt-5 max-w-2xl mx-auto text-neutral-300">
          From assembly lines to robotic integration and control systems,
          we design automation solutions tailored for automotive manufacturing.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-brand text-white px-8 py-4 rounded-xl font-semibold
                       hover:bg-brand/90 transition"
          >
            Talk to an Engineer
          </Link>

          <Link
            to="/industries/automotive"
            className="border border-white/30 px-8 py-4 rounded-xl font-semibold
                       hover:bg-white/10 transition"
          >
            Automotive Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCTA;
