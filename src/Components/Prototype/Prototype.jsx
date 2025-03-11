import React, { useEffect, useState } from "react";
import "./Prototype.css";

const textArray = [
  "Quality Assurance",
  "Deployment",
  "Congratulations",
  "Discovery And Planning",
  "Design And Prototyping",
  "Development",
];

const Prototype = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3s (6 times per cycle)

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="prototype-container">
      {/* Animated Circles */}
      <div className="circle-container">
        <div className="circle blue"></div>
        <div className="circle pink"></div>
        <div className="circle white"></div>
      </div>

      {/* Changing Text in Center */}
      <p className="changing-text">{textArray[textIndex]}</p>
    </div>
  );
};

export default Prototype;
