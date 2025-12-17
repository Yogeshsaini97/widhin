import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Automated Packaging Line",
    industry: "FMCG",
  },
  {
    title: "Pharma Machine Integration",
    industry: "Pharmaceutical",
  },
  {
    title: "Textile Automation Upgrade",
    industry: "Textile",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-brand font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl"
            >
              <p className="text-xs text-brand uppercase tracking-wide">
                {p.industry}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
                {p.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
