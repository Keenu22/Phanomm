import React from "react";
import Logo1 from "./LogoClient1.png";
import Logo2 from "./LogoClient2.png";
import Logo3 from "./LogoClient3.png";
import Logo5 from "./LogoClient5.png";
import "./Screen.css"; // Ensure CSS is properly linked
import Vector from "./Vector.png";

const Screen = () => {
  return (
    <div className="logo-container">
      <div className="logo-track">
        <img src={Logo1} alt="Client Logo 1" className="logo-image" />
        <img src={Logo2} alt="Client Logo 2" className="logo-image" />
        <img src={Logo3} alt="Client Logo 3" className="logo-image" />
        <img src={Vector} alt="Vector" className="logo-image" />
        <img src={Logo5} alt="Client Logo 5" className="logo-image" />
        {/* Duplicate images to ensure seamless scrolling */}
        <img src={Logo1} alt="Client Logo 1" className="logo-image" />
        <img src={Logo2} alt="Client Logo 2" className="logo-image" />
        <img src={Logo3} alt="Client Logo 3" className="logo-image" />
        <img src={Vector} alt="Vector" className="logo-image" />
        <img src={Logo5} alt="Client Logo 5" className="logo-image" />
      </div>
    </div>
  );
};

export default Screen;
