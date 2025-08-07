import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    company: '',
    location: '',
    email: '',
    phone: '',
    enquiryType: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-wrapper">
     <div className="contact-header">
  <h1 className="main-heading">How Can We Help?</h1>
  <p className="subheading">We're here to answer your questions and provide support.</p>
  <p className="breadcrumb">Home / Contact Us</p>
</div>

      <div className="contact-container">
        <div className="contact-left">
          <h3>Ludhiana Office</h3>
          <p><strong>Address:</strong> SAINI ENTERPRISES,  7520a/15, 7b Streets, New Amar Nagar Ludhiana Punjab
 India 141003</p>
          <p><strong>Mob:</strong> +91 9815085499 / 9878585499</p>
          <p><strong>Email:</strong> sainienterprise1991@gmail.com</p>
          <p><strong>GST No.:</strong> 03EJVPS6459H1ZE </p>
          <p><strong> MSME No. :</strong> PB-12-0031533</p>

          <p><strong> Our Offices:</strong> Ludhiana(pb) , Jammu(j&k)</p>

          {/* <h3>Delhi Office</h3>
          <p><strong>Address:</strong> Sector-63, GB Nagar, Noida-201301</p>
          <p><strong>Mob:</strong> +91-9810290012, +91-8062358946</p>
          <p><strong>Email:</strong> rbisht@selec.com</p>

          <h3>Karnataka Office</h3>
          <p><strong>Address:</strong> Rajagopala Nagar, Bangalore – 560058</p>
          <p><strong>Mob:</strong> +91-9945901604</p>
          <p><strong>Email:</strong> ashokakumar@selec.com</p> */}
        </div>

        <div className="contact-right">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group radio-group">
    <label className="radio-option">
      <input type="radio" name="title" value="Mr" onChange={handleChange} />
      <span className="custom-radio"></span>
      Mr
    </label>
    <label className="radio-option">
      <input type="radio" name="title" value="Ms" onChange={handleChange} />
      <span className="custom-radio"></span>
      Ms
    </label>
  </div>

            <input type="text" name="name" placeholder="Name *" onChange={handleChange} required />
            <input type="text" name="company" placeholder="Company *" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location *" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone *" onChange={handleChange} required />

            <select name="enquiryType" onChange={handleChange} required>
              <option value="">Select Enquiry Type</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>

            <input type="text" name="subject" placeholder="Subject *" onChange={handleChange} required />
            <textarea name="message" placeholder="Message *" rows="4" onChange={handleChange} required />

           

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
