import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

// VIDEOS
import video1 from "./Videos/panel.mp4";
import video2 from "./Videos/machine.mp4";
import video3 from "./Videos/automation.mp4";
import video4 from "./Videos/factory.mp4";
import video5 from "./Videos/testing.mp4";

// FALLBACK IMAGE
import heroPoster from "../images/automatic_turning.png";

const heroVideos = [video1, video2, video3, video4, video5];

const HeroSection = () => {
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Enable video only on desktop */
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setCanPlayVideo(true);
    }
  }, []);

  /* Rotate videos every 1 second */
  useEffect(() => {
    if (!canPlayVideo) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % heroVideos.length);
    }, 2500); // 1 second

    return () => clearInterval(interval);
  }, [canPlayVideo]);

  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden">

      {/* VIDEO STACK */}
      {canPlayVideo ? (
        heroVideos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover
              transition-opacity duration-700
              ${index === activeIndex ? "opacity-70 z-10" : "opacity-0 z-0"}`}
          />
        ))
      ) : (
        <img
          src={heroPoster}
          alt="Industrial Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 z-20" />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.07] z-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 text-brand uppercase tracking-widest font-semibold text-sm"
          >
            Automation & Machine Manufacturing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Precision-Engineered{" "}
            <span className="relative inline-block">
              Automation
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute left-0 -bottom-2 h-1 bg-brand rounded-full"
              />
            </span>
            <br />
            & Industrial Machines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-2xl"
          >
            We design and manufacture advanced automation systems, custom
            machines, and industrial control solutions built for reliability,
            efficiency, and long-term performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-brand text-white
                         px-7 py-4 rounded-xl font-semibold
                         hover:bg-brand/90 transition"
            >
              Talk to an Engineer <FaArrowRight />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 border border-white/30
                         text-white px-7 py-4 rounded-xl font-semibold
                         hover:bg-white/10 transition"
            >
              View Capabilities
            </Link>
          </motion.div>

          <p className="mt-4 text-sm text-neutral-400">
            Response within 24 hours • OEM-Grade Components • After-Sales Support
          </p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 text-sm flex flex-col items-center gap-2 z-30"
      >
        <span>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-neutral-400"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
