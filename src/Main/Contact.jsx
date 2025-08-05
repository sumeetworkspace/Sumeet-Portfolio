import React, { useState } from "react";
import "./Contact.css";
import Instagram from "./instagram.png";
import Github from "./github.png";
import Facebook from "./facebook.png";
import Linkedin from "./linkedin.png"
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="Main5">
      <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact us</h2>
        <div className="row">
          <div className="input-group">
            {/* <label>First Name</label> */}
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            {/* <label>Last Name</label> */}
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            {/* <label>Email</label> */}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            {/* <label>Phone Number</label> */}
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group full">
          <label>What do you have in mind</label>
          <textarea
            name="message"
            placeholder="Please enter query..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-wrapper">
        <button type="submit" className="Send-Msg">Send Message</button>
        </div>

      </form>

      <div className="contact-info">
        <p>
          I'm always happy to connect — whether you have a question, want to discuss ideas, or just want to say hello. Fill out the form below and I’ll get back to you as soon as possible!
        </p>

        <div className="info-item">
          📞 <span>+917039255719</span>
        </div>
        <div className="info-item">
          💌 <span>sumeetworkspace10@gmail.com</span>
        </div>
        <div className="info-item">
          📍 <span>Navi Mumbai</span>
        </div>

        <div className="social-icons">
        <span>
          <a href="https://github.com/sumeetworkspace" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/sumeet-jadhav-40687036a" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/_sumeet.jadhav7_/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/sumeet.jadhav.716533" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
        </span>
      </div>

      </div>
    </div>
  );
};

export default Contact;
