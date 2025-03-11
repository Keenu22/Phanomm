import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Phanom Professionals</div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li
          className="dropdown"
          onClick={() => setIsServiceOpen(!isServiceOpen)}
        >
          <span>Services</span>
          {isServiceOpen && (
            <ul className="dropdown-menu">
              <li>Web Development</li>
              <li>App Development</li>
              <li>SEO Optimization</li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onClick={() => setIsTalentOpen(!isTalentOpen)}
        >
          <span>Hire Indian Talent</span>
          {isTalentOpen && (
            <ul className="dropdown-menu">
              <li>Frontend Developers</li>
              <li>Backend Developers</li>
              <li>UI/UX Designers</li>
            </ul>
          )}
        </li>

        <li>Our Portfolio</li>
        <li>Case Study</li>

        <li>
          <button className="appointment-btn">Book an Appointment</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
