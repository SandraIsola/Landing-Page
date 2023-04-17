import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Banner" />
      </div>
      <div className="home-text-section">
      <h1 className="primary-heading">
      Live Vehicle Monitoring made easy with Fulltrac
      </h1>
<p className="primary-text">
Keep tabs on your car's location and driving habits with our car tracking website. Sign up now for peace of mind and convenient monitoring.
</p>
<button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      </div>
  );
};

export default Home;
