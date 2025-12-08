import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../Data/products";
import "./AllProducts.css";

export default function AllProducts() {
  return (
    <div className="all-products-container">
      <h1 className="page-title">Our Product Categories</h1>
      <p className="subtitle">
        Explore our complete range of industrial automation, power quality, and electrical solutions.
      </p>

      <div className="grid">
        {productsData.map((product) => (
          <Link
            key={product.id}
            to={`/all-products/${product.id}`}
            className="card"
          >
            {/* Card Icon */}
            {product.icon && (
              <img src={product.icon} alt={product.title} className="card-icon" />
            )}

            {/* Title */}
            <h2 className="card-title">{product.title}</h2>

            {/* Description */}
            {product.description && (
              <p className="card-description">{product.description}</p>
            )}

            {/* Stats */}
            <div className="card-footer">
              <span className="count">{product.subProducts?.length || 0}</span>
              <p className="label">Sub Categories</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
