import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Details" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        We offer reliable car tracking services with advanced technology
        </h1>
        <p className="primary-text">
        We are dedicated to providing you with the most reliable and efficient tracking service for your car. Our state-of-the-art technology allows you to monitor your car's location in real-time, giving you peace of mind knowing where your vehicle is at all times.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />Watch Video
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;
