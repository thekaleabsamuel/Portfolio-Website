import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Developer/Designer</h2>
        <p>
          Passionate Fullstack Developer | Transforming Ideas into reality regardless of medium or tech.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src="https://i.imgur.com/xmqNklel.png" alt="" />
        </div>


      
        <div>
          <div className="tech-icon ">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="https://i.imgur.com/jiwIeOh.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="https://i.imgur.com/C1qJ9ND.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
