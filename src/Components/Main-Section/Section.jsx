import React, { useEffect, useState } from "react";
import "./Section.css";
import { default as SEOImage1, default as SEOImage2 } from "./SEOImage.png"; // First Image & Second Image

const Section = () => {
  // Counter State
  const [onlineSupport, setOnlineSupport] = useState(0);
  const [webApps, setWebApps] = useState(0);
  const [experience, setExperience] = useState(0);

  // Image State
  const [currentImage, setCurrentImage] = useState(SEOImage1);
  const images = [SEOImage1, SEOImage2];

  useEffect(() => {
    // Counter Animation
    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(count);
      }, 20);
    };

    animateCounter(setOnlineSupport, 24);
    animateCounter(setWebApps, 100);
    animateCounter(setExperience, 5);

    // Image Transition Effect
    let index = 0;
    const imageInterval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="hero-section">
      {/* Left Section - Content */}
      <div className="hero-content">
        <h1>
          <span id="gradient">Let's innovation </span> meets your excellence
        </h1>
        <p>Excellence refined, innovation ignited, the future starts here.</p>
        <button className="appointment-btn">Book An Appointment</button>
      </div>

      {/* Right Section - Image and Stats */}
      <div className="hero-right">
        {/* Animated SEO Image */}
        <img src={currentImage} alt="SEO Illustration" className="seo-image" />

        {/* Statistics */}
        <div className="hero-stats">
  <div className="stat-item">
    <span className="stat-number">{onlineSupport}/7</span>
    <span className="stat-text"> Online Support</span>
    <div className="divider"></div>
  </div>
  <div className="stat-item">
    <span className="stat-number">{webApps}+</span>
    <span className="stat-text">Web Developed & Applications</span>
    <div className="divider"></div>
  </div>
  <div className="stat-item">
    <span className="stat-number">{experience}+</span>
    <span className="stat-text">Years Experience</span>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default Section;
