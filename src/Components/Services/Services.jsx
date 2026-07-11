import React from "react";
import "./Services.css";

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
  {
    icon: <FiSmartphone />,
    title: "Responsive Websites",
    desc: "Beautiful websites that work perfectly across mobile, tablet and desktop devices.",
    tag: "Mobile First",
  },
  {
    icon: <FiBriefcase />,
    title: "Business Websites",
    desc: "Professional websites that build trust and generate quality leads.",
    tag: "SEO Ready",
  },
  {
    icon: <FiUser />,
    title: "Portfolio Websites",
    desc: "Creative portfolio websites that beautifully showcase your work.",
    tag: "Creative Design",
  },
  {
    icon: <FiShoppingCart />,
    title: "E-Commerce",
    desc: "Modern online stores with secure checkout and premium shopping experience.",
    tag: "Secure Payments",
  },
  {
    icon: <FiTool />,
    title: "Website Maintenance",
    desc: "Continuous monitoring, updates and optimization for your website.",
    tag: "24/7 Support",
  },
  {
    icon: <FiRefreshCw />,
    title: "Website Redesign",
    desc: "Transform outdated websites into premium digital experiences.",
    tag: "Modern UI",
  },
  {
    icon: <FiBookOpen />,
    title: "Educational Websites",
    desc: "Interactive websites for schools, institutes and online courses.",
    tag: "Interactive",
  },
  {
    icon: <FiCalendar />,
    title: "Event Websites",
    desc: "Event registration, schedules and attendee management.",
    tag: "Easy Booking",
  },
  {
    icon: <FiMonitor />,
    title: "Web Applications",
    desc: "Custom web applications tailored for your business.",
    tag: "Custom Built",
  },
];

export default function Services() {
  return (
    <section id="services">

      <div className="services-header section-header">

        <h2 className="section-title">
          Our Services
        </h2>

        <p className="section-subtitle">
          We design and develop premium digital experiences
          that help businesses grow faster online.
        </p>

        <span className="section-accent"></span>

      </div>

      <div className="services-grid">
                {services.map((service, index) => (

          <div
            className={`service-card card-${index + 1}`}
            key={index}
          >

            {/* Glow */}
            <div className="card-glow"></div>

            {/* Shine */}
            <div className="card-shine"></div>

            {/* Icon */}
            <div className="service-icon">
              {service.icon}
            </div>

            {/* Title */}
            <h3>
              {service.title}
            </h3>

            {/* Description */}
            <p>
              {service.desc}
            </p>

            {/* Tag */}
            <div className="service-tag">
              {service.tag}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
