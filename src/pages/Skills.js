import React from "react";
// import { useState } from 'react';
import "./Skills.css"; 
import SkillImage from './assets/skills.png';
import css from './assets/css.png';
import html from './assets/html.png';
import js from './assets/js.png';
import flutter from './assets/flutter.png';
import react from './assets/react.png';
import SkillsSection from "./DesignSkills";
import SkillIcon from "./SkillIcon";

function Skills() {
  const skills= [
   
  
    { src: css, alt: "Css" },
    { src: js, alt: "JavaScript", highlight: true },
   
  
    { src: html, alt: "htm;" },
    { src: react, alt: "React" },
    { src: flutter, alt: "flutter" },
  
  ];

  return (
    <div className="skills_container">
        <div className="skill_image">
            <img src = {SkillImage} alt="skillimage"></img>
        </div>
      <div className="title_1">
        <h2>What my Skills Include</h2>
      </div>




      <p className="tag">&lt;programming&gt;</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
      <p className="second-tag">&lt;/programming&gt;</p>

      {/* <div className="section-2">
      <p className="tag">&lt;Designing&gt;</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
      <p className="tag">&lt;/Designing&gt;</p>
      </div> */}
      {/* <div className="skills-list">
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
      </div> */}

      <SkillsSection/>
    </div>
  );
}

export default Skills;