import React from "react";
import { useState } from 'react';
import "./Skills.css"; // We'll create this CSS file for styling
import SkillImage from './assets/skills.png'
function Skills() {
  const [skills] = useState([
    { name: "HTML", shortcode: "Ht", percentage: 90 },
    { name: "CSS", shortcode: "CSS", percentage: 90 },
    { name: "FLUTTER", shortcode: "Fl", percentage: 75 },
    { name: "REACT", shortcode: "Re", percentage: 60 },
    { name: "FIGMA", shortcode: "Fi", percentage: 80 },
  ]);

  return (
    <div className="skills_container">
        <div className="skill_image">
            <img src = {SkillImage} alt="skillimage"></img>
        </div>
      <div className="title_1">
        <h2>What my Skills Include</h2>
      </div>
      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
            <div 
  className="progress-fill" 
  style={{ "--fill-width": `${skill.percentage}%` }}
></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;