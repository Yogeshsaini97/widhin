// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import productsMenu from "../Commonjs/products";
import widhinLogo from "../images/widhinlogonew.png";
import { FaSearch } from "react-icons/fa";
import "../Cssfiles/Header.css"

const industries = [
  { label: "Textile", path: "/industries/textile" },
  { label: "Pharma", path: "/industries/pharma" },
  { label: "FMCG", path: "/industries/fmcg" },
  { label: "Packaging", path: "/industries/packaging" },
  { label: "Automotive", path: "/industries/automotive" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  /* ---------------- SHRINK ON SCROLL ---------------- */
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search)}`);
    setShowSearch(false);
    setSearch("");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-neutral-200 transition-all duration-300 ${
        shrink ? "h-16 shadow-sm" : "h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={widhinLogo}
              alt="Widhin"
              className={`transition-all duration-300 ${
                shrink ? "h-8" : "h-10"
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">

            <Link
              to="/"
              className={`hover:text-[#f8991d] transition ${
                isActive("/") ? "text-[#f8991d]" : ""
              }`}
            >
              Home
            </Link>

            {/* PRODUCTS MEGA MENU */}
            {/* <div className="relative group">
              <Link
                to="/all-products"
                className={`hover:text-[#f8991d] transition ${
                  location.pathname.startsWith("/all-products")
                    ? "text-[#f8991d]"
                    : ""
                }`}
              >
                Products ▾
              </Link>

              <div className="absolute left-0 top-full mt-6 w-[900px] bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="grid grid-cols-3 gap-8 p-8">
                  {productsMenu.map((group, idx) => (
                    <div key={idx}>
                      <Link
                        to={group.path}
                        className="block font-semibold text-neutral-900 hover:text-[#f8991d]"
                      >
                        {group.category}
                      </Link>

                      <ul className="mt-4 space-y-2">
                        {group.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.path}
                              className="text-sm text-neutral-600 hover:text-[#f8991d]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
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

            

            {/* INDUSTRIES MENU */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-[#f8991d] transition">
                Industries ▾
              </span>

              <div className="absolute left-0 top-full mt-4 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="p-4 space-y-2 min-w-[180px]">
                  {industries.map((ind) => (
                    <li key={ind.label}>
                      <Link
                        to={ind.path}
                        className="text-sm text-neutral-600 hover:text-[#f8991d]"
                      >
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to="/services"
              className={`hover:text-[#f8991d] transition ${
                isActive("/services") ? "text-[#f8991d]" : ""
              }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`hover:text-[#f8991d] transition ${
                isActive("/projects") ? "text-[#f8991d]" : ""
              }`}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className={`hover:text-[#f8991d] transition ${
                isActive("/cotact") ? "text-[#f8991d]" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">

            {/* SEARCH */}
          

           {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-6">

            {/* PHONES */}
            <div className="text-right leading-tight text-sm">
              <div className="font-semibold text-[#f8991d]">
                +91-98150-85499
              </div>
              <div className="font-semibold text-[#f8991d]">
                +91-62808-85499
              </div>
            </div>

           
           
          </div>

            {/* CTA */}
            <Link
  to="/quote"
  className="
    px-5 py-2.5 rounded-full
    bg-[#f8991d]
    text-white
    text-sm font-semibold
    hover:bg-[#ffb347]
    transition
  "
>
  Get a Quote
</Link>
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-neutral-800"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col p-6 space-y-4 text-sm text-neutral-700">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/all-products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/cotact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center bg-[#f8991d] text-white py-2 rounded-full font-semibold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
