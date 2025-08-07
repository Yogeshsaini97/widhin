import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Home } from './Components/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer';



function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact-us" element={<ContactUs />} />
     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
