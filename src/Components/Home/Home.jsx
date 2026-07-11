import React from "react";
import "./Home.css";
import headerimg from "../../assets/headerimg.webp";

const Header = () => {
  return (
    <section id="home">
      <div className="Container">
        <div className="header-content">
          <h1>
            <span className="highlights-1">We Build Modern </span>
            <span className="highlights-2">Web Experiences </span>
            <span className="highlights-3">That Convert</span>
          </h1>

          <p>
            We create modern, responsive and high-performance websites
            that help businesses establish a strong digital presence and
            achieve meaningful growth.
          </p>

          <div className="header-btn">
            <button
              className="header-btn1"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              View Our Work ↗
            </button>

            <button
              className="header-btn2"
              onClick={() =>
                window.open(
                  "https://wa.me/919626782279?text=Hello%20XyronTech,%20I'm%20interested%20in%20building%20a%20website.",
                  "_blank"
                )
              }
            >
              Let's Talk
            </button>
          </div>

          <div className="header-card">
            <div className="header-card-content">
              <h3>
                🎁 Free Consultation — No Charges, No Commitment
              </h3>

              <p>
                Tell us your idea. We'll guide you for free within
                24 hours.
              </p>
            </div>

            <div className="header-card-button">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919626782279?text=Hello%20XyronTech,%20I%20would%20like%20to%20book%20a%20free%20consultation.",
                    "_blank"
                  )
                }
              >
                Book Free Call
              </button>
            </div>
          </div>
        </div>

        <div className="header-img">
          <img src={headerimg} alt="XyronTech Hero" />
        </div>
      </div>
    </section>
  );
};

export default Header;
