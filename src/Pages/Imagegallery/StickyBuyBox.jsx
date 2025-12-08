import React from "react";
import "./StickyBuyBox.css";
import { useNavigate } from "react-router-dom";

export default function StickyBuyBox({ item, product, category }) {
  const navigate = useNavigate();

  return (
    <div className="sticky-buy-box">
      <div className="buy-box-inner">
        <div className="price-row">
          <div className="price-label">Price Range</div>
          <div className="price-value">{item.priceRange}</div>
        </div>

        <div className="availability">
          <strong>Availability:</strong>
          <span className={`avail-badge ${availabilityClass(item.availability)}`}>{item.availability}</span>
        </div>

        <div className="sku-line"><strong>SKU:</strong> {item.sku}</div>
        <div className="model-line"><strong>Model:</strong> {item.model}</div>

        <button className="quote-btn" onClick={() => alert("Quote request sent (demo)")}>Request a Quote</button>
        <button className="inquiry-btn" onClick={() => navigate("/contact-us")}>Contact Supplier</button>

        <div className="extras">
          <a href={item.datasheet} target="_blank" rel="noreferrer" className="datasheet-link">📄 Download Datasheet</a>
          <div className="rating-small">⭐ {item.ratings} • {item.reviews} reviews</div>
        </div>
      </div>
    </div>
  );
}

function availabilityClass(text = "") {
  if (/in stock/i.test(text)) return "in-stock";
  if (/limited/i.test(text)) return "limited";
  return "out-stock";
}
