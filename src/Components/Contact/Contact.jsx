import React, { useState } from "react";
import "./Contact.css";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Call Us",
    value: "+91 99944 72896, +91 96267 82279",
    link: "tel:+919994472896",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 9843336980, +91 99944 72896",
    link: "https://wa.me/919994472896",
  },
  {
    icon: <FiMail />,
    title: "Email",
    value: "xyronwebtechnology@gmail.com",
    link: "mailto:xyronwebtechnology@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Tamil Nadu, India",
    link: "https://maps.google.com",
  },
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header section-header">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have an idea or project in mind? We'd love to hear from you.
          Fill out the form below and we'll get back to you shortly.
        </p>
        <span className="section-accent" aria-hidden="true" />
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-card">
          <h3>Get In Touch</h3>

          <p>
            Whether you need a website, web application or digital
            solution, our team is ready to help you.
          </p>

          <div className="contact-list">
            {contactInfo.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="social-row">
            <a
              href="https://www.youtube.com/@NT_techstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaYoutube />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/nt_techworks"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="contact-form-title">Send Message</h3>

          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="ab88426e-b8dd-44a7-bd8a-2ef172ce7acf"
            />

            <input
              type="hidden"
              name="subject"
              value="New Enquiry from Xyron Tech Website"
            />

            <input
              type="hidden"
              name="from_name"
              value="Xyron Tech Contact Form"
            />

            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <input
              type="hidden"
              name="service"
              value={selectedService === "Other" ? customService : selectedService}
            />

            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className={`input-row ${selectedService === "Other" ? "service-other-row" : ""}`}>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select Service</option>
                <option>Business Website</option>
                <option>E-Commerce</option>
                <option>Portfolio Website</option>
                <option>Web Application</option>
                <option>Landing Page</option>
                <option>Other</option>
              </select>

              {selectedService === "Other" && (
                <input
                  type="text"
                  placeholder="Enter your service"
                  value={customService}
                  onChange={(e) => setCustomService(e.target.value)}
                  required
                />
              )}
            </div>

            <textarea
              name="message"
              rows="7"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">
              Send Message
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
