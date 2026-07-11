import React from "react";
import "./Footer.css";

import logo from "../../assets/logo.webp";

import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const contactInfo = [
  {
    icon: <FiMail />,
    title: "Email",
    value: "xyronwebtechnology@gmail.com",
    href: "mailto:xyronwebtechnology@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "+91 96267 82279",
    href: "tel:+919626782279",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Chennai, Tamil Nadu",
    href: "https://maps.google.com",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Xyron Tech" />
            <h2>
              <span>Xyron</span>Tech
            </h2>
          </div>

          <p>
            Building modern digital solutions for startups,
            businesses and creators with premium web
            experiences that leave a lasting impression.
          </p>

          <div className="footer-social">
            <a
              href="https://www.youtube.com/@xyron_web_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://github.com/Xyron-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/Xyron-webtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <FaArrowRight />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="footer-contact-card">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>XyronTech</strong>. All Rights Reserved.
          Crafted with ❤️ using React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
