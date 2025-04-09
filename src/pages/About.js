import React from "react";
import './About.css';
import AboutImage from './assets/logo.png'
function About(){
    return(
        <div className="about_container">
            <div className="image">
                <img src={AboutImage} alt="aboutImage"></img>
            </div>
            <div className="about_title">
            <h1>About Me....</h1>
            </div>
           <div className="about_details">
            <p>
                Hello, I am learning react and flutter <br/>
                I spent hours asking chatgpt to generate me a perfect "About me" page for my portfolio <br/>
                let's just say it is work in progress.... just like me 


            </p>
           </div>

        </div>

    )
}

export default About