import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";

import {
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Pricing",
    id: "pricing",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const Navbar = ({ theme, onToggleTheme }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const whatsappLink =
    "https://wa.me/919626782279?text=Hello%20XyronTech,%20I'm%20interested%20in%20your%20web%20development%20services.";

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);

    }

  };

  useEffect(() => {

    const handleScroll = () => {

      menuItems.forEach((item) => {

        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {

          setActiveSection(item.id);

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className="navbar">

      {/* Logo */}

      <div
        className="nav-logo"
        onClick={() => scrollToSection("home")}
      >

        <img
          src={logo}
          alt="XyronTech Logo"
        />

        <h2>

          <span>Xyron</span>Tech

        </h2>

      </div>

      {/* Desktop Menu */}

      <ul className="nav-menu">

        {menuItems.map((item) => (

          <li

            key={item.id}

            className={
              activeSection === item.id
                ? "active"
                : ""
            }

            onClick={() =>
              scrollToSection(item.id)
            }

          >

            {item.name}

          </li>

        ))}

      </ul>

      <div className="nav-actions">
        <button
          className={`theme-switch ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          <span className="switch-track">
            <span className="switch-thumb">
              {theme === 'light' ? <FiSun /> : <FiMoon />}
            </span>
          </span>
        </button>

        <button
          className="nav-btn"
          onClick={() =>
            window.open(
              whatsappLink,
              "_blank"
            )
          }
        >
          Get in Touch
        </button>
      </div>

      {/* Mobile Menu Icon */}

      <div

        className="menu-toggle"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }

      >

        {menuOpen ? <FiX /> : <FiMenu />}

      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        {menuItems.map((item) => (

          <button

            key={item.id}

            className={
              activeSection === item.id
                ? "active"
                : ""
            }

            onClick={() =>
              scrollToSection(item.id)
            }

          >

            {item.name}

          </button>

        ))}

        <button
          className="theme-toggle mobile-theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>

        <button
          className="mobile-btn"
          onClick={() =>
            window.open(
              whatsappLink,
              "_blank"
            )
          }
        >
          Get in Touch
        </button>

      </div>

    </header>

  );

};

export default Navbar;