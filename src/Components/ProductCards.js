import React from 'react';
import { useNavigate } from 'react-router-dom'; // Needed for navigation
import './ProductCards.css';
import mitsubhishi from "../images/mitsubhishi3.jfif";
import mitsubhishi2 from "../images/mitsubhishi4.jfif";

const products = [
  {
    id: 1,
    image: mitsubhishi,
    name: 'Mitsubhishi Ac drive',
    price: 'Rs 213.23',
    description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Ludhiana, Chakki pul',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Mitsubhishi',
    model: 'P-200X',
    bedrooms: 3,
    bathrooms: 4,
    area: '250 sq ft',
    seller: 'Saini enterprises',
  },
  {
    id: 2,
    image: mitsubhishi2,
    name: 'Panasonic ac dive',
    price: 'Rs 345.18',
    description: 'Ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Rohini,New delhi',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Delta',
    model: 'DX-88',
    bedrooms: 3,
    bathrooms: 4,
    area: '450 sq ft',
    seller: 'Yogesh saini',
  },{
    id: 1,
    image: mitsubhishi,
    name: 'Mitsubhishi Ac drive',
    price: 'Rs 213.23',
    description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Ludhiana, Chakki pul',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Mitsubhishi',
    model: 'P-200X',
    bedrooms: 3,
    bathrooms: 4,
    area: '250 sq ft',
    seller: 'Saini enterprises',
  },
  {
    id: 2,
    image: mitsubhishi2,
    name: 'Panasonic ac dive',
    price: 'Rs 345.18',
    description: 'Ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Rohini,New delhi',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Delta',
    model: 'DX-88',
    bedrooms: 3,
    bathrooms: 4,
    area: '450 sq ft',
    seller: 'Yogesh saini',
  },{
    id: 1,
    image: mitsubhishi,
    name: 'Mitsubhishi Ac drive',
    price: 'Rs 213.23',
    description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Ludhiana, Chakki pul',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Mitsubhishi',
    model: 'P-200X',
    bedrooms: 3,
    bathrooms: 4,
    area: '250 sq ft',
    seller: 'Saini enterprises',
  },
  {
    id: 2,
    image: mitsubhishi2,
    name: 'Panasonic ac dive',
    price: 'Rs 345.18',
    description: 'Ground level Co-op apartment in the desirable Bay Terrace neighborhood',
    location: 'Rohini,New delhi',
    featured: true,
    tags: ['Sales', 'Active'],
    brand: 'Delta',
    model: 'DX-88',
    bedrooms: 3,
    bathrooms: 4,
    area: '450 sq ft',
    seller: 'Yogesh saini',
  }
];

const ProductCards = () => {
  const navigate = useNavigate();

  const handleLoadMore = () => {
    navigate('/all-products'); // This should match the route in your router
  };

  return (
    <div className="product-cards-wrapper">
      <h2 className="section-title">Explore the latest properties available</h2>
      <div className="card-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image">
              <img src={item.image} alt={item.name} />
              {item.featured && <span className="badge badge-featured">Featured</span>}
              <div className="badge-group">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="badge badge-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="product-details">
              <div className="location">{item.location}</div>
              <h3 className="title">{item.name}</h3>
              <div className="price">{item.price}</div>
              <p className="desc">{item.description}</p>
              <div className="info">
                <span>🛏 {item.bedrooms}</span>
                <span>🛁 {item.bathrooms}</span>
                <span>📐 {item.area}</span>
              </div>
              <div className="footer">
                <span className="seller">👤 {item.seller}</span>
                <div className="actions">
                  <button>❤️</button>
                  <button>🔗</button>
                </div>
              </div>
              <div className="brand-info">
                <strong>Brand:</strong> {item.brand} | <strong>Model:</strong> {item.model}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-container">
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More Products →
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
