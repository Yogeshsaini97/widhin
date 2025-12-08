import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Data/products";
import ImageGallery from "./Imagegallery/ImageGallery";
import StickyBuyBox from "./Imagegallery/StickyBuyBox";
import CustomersAlsoViewed from "./Imagegallery/CustomersAlsoViewed";
import QASection from "./Imagegallery/QASection";
import SpecsAccordion from "./Imagegallery/SpecsAccordion";
import {Breadcrumbs} from "../Pages/Breadcrumbs/Breadcrumbs";

import "./ProductDetail.css";

export const ProductDetail = () => {
  const { productId, categoryId, itemId } = useParams();

  const product = productsData.find((p) => p.id === productId);
  const category = product?.subProducts.find((c) => c.id === categoryId);
  const item = category?.items.find((i) => i.id === itemId);

  if (!item) return <h2 className="not-found">Product not found</h2>;

  // Build spec object for accordion (you can expand keys as needed)
  const specs = {
    "General": [
      { k: "Brand", v: item.brand || "-" },
      { k: "Model", v: item.model || "-" },
      { k: "SKU", v: item.sku || "-" },
      { k: "Availability", v: item.availability || "-" }
    ],
    "Pricing & Supply": [
      { k: "Price Range", v: item.priceRange || "-" },
      { k: "Bulk Availability", v: item.bulk || "Yes" }
    ],
    "Technical": item.technical || [
      { k: "Network", v: item.network || "Profinet/Ethernet" },
      { k: "Slots", v: item.slots || "Expandable" }
    ]
  };

  return (
    <div className="product-detail-page">
      

      <div className="detail-top">
        <div className="detail-images-and-center">
          <ImageGallery item={item} />

          <div className="detail-center">
            <h1 className="detail-title">{item.name}</h1>

            <div className="ratings-row">
              <div className="rating-stars">
                <span className="stars">{renderStars(item.ratings)}</span>
                <span className="rating-value">{item.ratings?.toFixed(1)}</span>
              </div>
              <div className="reviews-count">({item.reviews} reviews)</div>
            </div>

            <p className="brand-line"><strong>Brand:</strong> {item.brand}</p>

            <div className="detail-tags">
              {item.tags?.map((tag, idx) => (
                <span key={idx} className="detail-tag">#{tag}</span>
              ))}
            </div>

            <p className="short-description">{item.description}</p>

            <div className="about-items">
              <h3>About this item</h3>
              <ul>
                {item.features?.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            <div className="action-row">
              <a href={item.datasheet || "#"} className="datasheet-link" target="_blank" rel="noopener noreferrer">
                📄 Download Datasheet
              </a>
            </div>
          </div>
        </div>

        {/* Sticky buy box placed to the right */}
        <div className="detail-buy-col">
          <StickyBuyBox item={item} product={product} category={category} />
        </div>
      </div>

      {/* TECHNICAL DETAILS */}
      <SpecsAccordion specs={specs} />

      {/* LONG DESCRIPTION */}
      {item.longDescription && (
        <div className="detail-section description-box">
          <h2>Product Description</h2>
          <p className="long-description">{item.longDescription}</p>
        </div>
      )}

      {/* Q&A */}
      <QASection itemId={item.id} />

      {/* Customers also viewed */}
      <CustomersAlsoViewed currentItemId={item.id} items={category.items} />

    </div>
  );
};

/* small helper to render star icons (simple) */
function renderStars(rating = 0) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) stars += "★";
  if (half) stars += "☆";
  while (stars.length < 5) stars += "☆";
  return stars;
}

export default ProductDetail;
