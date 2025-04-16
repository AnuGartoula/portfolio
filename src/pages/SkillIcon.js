import React from "react";
import "./SkillIcon.css";

const SkillIcon = ({ src, alt, highlight }) => {
  return (
    <div className={`skill-icon ${highlight ? "highlight" : ""}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SkillIcon;
