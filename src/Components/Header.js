import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cssfiles/Header.css';
import widhinLogo from "../images/widhin-logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="main-header">
      <div className="logo">
      <img src={widhinLogo} alt="Widhin Logo" className="logo-img" />
        <span>Within<small>Industrial Demands Hub</small></span>
      </div>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <div className="dropdown">
          <span>Blog ▾</span>
          <div className="dropdown-content">
            <Link to="/blog-list">Blog List</Link>
            <Link to="/blog-details">Blog Details</Link>
          </div>
        </div>
        <div className="dropdown">
          <span>Pages ▾</span>
          <div className="dropdown-content">
            <Link to="/faq">FAQ</Link>
            <Link to="/team">Team</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-actions">
        <input type="text" placeholder="Search" className="search" />
        <Link to="/quote" className="quote-btn">Get a quote</Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
