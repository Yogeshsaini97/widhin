import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Data/products";
import "./ProductItems.css"
import { useNavigate } from "react-router-dom";



export const  ProductItems=()=> {
  const { productId, categoryId } = useParams();
  const navigate = useNavigate();


  const product = productsData.find((p) => p.id === productId);
  const category = product?.subProducts.find((c) => c.id === categoryId);

  if (!product || !category)
    return <h2 className="not-found">Category not found</h2>;

  return (
    <div className="product-items-page">
      {/* HEADER SECTION */}
      <div className="product-items-header">
        <img src={product.icon} alt={category.title} className="items-header-icon" />

        <div>
          <h1>{category.title}</h1>
          <p className="items-subtitle">
            Explore premium {category.title} products suitable for industrial and commercial use.
          </p>
        </div>
      </div>

      {/* ITEMS GRID */}
      <div className="items-grid">
        {category.items?.length > 0 ? (
          category.items.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="item-img-wrapper">
                <img src={item.image} alt={item.name} className="item-img" />
              </div>

              <h3 className="item-title">{item.name}</h3>

              <p className="item-description">{item.description}</p>

              {/* TAGS */}
              <div className="item-tags">
                {item.tags?.map((tag, idx) => (
                  <span key={idx} className="item-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* PRICE RANGE */}
              {item.priceRange && (
                <p className="item-price">💰 {item.priceRange}</p>
              )}

              {/* BUY OR INQUIRY CTA */}
              <button  onClick={() =>
    navigate(
      `/all-products/product/${product.id}/${category.id}/${item.id}`
    )
  }
  className="item-btn">View Details</button>
            </div>
          ))
        ) : (
          <h3 className="no-items">No items available in this category.</h3>
        )}
      </div>
    </div>
  );
}
