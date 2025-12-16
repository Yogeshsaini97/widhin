import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ExperienceBox from "./ExperienceBox";
import ServicesCards from "./ServiceGrid";
import CategoryStrip from "./CategoryStrip";
import ClientStrip from "./ClientStrip";
import HappyClients from "./HappyClients";
import ProductCards from "./ProductCards";
import Footer from "./Footer";
import Markets from "../Pages/Our_markets/Markets";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <ImageCarousel />
        {/* <CategoryStrip />  */}
        <ExperienceBox />
         <Markets/>
        <HappyClients />
        <ServicesCards />
        <ProductCards />
        <ClientStrip />
        
      </div>
    </div>
  );
};
