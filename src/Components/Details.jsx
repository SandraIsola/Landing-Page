import React from 'react';
import ContactUs from "../Assets/contact-form.png";
import PhoneIcon from "../Assets/phone-icon.png";
import SignUp from "../Assets/sign-up.png";


const Details = () => {
  const workDetails = [
{
    image:ContactUs,
    title: "Contact Us",
    text:"Visit our website and fill out the contact form with your name, email address, phone number, and a message regarding your car tracking business inquiry",
},
{
    image:PhoneIcon,
    title: "Schedule a Consultation",
    text:"Once we receive your inquiry, we will contact you to schedule a consultation. During the consultation, we will discuss your business needs in detail, and provide you with information about our car tracking solutions",
},
{
    image:SignUp,
    title: "Sign up for our services",
    text:"We will provide you with all the necessary documentation, including the contract, terms and conditions, and payment details. Once you sign up, we will install the GPS tracking device in your vehicles and provide you with access to our web-based platform",
},
  ];
  return (
    <div className="details-section-wrapper">
      <div className="details-section-top">
        <p className="primary-subheading">Details</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        The Process involves monitoring a vehicle's location and behavior using a GPS device. The device transmits data to a central server using wireless communication technology. Data analysis can provide insights for optimizing routes and improving fleet management.
        </p>
      </div>
      <div className='details-section-bottom'>
      {workDetails.map((data) => (
        <div className='details-section-info' key={data.title}>
        <div className='info-boxes-img-container'>
        <img src={data.image} />
</div>
<h2>{data.title}</h2>
<p>{data.text}</p>
        </div>
      )) }

      </div>
      </div>
  );
};

export default Details;