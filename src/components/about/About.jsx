import React from "react";
import "./About.css";
import right_arrow from "../../assets/right-arrow.svg";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__content">
        <h1>
          Ready to dive into <span>HABOT?</span>
        </h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial
        </p>
        <div className="about__signUpBtn">
          <button>
            Sign up Today!
            <img className="arrow" src={right_arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="about__countries">
        <p>Abu Dhabi</p>
        <p>Dubai</p>
        <p>Sharja & Ajman</p>
        <p>Fujairah</p>
        <p>Ras Al Khaimah</p>
        <p>Umm Al Quwain</p>
      </div>
    </div>
  );
};

export default About;
