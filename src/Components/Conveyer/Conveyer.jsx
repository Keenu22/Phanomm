import React, { useEffect, useState } from "react";
import "./Conveyer.css";

const data = [
  { value: "3x", text: "Faster release cycle" },
  { value: "40%", text: "Reduction in manual administration time" },
  { value: "60%", text: "Software development reusability" },
  { value: "40%", text: "Cost Optimization" }
];

const Conveyer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Rotates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="conveyer-container">
      {data.map((item, i) => (
        <div key={i} className={`conveyer-box ${i === index ? "active" : ""}`}>
          <span>{item.value}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Conveyer;
