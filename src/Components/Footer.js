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
          <p className="phone">+91-9815085499,</p>
          <p className="phone">+91-9878585499</p>
          <p>
            7520a/15, 7b Streets, <br />
           New Amar Nagar Ludhiana Punjab
 India 141003.
          </p>
          
          <p>
            Email:{" "}
            <a href="mailto:sainienterprise1991@gmail.com">sainienterprise1991@gmail.com</a>
          </p>
          <p>
           GST No. :{" "}
            <a >03EJVPS6459H1ZE</a>
          </p>
         <p>
           MSME No. : {" "}
            <a > PB-12-0031533</a>
          </p>
        </div>
        

        {/* About Selec */}
        <div className="footer-column">
          <h3>About Widhin</h3>
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
