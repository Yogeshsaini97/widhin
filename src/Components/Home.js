import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ExperienceBox from "./ExperienceBox";
import ServicesCards from "./ServiceGrid";

import HappyClients from "./HappyClients";
import ProductCards from "./ProductCards";
import Footer from "./Footer";
import Markets from "../Pages/Our_markets/Markets";
import HeroSection from "./HeroSection";
import CapabilitiesStrip from "./MoreExamples/CapabilitiesStrip";
import WhyChooseUs from "./MoreExamples/WhyChooseUs";
import ProcessFlow from "./MoreExamples/ProcessFlow";
import FeaturedProjects from "./MoreExamples/FeaturedProjects";
import CertificationsStrip from "./MoreExamples/CertificationsStrip";
import IndustryCTA from "./MoreExamples/IndustryCTA";
import Testimonials from "./MoreExamples/Testimonials";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
           <HeroSection/>
            <HappyClients />
             <ServicesCards />
             <WhyChooseUs />
             <CertificationsStrip/>
             
               <ProcessFlow/>
                <Markets/>
           {/* <CapabilitiesStrip /> */}

<ExperienceBox /> 

        {/* <ImageCarousel /> */}
        
       
        
       
       


       

<FeaturedProjects/>
 <Testimonials />
        <ProductCards />
       
<IndustryCTA/>
    
        
      </div>
    </div>
  );
};
