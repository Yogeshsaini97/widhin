import React from "react";
import "./CustomersAlsoViewed.css";
import { useNavigate } from "react-router-dom";

export default function CustomersAlsoViewed({ currentItemId, items = [] }) {
  const navigate = useNavigate();

  // show other items except current
  const list = items.filter(i => i.id !== currentItemId);

  if (!list.length) return null;

  return (
    <div className="also-viewed">
      <h3>Customers Also Viewed</h3>
      <div className="also-scroll">
        {list.map(i => (
          <div key={i.id} className="also-card" onClick={() => handleNavigate(navigate, i)}>
            <img src={i.image} alt={i.name} className="also-img" />
            <div className="also-name">{i.name}</div>
            <div className="also-price">{i.priceRange}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function handleNavigate(navigate, item) {
  // This will not have product/category in path; for demo we navigate to the same category path if needed.
  // Adjust to your routing pattern when integrating.
  // Example assumed: /all-products/product/industrial-automations/category/plc/item/plc2
  navigate(-0); // noop placeholder (or you can build proper URL if you have data)
}
