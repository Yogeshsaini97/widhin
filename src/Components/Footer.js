import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
       
      </div>

      <div className="footer-main">
        {/* Contact Section */}
        <div className="footer-column">
          <h3>Customer service center</h3>
          <p className="phone">+91-8062358946</p>
          <p className="phone">+91-9136977315</p>
          <p>
            EL-27/1, Electronic Zone, TTC Industrial Area, MIDC,<br />
            Mahape, Navi Mumbai - 400 710, Maharashtra.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:salestech@selec.com">salestech@selec.com</a>
          </p>
        </div>

        {/* About Selec */}
        <div className="footer-column">
          <h3>About Selec</h3>
          <ul>
            <li>About Us</li>
            <li>Global Network</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Terms and Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Download Center</li>
            <li>Catalog & Brochures</li>
            <li>Site Map</li>
            <li>CSR</li>
            <li>E-Waste Management</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>
            Keep up on our always evolving product features and technology. Enter
            your e-mail and subscribe to our newsletter.
          </p>
          {/* <div className="newsletter">
            <input type="email" placeholder="Email Address*" />
            <button>Go!</button>
          </div>
          <div className="recaptcha">
            <input type="checkbox" /> I'm not a robot
          </div> */}
        </div>

         <div className="footer-column">
       
      </div>
        <div className="footer-column">
        <p>© Copyright 2025. All Rights Reserved</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaYoutube />
          <FaPinterestP />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
      </div>

     
    </footer>
  );
};

export default Footer;
