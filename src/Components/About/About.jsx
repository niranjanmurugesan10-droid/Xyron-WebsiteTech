import React from "react";
import "./About.css";
import aboutImg from "../../assets/Aboutimg.webp";

import {
  FiTarget,
  FiEye,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import {
  TbDiamond,
  TbRocket,
} from "react-icons/tb";

const About = () => {
  return (
   <section id="about">

      {/* Header */}

      <div className="about-header">

        <span className="about-badge">
          ✨ About XyronTech
        </span>

        <h2>
          Building
          <span> Digital Experiences </span>
          That Inspire Growth
        </h2>

        <p>
          We help startups, creators and businesses build beautiful,
          responsive and high-performing websites that leave a lasting
          impression.
        </p>

      </div>

      {/* Main */}

      <div className="about-container">

        {/* Left */}

        <div className="about-left">

          <div className="about-card">

            <div className="icon-box">
              <FiTarget />
            </div>

            <div>
              <h3>Our Mission</h3>

              <p>
                Deliver innovative digital solutions that help
                businesses grow faster and smarter.
              </p>
            </div>

          </div>

          <div className="about-card">

            <div className="icon-box">
              <FiEye />
            </div>

            <div>
              <h3>Our Vision</h3>

              <p>
                Become one of the most trusted web development
                partners for modern businesses.
              </p>
            </div>

          </div>

          <div className="about-card">

            <div className="icon-box">
              <TbDiamond />
            </div>

            <div>
              <h3>Our Values</h3>

              <p>
                Innovation, transparency, quality and continuous
                learning define everything we build.
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="about-right">

          <div className="image-wrapper">

            <img
              src={aboutImg}
              alt="About XyronTech"
            />

            <div className="floating-card card1">
              <TbRocket />
              <div>
                <h4>8+</h4>
                <span>Projects</span>
              </div>
            </div>

            <div className="floating-card card2">
              <FiUsers />
              <div>
                <h4>10+</h4>
                <span>Team Members</span>
              </div>
            </div>

          </div>

          <div className="stats">

            <div className="stat-box">
              <FiShield />
              <h3>100%</h3>
              <p>Commitment</p>
            </div>

            <div className="stat-box">
              <TbRocket />
              <h3>24/7</h3>
              <p>Support</p>
            </div>

            <div className="stat-box">
              <TbDiamond />
              <h3>Premium</h3>
              <p>Quality</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;