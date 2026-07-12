import React from "react";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ecommerce from "../../assets/ecommerce.webp";
import business from "../../assets/business.webp";
import portfolio from "../../assets/portfolioslider.webp";
import webapp from "../../assets/webapp.webp";

const slides = [
  {
    id: 1,
    badge: "🛒 E-Commerce Website",
    title: (
      <>
        Build Online
        <br />
        <span className="gradient-text">
          Stores That Sell 24/7
        </span>
      </>
    ),
    description:
      "Launch a premium online store with secure payments, fast performance and seamless shopping experience that boosts your sales.",
    primaryBtn: "View Our Work",
    secondaryBtn: "Start Your Store",
    image: ecommerce,
  },

  {
    id: 2,
    badge: "🏢 Business Website",
    title: (
      <>
        Professional Websites
        <br />
        <span className="gradient-text">
          That Build Trust
        </span>
      </>
    ),
    description:
      "Create a modern business website that strengthens your brand and generates more quality leads.",
    primaryBtn: "View Our Work",
    secondaryBtn: "Build My Website",
    image: business,
  },

  {
    id: 3,
    badge: "💼 Portfolio Website",
    title: (
      <>
        Showcase Your
        <br />
        <span className="gradient-text">
          Skills & Projects
        </span>
      </>
    ),
    description:
      "Present your work beautifully with a premium portfolio that impresses clients and recruiters.",
    primaryBtn: "View Our Work",
    secondaryBtn: "Create Portfolio",
    image: portfolio,
  },

  {
    id: 4,
    badge: "⚙️ Custom Web Application",
    title: (
      <>
        Powerful Business
        <br />
        <span className="gradient-text">
          Web Applications
        </span>
      </>
    ),
    description:
      "Admin panels, booking systems, dashboards and custom business applications built for your workflow.",
    primaryBtn: "View Our Work",
    secondaryBtn: "Discuss Project",
    image: webapp,
  },
];

const Header = () => {
  return (
    <section id="home">

      <div className="Container">

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
          ]}
          loop={true}
          speed={700}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
                    pagination={{
            el: ".hero-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          className="heroSwiper"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="hero-slide">

                {/* LEFT CONTENT */}

                <div className="header-content">

                  <div className="header-badge">
                    {item.badge}
                  </div>

                  <h1>
                    {item.title}
                  </h1>

                  <p>
                    {item.description}
                  </p>

                  <div className="header-btn">

                    <button
                      className="header-btn1"
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          })
                      }
                    >
                      {item.primaryBtn} ↗
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
                      {item.secondaryBtn}
                    </button>

                  </div>

                </div>

                {/* RIGHT IMAGE */}

                <div className="header-img">

                  <img
                    src={item.image}
                    alt={item.badge}
                    loading="lazy"
                    draggable="false"
                  />

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
                {/* Pagination (Center) */}
        <div className="hero-pagination"></div>

        {/* Navigation (Below Pagination) */}
        <div className="hero-navigation">

          <button
            className="hero-prev"
            aria-label="Previous"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="hero-next"
            aria-label="Next"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Header;