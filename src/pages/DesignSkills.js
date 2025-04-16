import React from "react";
// import { useState } from 'react';
import "./Skills.css"; 

import canva from './assets/canva.png';
import figma from './assets/figma.png';


import SkillIcon from "./SkillIcon";

function SkillsSection() {
  const skills= [
   
  
    { src: canva, alt: "canva" },

   
  
    { src: figma, alt: "figma" },
   
  
  ];

  return (
  

       <div className="section-2">
      <p className="tag">&lt;Designing&gt;</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
      <p className="second-tag">&lt;/Designing&gt;</p>
      </div> 
    
  );
}

export default  SkillsSection;