import React from "react";
import "./Loader.css"; // Add styling for the spinner

const Loader = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;