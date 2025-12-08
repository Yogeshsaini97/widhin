import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Home } from './Components/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer';
import  AllProducts from './Pages/AllProducts';
import { ProductCategories } from './Pages/ProductCategories';
import { ProductItems } from './Pages/ProductItems';
import { Breadcrumbs } from './Pages/Breadcrumbs/Breadcrumbs';
import { ProductDetail } from './Pages/ProductDetail';



function App() {
  return (
    <Router>
      <Header/>
      {console.log(window.location.pathname)}
       
       {!(window.location.pathname==="/") && <Breadcrumbs />  }
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/all-products" element={<AllProducts />} />
          <Route path="/all-products/:productId" element={<ProductCategories />} />
        <Route path="/all-products/:productId/:categoryId" element={<ProductItems />} />
        <Route
          path="/all-products/product/:productId/:categoryId/:itemId" element={<ProductDetail />}
        />
     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
