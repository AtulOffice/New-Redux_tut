import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our application! We are committed to delivering the best
        user experience for our clients. Our platform offers a variety of
        features designed to help you get the most out of your workflow.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to build tools that make it easier for people to
          collaborate and work efficiently, saving time and increasing
          productivity.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          We are a small team of passionate developers, designers, and project
          managers dedicated to providing the best solutions for our users.
        </p>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to{" "}
          <a href="/contact" className="about-link">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
