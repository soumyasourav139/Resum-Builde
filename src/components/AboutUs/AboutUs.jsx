import React from "react";
import "./AboutUs.css";
import RBlogo from "../../assets/aboutus.png";
const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="content">
        <div>
          <p >
          In Todays competetive world Everry working profeesional or freshe student need a good 
          Resume to show theire talent,Education and work Experience. In tis platform
          you just need to enter your detail and chose the format you like most and 
          that format Resume get download in your system.
            </p>
            <p>
          From students or entry-level job seekers to experienced executives,
           our Resume Builder offers job seekers a fast and easy way to create a resume.
            With pre-written, industry-specific phrases and recruiter-approved templates,
           Resume-Now enables users to download a polished and professional resume in minutes.
          </p>
        </div>
        <img src={RBlogo} alt="Logo_resumeBuilder" />
      </div>
    </div>
  );
};

export default AboutUs;
