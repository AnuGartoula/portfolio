import React from "react";
import "./SplashScreen.css";
import splashlogo from './assets/maiicon.jpg'
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src= {splashlogo} className="splash-logo" alt="logo" />
    </div>
  );
};

export default SplashScreen;