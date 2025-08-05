import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ExperienceBox from "./ExperienceBox";
import ServicesCards from "./ServiceGrid";
import CategoryStrip from "./CategoryStrip";
import ClientStrip from "./ClientStrip";
import HappyClients from "./HappyClients";
import ProductCards from "./ProductCards";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <ImageCarousel />
        <CategoryStrip /> <ExperienceBox />
        <HappyClients />
        <ServicesCards />
        <ProductCards />
        <ClientStrip />{" "}
      </div>
      I am home
    </div>
  );
};
