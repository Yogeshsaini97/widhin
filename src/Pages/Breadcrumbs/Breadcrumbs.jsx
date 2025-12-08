import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export const Breadcrumbs =() => {
  const location = useLocation();
  
  // Get URL path segments (excluding the empty first "/")
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Map URL keys to readable breadcrumb labels
  const labelMap = {
    "all-products": "Our Products",
    "product": "Product",
    "category": "Category",
  };

  // Converts URL segment into readable Title Case
  const formatLabel = (value) => {
    return value
      .replace(/-/g, " ") // replace dashes with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize words
  };

  return (
    <nav className="breadcrumb-container">
      <Link to="/" className="breadcrumb">Home</Link>

      {pathnames.map((value, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        const label = labelMap[value] || formatLabel(value);

        return (
          <span key={index} className="breadcrumb-segment">
            <span className="breadcrumb-arrow">›</span>

            {isLast ? (
              <span className="breadcrumb current">{label}</span>
            ) : (
              <Link to={routeTo} className="breadcrumb">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
