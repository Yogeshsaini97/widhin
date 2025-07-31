import React from "react";
import "./CategoryStrip.css"; // External CSS for cleaner styles

const categories = ["Plc Panels", "Vfd Panels","CNC Panels","Drilling machine", "Polygon machine", "Labeling machine", "PLC", "HMI","VFD/AC Drive"];

const CategoryStrip = () => {
  return (
    <div className="category-strip">
      {categories.map((category, idx) => (
        <button key={idx} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryStrip;
