// Overlay.js
import React from "react";
import "./Overlay.css";

const Overlay = ({show}:{show: boolean}) => {
  if (!show) return null; // نمایش نده وقتی show برابر با false است
  
  return (
    <div className="overlay">
      در حال بارگذاری...
    </div>
  );
}

export default Overlay
