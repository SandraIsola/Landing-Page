import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai"

const Reviews = () => {
  return (
  <div className='details-section-wrapper'>
    <div className='details-section-top'>
    <p className="primary-subheading">Client Reviews</p>
        <h1 className="primary-heading">What Our Clients Think About Us?</h1>
        <p className="primary-text">
        Best tracking company we've worked with. I recommend them 100%, anyday anytime. "Louissa".
        </p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        My rider ran away with my bike, but I was able to retrieve it as a result of the installed car tracker on my bike, and I got him arrested. I can only imagine what would have happened if there was no tracker in it. Thanks for the services.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>James Beret</h2>
  </div>
  </div>
  ); 
};

export default Reviews;