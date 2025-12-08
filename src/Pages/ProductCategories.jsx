import React from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../Data/products";
import "./ProductCategories.css";

export  function ProductCategories() {
  const { productId } = useParams();

  // Find product matching route param
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return <h2 className="error-text">Product not found.</h2>;
  }

  return (
    <div className="pcat-container">
      {/* Header Section */}
      <div className="pcat-header">
        <img src={product.icon} alt={product.title} className="pcat-icon" />
        <div>
          <h1 className="pcat-title">{product.title}</h1>
          <p className="pcat-description">{product.description}</p>
        </div>
      </div>

      {/* Sub Categories */}
      <h2 className="pcat-sub-title">Sub Categories</h2>

      <div className="pcat-grid">
  {product.subProducts.length > 0 ? (
    product.subProducts.map((sub) => (
      <Link
        key={sub.id}
        to={`/all-products/${product.id}/${sub.id}`}
        className="pcat-card pro"
      >
        {/* Image */}
        <div className="pcat-img-wrapper">
          <img
            src={sub.image || "/placeholder.png"}
            alt={sub.title}
            className="pcat-img"
          />
        </div>

        {/* Title */}
        <h3 className="pcat-card-title">{sub.title}</h3>

        {/* Description */}
        <p className="pcat-description">
          {sub.description || "No description available."}
        </p>

        {/* Tags */}
        <div className="pcat-tags">
          {sub.tags?.length > 0 ? (
            sub.tags.map((tag, idx) => (
              <span key={idx} className="pcat-tag">
                #{tag}
              </span>
            ))
          ) : (
            <span className="pcat-tag no-tag">No tags</span>
          )}
        </div>

        {/* Items Count */}
        <div className="pcat-card-info">
          <span className="pcat-item-count">
            📦 {sub.items?.length || 0} Items
          </span>
        </div>

        {/* Footer CTA */}
        <div className="pcat-card-footer">
          <span className="pcat-view-more">View Details →</span>
        </div>
      </Link>
    ))
  ) : (
    <p className="no-sub">No sub categories available.</p>
  )}
</div>

    </div>
  );
}
