import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import {
  FiSmartphone,
  FiBriefcase,
  FiUser,
  FiShoppingCart,
  FiTool,
  FiRefreshCw,
  FiBookOpen,
  FiCalendar,
  FiMonitor,
} from "react-icons/fi";

const services = [
  { icon: <FiSmartphone />, title: "Responsive Websites", desc: "Beautiful websites that work perfectly on mobile, tablet and desktop.", tag: "Mobile First" },
  { icon: <FiBriefcase />, title: "Business Websites", desc: "Professional business websites that build trust and generate leads.", tag: "SEO Ready" },
  { icon: <FiUser />, title: "Portfolio Websites", desc: "Creative portfolios that showcase your skills and projects beautifully.", tag: "Creative Design" },
  { icon: <FiShoppingCart />, title: "E-Commerce", desc: "Modern online stores with secure checkout and seamless shopping.", tag: "Secure Payments" },
  { icon: <FiTool />, title: "Website Maintenance", desc: "Continuous updates, bug fixes and security monitoring.", tag: "24/7 Support" },
  { icon: <FiRefreshCw />, title: "Website Redesign", desc: "Transform outdated websites into modern digital experiences.", tag: "Modern UI" },
  { icon: <FiBookOpen />, title: "Educational Websites", desc: "Interactive websites for schools, institutes and online courses.", tag: "Interactive" },
  { icon: <FiCalendar />, title: "Event Websites", desc: "Event registration, schedules and attendee management solutions.", tag: "Easy Booking" },
  { icon: <FiMonitor />, title: "Web Applications", desc: "Custom web applications tailored for your business.", tag: "Custom Built" },
];

const Services = () => {
  return (
    <section id="services">
      <div className="services-header section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We design and develop premium digital experiences that help
          businesses grow faster online.
        </p>
        <span className="section-accent"></span>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card-wrapper"
            key={index}
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tag">{service.tag}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;