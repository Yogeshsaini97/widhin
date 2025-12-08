import React, { useRef } from "react";
import "./ImageGallery.css";

export default function ImageGallery({ item }) {
  const imgRef = useRef();

  // Simple zoom: use CSS transform on hover. For a more advanced lens,
  // you'd implement mousemove and background-position logic.
  return (
    <div className="image-gallery">
      <div className="main-image-box zoom-wrap">
        <img ref={imgRef} src={item.image} alt={item.name} className="main-image zoom" />
      </div>

      <div className="thumbnail-row">
        {/* You may expand to real thumbnails array; using same image for now */}
        {[0,1,2].map((idx) => (
          <img key={idx} src={item.image} alt={`${item.name}-${idx}`} className="thumbnail-img" />
        ))}
      </div>
    </div>
  );
}
