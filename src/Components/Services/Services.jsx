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
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiSmartphone />,
    title: "Responsive Websites",
    desc: "Beautiful websites that work perfectly on mobile, tablet and desktop."
  },
  {
    icon: <FiBriefcase />,
    title: "Business Websites",
    desc: "Professional business websites that build trust and generate leads."
  },
  {
    icon: <FiUser />,
    title: "Portfolio Websites",
    desc: "Creative portfolios that showcase your skills and projects beautifully."
  },
  {
    icon: <FiShoppingCart />,
    title: "E-Commerce",
    desc: "Modern online stores with secure checkout and seamless shopping."
  },
  {
    icon: <FiTool />,
    title: "Website Maintenance",
    desc: "Continuous updates, bug fixes and security monitoring."
  },
  {
    icon: <FiRefreshCw />,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern digital experiences."
  },
  {
    icon: <FiBookOpen />,
    title: "Educational Websites",
    desc: "Interactive websites for schools, institutes and online courses."
  },
  {
    icon: <FiCalendar />,
    title: "Event Websites",
    desc: "Event registration, schedules and attendee management solutions."
  },
  {
    icon: <FiMonitor />,
    title: "Web Applications",
    desc: "Custom web applications tailored for your business."
  },
];

const Services = () => {
  return (
    <section id="services">

      <div className="services-header">

        <span className="services-badge">
          ✨ Our Services
        </span>

        <h2>
          Solutions We
          <span> Build For You</span>
        </h2>

        <p>
          We design and develop premium digital experiences that
          help businesses grow faster online.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>
              Learn More
              <FiArrowRight />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Services;