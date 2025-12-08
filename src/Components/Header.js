// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsMenu from '../Commonjs/products';
import '../Cssfiles/Header.css';
import widhinLogo from "../images/widhinlogonew.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">
        <img src={widhinLogo} alt="Widhin Logo" className="logo-img" />
        
      
      </div>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <Link to="/">Home</Link>

        <div className="dropdown mega-dropdown">
         <Link to="/all-products" className="product-link">
  <span>Products ▾</span>
</Link>
          <div className="mega-menu">
            {productsMenu.map((group, idx) => (
              <div className="column" key={idx}>
                 <div className="category-header">
        {group.icon && (
          <img src={group.icon} alt={group.category} className="category-icon" />
        )}
         <Link to={group.path} className="menu-link mb-2">
 
  <strong>{group.category}</strong>
  { <span className="arrow-icon"> ▶ </span>}
</Link>
       
      </div>
               {group.items.map((item, itemIdx) => (
  <div key={itemIdx} className="menu-item">
    <Link to={item.path} className="menu-link">
 
  {item.label}
  {item.children && <span className="arrow-icon"> ▶ </span>}
</Link>
    {item.children && (
      <div className="submenu">
        {item.children.map((child, childIdx) => (
         <Link key={childIdx} to={child.path} className="submenu-link">

  {child.label}
</Link>
        ))}
      </div>
    )}
  </div>
))}
              </div>
            ))}
          </div>
        </div>

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

        <Link to="/contact-us">Contact Us</Link>
      </nav>

     <div className="header-actions">
      <div>
  <div className="phone-number" style={{ color: '#f8991d', fontWeight: 'bold' }}>
     +91-98150-85499
  </div>
  <div className="phone-number" style={{ color: '#f8991d', fontWeight: 'bold' }}>
     +91-62808-85499
  </div>
  </div>
  <Link to="/quote" className="quote-btn">Get a quote</Link>
  <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </button>
</div>
    </header>
  );
};

export default Header;
