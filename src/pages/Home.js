import React from "react";
import './Home.css';
import { Link } from "react-router-dom"; 
import portfolioImage from './assets/portfolio1.png'
import ThemeOption from "./ThemeOption";

function Home() {
  return (
    <div className="container">
      <div className="main-container">
        <div className="content">
          <p>
            HI, I am Anu, I am a computer science student. I like to develop things.
            <br/>
            Click Here to learn more about <Link to='skills'> My Skills</Link>
          </p>
          <img src={portfolioImage} alt="Portfolio" />
        </div>
      </div>

      <div className="theme-options">
        <ThemeOption theme="dark"/>
        <ThemeOption theme="light"/>
        <ThemeOption theme="purple"/>
        <ThemeOption theme="green"/>
      </div>
    </div>
  );
}

export default Home;
