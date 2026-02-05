import React from "react";
import experienceIcon from "./assets/experience.png";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2 years <br />
                Full Stack Web Developer
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelor’s Degree in Computer Application <br />
                Post Graduate Diploma in Web Development
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hi, I’m Harsh Brahmkshatriya, a passionate Full-Stack Web
              Developer with expertise in the MERN stack (MongoDB, Express.js,
              React.js, and Node.js) and Spring Boot. I specialize in building
              high-performance web applications, optimizing backend services,
              and crafting dynamic user interfaces that enhance engagement and
              usability. I hold a Bachelor of Computer Applications from Veer
              Narmad South Gujarat University and am currently pursuing Web
              Development at Conestoga College. My professional journey includes
              working as a Software Engineer at Durvasa Infotech, where I
              improved website performance, optimized APIs, and contributed to
              Agile-driven development processes. With a strong foundation in
              React.js, Redux, Node.js, MongoDB, Docker, and Spring Boot, I
              thrive on tackling complex problems and delivering seamless
              digital experiences.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
