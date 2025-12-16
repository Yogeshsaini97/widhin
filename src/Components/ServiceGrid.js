import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaIndustry, FaCogs, FaTools, FaPlay } from "react-icons/fa";
import VideoModal from "../Components/ServicesSection/VideoModal";

import panelImage from "../images/panel.jfif";
import machineImage from "../images/machine manufacturing.jfif";
import automationImage from "../images/industrialautomation.png";

import panelVideo from "../Videos/panel.mp4";
import machineVideo from "../Videos/machine.mp4";
import automationVideo from "../Videos/automation.mp4";

const services = [
  {
    title: "Panel Manufacturing",
    description:
      "Design and manufacturing of high-quality electrical control panels with certified components and safety compliance.",
    image: panelImage,
    video: panelVideo,
    icon: FaIndustry,
    link: "/services/panel-manufacturing",
    badges: ["ISO Ready", "Custom Design", "UL Components"],
    industries: ["Pharma", "Manufacturing", "Energy"],
  },
  {
    title: "Machine Manufacturing",
    description:
      "Precision-engineered industrial machines built for performance, scalability, and long-term reliability.",
    image: machineImage,
    video: machineVideo,
    icon: FaCogs,
    link: "/services/machine-manufacturing",
    badges: ["High Precision", "Custom Automation"],
    industries: ["Automotive", "Textile", "FMCG"],
  },
  {
    title: "Industrial Automation Spares",
    description:
      "Certified automation spare parts ensuring minimal downtime and seamless system maintenance.",
    image: automationImage,
    video: automationVideo,
    icon: FaTools,
    link: "/services/industrial-automation-spares",
    badges: ["Fast Delivery", "OEM Quality"],
    industries: ["Factories", "Process Plants"],
  },
];

const ServiceGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand font-semibold uppercase tracking-wide">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold mt-3 text-neutral-900 dark:text-white">
            Enterprise-Grade Industrial Services
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Trusted engineering solutions delivering reliability, performance,
            and long-term value.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              onOpenVideo={() => setActiveVideo(service.video)}
            />
          ))}
        </div>
      </div>

      {/* FULL SCREEN VIDEO */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
};

export default ServiceGrid;

/* ---------------- CARD COMPONENT ---------------- */

const ServiceCard = ({ service, onOpenVideo }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [playedOnce, setPlayedOnce] = useState(false);

  // Lazy load video
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setLoaded(true);
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleHover = () => {
    if (!playedOnce && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPlayedOnce(true);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-500"
    >
      {/* MEDIA */}
      <div
        className="relative h-56 overflow-hidden"
        onMouseEnter={handleHover}
        onTouchStart={handleHover}
      >
        {/* IMAGE */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* VIDEO */}
        {loaded && (
          <video
            ref={videoRef}
            src={service.video}
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* ICON */}
        <div className="absolute top-4 left-4 bg-brand text-white p-3 rounded-xl shadow-lg">
          <service.icon size={22} />
        </div>

        {/* PLAY BUTTON */}
        <button
          onClick={onOpenVideo}
          className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded-full hover:bg-brand transition"
        >
          <FaPlay size={14} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {service.title}
        </h3>

        <div className="w-12 h-1 bg-brand my-4"></div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
          {service.description}
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.badges.map((badge, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-brand/10 text-brand"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* INDUSTRIES */}
        <p className="text-xs text-neutral-500 mb-6">
          Industries: {service.industries.join(", ")}
        </p>

        {/* CTA */}
        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all"
        >
          Explore Service →
        </Link>
      </div>
    </motion.div>
  );
};
