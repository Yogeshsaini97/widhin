import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

/* ---------------- DATA ---------------- */

const projects = [
  {
    title: "Automated Packaging Line",
    industry: "FMCG",
    slug: "automated-packaging-line",
    flagship: true,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    kpiValue: 30,
    kpiLabel: "Throughput Increase",
    scope: "PLC integration, conveyors, vision inspection",
    duration: "14 Weeks",
    chips: ["PLC • SCADA", "OEM Integration", "ISO Compliant"],
    description:
      "End-to-end automation of a high-speed packaging line with measurable throughput improvement.",
  },
  {
    title: "Pharma Machine Integration",
    industry: "Pharmaceutical",
    slug: "pharma-machine-integration",
    image:
      "https://images.unsplash.com/photo-1581091012184-7f26c4a0c9d9?auto=format&fit=crop&w=1400&q=80",
    kpiValue: 100,
    kpiLabel: "GMP Compliance",
    scope: "Servo drives, validation, safety PLC",
    duration: "18 Weeks",
    chips: ["GMP", "Safety PLC"],
    description:
      "GMP-compliant pharmaceutical automation with validation and safety systems.",
  },
  {
    title: "Textile Automation Upgrade",
    industry: "Textile",
    slug: "textile-automation-upgrade",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
    kpiValue: 25,
    kpiLabel: "Downtime Reduction",
    scope: "Retrofit PLC, SCADA, energy monitoring",
    duration: "10 Weeks",
    chips: ["Retrofit", "Energy Monitoring"],
    description:
      "Legacy textile system modernization improving uptime and operational efficiency.",
  },
];

/* ---------------- COMPONENT ---------------- */

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const cardRefs = useRef([]);
  const panelRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  /* 🔄 Auto-rotate spotlight */
  useEffect(() => {
    if (!autoRotate) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(id);
  }, [autoRotate]);

  /* 👁 Spotlight sync with scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveIndex(Number(e.target.dataset.index));
            setAutoRotate(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ♿ Accessibility – ESC + focus restore */
  useEffect(() => {
    if (!activeProject) return;

    lastFocusedRef.current = document.activeElement;
    panelRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lastFocusedRef.current?.focus();
    };
  }, [activeProject]);

  /* 🚀 Safe route prefetch (NO webpack import) */
  const prefetchRoute = (slug) => {
    if (document.querySelector(`link[data-prefetch="${slug}"]`)) return;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = `/projects/${slug}`;
    link.as = "document";
    link.dataset.prefetch = slug;
    document.head.appendChild(link);
  };

  /* 📊 Analytics hook */
  const trackPreviewOpen = (project) => {
    if (window?.gtag) {
      window.gtag("event", "case_preview_open", {
        project: project.slug,
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="text-[#f8991d] uppercase tracking-widest text-sm font-semibold">
            Case Studies
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900">
            Featured Projects
          </h2>

          <p className="mt-5 text-neutral-600">
            Selected automation and machine engineering projects delivered with
            measurable outcomes.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={p.slug}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                onMouseEnter={() => prefetchRoute(p.slug)}
                onClick={() => {
                  setActiveProject(p);
                  trackPreviewOpen(p);
                }}
                className={`
                  group cursor-pointer rounded-2xl overflow-hidden
                  border bg-white transition-all
                  ${p.flagship ? "md:col-span-2" : ""}
                  ${
                    isActive
                      ? "border-[#f8991d] shadow-xl scale-[1.02]"
                      : "border-neutral-200 shadow-sm hover:shadow-lg"
                  }
                `}
              >
                {/* IMAGE */}
                <div className="relative h-56">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />

                  {/* Industry */}
                  <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.industry}
                  </span>

                  {/* Flagship */}
                  {p.flagship && (
                    <span className="absolute top-4 right-4 bg-[#f8991d]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Flagship Project
                    </span>
                  )}

                  {/* KPI */}
                  <div className="absolute bottom-4 right-4 bg-[#f8991d]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {isActive && <CountUp end={p.kpiValue} duration={1.5} />}%
                    {" "}{p.kpiLabel}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {p.title}
                  </h3>

                  {/* Credibility Chips */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-neutral-600">
                    Delivered in{" "}
                    <span className="font-semibold text-[#f8991d]">
                      {p.duration}
                    </span>
                  </p>
                </div>

                {/* SEO – CreativeWork */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "CreativeWork",
                      name: p.title,
                      description: p.description,
                      industry: p.industry,
                    }),
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ▶ SLIDE-OVER PANEL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <motion.aside
            ref={panelRef}
            tabIndex={-1}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-md bg-white h-full p-6 overflow-y-auto"
          >
            <button
              onClick={() => setActiveProject(null)}
              className="text-2xl font-bold text-neutral-500 mb-6"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold text-neutral-900">
              {activeProject.title}
            </h3>

            <p className="mt-3 text-sm text-neutral-600">
              {activeProject.description}
            </p>

            <ul className="mt-4 text-sm text-neutral-600 space-y-2">
              <li><strong>Industry:</strong> {activeProject.industry}</li>
              <li><strong>Scope:</strong> {activeProject.scope}</li>
              <li><strong>Delivery:</strong> {activeProject.duration}</li>
              <li>
                <strong>Outcome:</strong>{" "}
                {activeProject.kpiValue}% {activeProject.kpiLabel}
              </li>
            </ul>

            {/* CTAs */}
            <button
              onClick={() => navigate(`/projects/${activeProject.slug}`)}
              className="mt-8 w-full bg-[#f8991d] text-white py-3 rounded-xl font-semibold hover:opacity-90"
            >
              View Full Case Study →
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="mt-3 w-full border border-neutral-300 py-3 rounded-xl text-sm font-semibold text-neutral-700 hover:border-[#f8991d] hover:text-[#f8991d] transition"
            >
              Talk to an Engineer
            </button>
          </motion.aside>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
