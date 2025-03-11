import React from "react";
import "./Vps.css";
import Adarshpic from "./unsplash_tvPnys_kY88.png";

const Vps = () => {
  return (
    <section className="vps-section">
      {/* Left Half */}
      <div className="left-half">
        <div className="profile-info">
          <div>
            <h2>Adarsh</h2>
            <p>Phantom Guide</p>
          </div>
          <img src={Adarshpic} alt="Adarsh" className="profile-img" />
        </div>
      </div>

      {/* Right Half */}
      <div className="right-half">
        <p className="vps-subtitle">Virtual Private Sector</p>
        <h1 className="vps-heading">
          Flexible, private, and affordable VPS Hosting
        </h1>
        <button className="vps-button">
          Get Plans and Pricing <span className="arrow">&rarr;</span>
        </button>
        {/* Star Ratings */}
        <div className="ratings">
          ⭐⭐⭐⭐⭐
        </div>
      </div>
    </section>
  );
};

export default Vps;


