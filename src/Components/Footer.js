import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-neutral-900 text-neutral-300"
      >
       

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* CONTACT */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Customer Service Center
                <span className="block w-10 h-0.5 bg-[#f8991d] mt-2" />
              </h3>

              <div className="space-y-3 text-sm">
                <p className="flex gap-3">
                  <FaPhoneAlt className="text-[#f8991d] mt-1" />
                  <span>
                    +91-98150-85499<br />
                    +91-62808-85499
                  </span>
                </p>

                <button
                  onClick={() => setShowMap(true)}
                  className="flex gap-3 text-left hover:text-white"
                >
                  <FaMapMarkerAlt className="text-[#f8991d] mt-1" />
                  <span>
                    7520A/15, 7B Streets,<br />
                    New Amar Nagar, Ludhiana<br />
                    Punjab – 141003
                  </span>
                </button>

                <p className="flex gap-3">
                  <FaEnvelope className="text-[#f8991d] mt-1" />
                  <a
                    href="mailto:sainienterprise1991@gmail.com"
                    className="hover:text-white"
                  >
                    sainienterprise1991@gmail.com
                  </a>
                </p>

                <p className="text-xs text-neutral-400">
                  <strong>GST:</strong> 03EJVPS6459H1ZE
                </p>
                <p className="text-xs text-neutral-400">
                  <strong>MSME:</strong> PB-12-0031533
                </p>
              </div>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                About Widhin
                <span className="block w-10 h-0.5 bg-[#f8991d] mt-2" />
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "About Us",
                  "Global Network",
                  "Privacy Policy",
                  "Cookies Policy",
                  "Terms & Conditions",
                  "FAQs",
                ].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
                <span className="block w-10 h-0.5 bg-[#f8991d] mt-2" />
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Contact Us",
                  "Download Center",
                  "Catalog & Brochures",
                  "CSR",
                  "E-Waste Management",
                ].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TRUST */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Trusted Partner
                <span className="block w-10 h-0.5 bg-[#f8991d] mt-2" />
              </h3>

              <div className="space-y-3 text-sm">
                {[
                  "Verified Industrial Supplier",
                  "MSME Registered Company",
                  "GST Verified Business",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2
                               bg-neutral-800 px-3 py-2 rounded-lg"
                  >
                    <FaShieldAlt className="text-[#f8991d]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-6
                          flex flex-col md:flex-row
                          justify-between items-center gap-4">
            <p className="text-xs text-neutral-400">
              © 2025 Widhin. All Rights Reserved.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaYoutube, FaPinterestP, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="h-9 w-9 flex items-center justify-center
                               rounded-full border border-neutral-700
                               hover:border-[#f8991d] hover:text-[#f8991d]
                               transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+919815085499"
          className="h-12 w-12 rounded-full bg-[#f8991d]
                     text-white flex items-center justify-center shadow-lg"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="https://wa.me/919815085499"
          target="_blank"
          rel="noreferrer"
          className="h-12 w-12 rounded-full bg-green-600
                     text-white flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* MAP MODAL */}
      {showMap && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-3xl">
            <iframe
              title="Location"
              src="https://maps.google.com/maps?q=Ludhiana%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]"
            />
            <button
              onClick={() => setShowMap(false)}
              className="w-full py-3 bg-[#f8991d] text-white font-semibold"
            >
              Close Map
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
