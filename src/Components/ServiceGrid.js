import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaIndustry, FaCogs, FaTools, FaPlay } from "react-icons/fa";

import VideoModal from "../Components/ServicesSection/VideoModal";

import panelImage from "../images/panel.jfif";
import machineImage from "../images/machine manufacturing.jfif";
import automationImage from "../images/industrialautomation.png";

import panelVideo from "./Videos/panel.mp4";
import machineVideo from "./Videos/machine.mp4";
import automationVideo from "./Videos/automation.mp4";

/* ---------------- DATA ---------------- */

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

/* ---------------- GRID ---------------- */

const ServiceGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">

       <motion.div
  initial={{ opacity: 0, y: 28 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-center mb-20"
>
  {/* EYEBROW */}
  <span className="inline-block text-brand font-semibold uppercase tracking-widest text-sm">
    Our Expertise
  </span>

  {/* MAIN HEADING */}
  <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-white leading-tight">
    Advanced Industrial <span className="relative inline-block">
      Engineering
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-brand rounded-full"></span>
    </span>{" "}
    Solutions
  </h2>

  {/* SUBTEXT */}
  <p className="mt-6 max-w-2xl mx-auto text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    From precision control panels to intelligent automation systems, we deliver
    reliable, scalable, and future-ready industrial engineering solutions.
  </p>

  {/* MICRO TRUST LINE */}
  <div className="mt-6 flex justify-center gap-6 text-xs text-neutral-500">
    <span>ISO-Ready Processes</span>
    <span className="w-1 h-1 bg-neutral-400 rounded-full self-center"></span>
    <span>OEM-Grade Components</span>
    <span className="w-1 h-1 bg-neutral-400 rounded-full self-center"></span>
    <span>Proven Industry Expertise</span>
  </div>
</motion.div>



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

      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

export default ServiceGrid;

/* ---------------- CARD ---------------- */

const ServiceCard = ({ service, onOpenVideo }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [ready, setReady] = useState(false);

  /* Ensure video can play */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setReady(true);
    video.addEventListener("canplay", onCanPlay);

    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  const onEnter = async () => {
    setHovered(true);
    if (videoRef.current && ready) {
      videoRef.current.currentTime = 0;
      try {
        await videoRef.current.play();
      } catch {}
    }
  };

  const onLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden
                 shadow-lg hover:-translate-y-3 hover:shadow-2xl
                 transition-all duration-500"
    >
      {/* MEDIA */}
      <div
        className="relative h-56"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onTouchStart={onEnter}
      >
        {/* VIDEO (BOTTOM LAYER) */}
        <video
          ref={videoRef}
          src={service.video}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${hovered ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />

        {/* IMAGE (TOP LAYER) */}
        <img
          src={service.image}
          alt={service.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${hovered ? "opacity-0 z-0" : "opacity-100 z-10"}`}
        />

        {/* ICON */}
        <div className="absolute top-4 left-4 z-20 bg-brand text-white p-3 rounded-xl shadow-lg">
          <service.icon size={22} />
        </div>

        {/* PLAY BUTTON */}
        <button
          onClick={onOpenVideo}
          className="absolute bottom-4 right-4 z-20 bg-black/60 text-white
                     p-3 rounded-full hover:bg-brand transition"
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

        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-brand font-semibold"
        >
          Explore Service →
        </Link>
      </div>
    </motion.div>
  );
};
