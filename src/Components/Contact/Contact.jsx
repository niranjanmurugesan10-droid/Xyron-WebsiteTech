import React from "react";
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
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 9843336980",
    link: "https://wa.me/9843336980",
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
  return (
    <section className="contact-section" id="contact">

      {/* Header */}

      <div className="contact-header">

        <span className="contact-badge">
          ✦ Contact Us
        </span>

        <h2>
          Let's Build
          <span> Something Amazing</span>
        </h2>

        <p>
          Have an idea or project in mind? We'd love to hear from you.
          Fill out the form below and we'll get back to you shortly.
        </p>

      </div>

      <div className="contact-wrapper">

        {/* LEFT */}

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

                <div className="contact-icon">
                  {item.icon}
                </div>

                <div>

                  <h4>{item.title}</h4>

                  <span>{item.value}</span>

                </div>

              </a>

            ))}

          </div>

          {/* Social */}

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

        {/* RIGHT */}

        <div className="contact-form-card">

          <h3 className="contact-form-title">
            Send Message
          </h3>

          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >

            {/* Web3Forms */}

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

            <div className="input-row">

              <select name="service" required>

                <option value="">
                  Select Service
                </option>

                <option>Business Website</option>

                <option>E-Commerce</option>

                <option>Portfolio Website</option>

                <option>Web Application</option>

                <option>Landing Page</option>

              </select>

              <select name="budget" required>

                <option value="">
                  Budget
                </option>

                <option>₹4K - ₹10K</option>

                <option>₹10K - ₹25K</option>

                <option>₹25K - ₹50K</option>

                <option>Above ₹50K</option>

              </select>

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