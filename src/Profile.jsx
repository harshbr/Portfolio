import React from "react";
import harshImage from "./assets/harsh.jpeg";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import pdfFile from "./assets/Harsh.Brahmkshatriya.pdf";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={harshImage}
          alt="Harsh B profile picture"
          style={{ filter: "grayscale(100%)" }} // Apply grayscale filter
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Harsh Brahmkshatriya</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(pdfFile, "_blank")}
          >
            Download CV
          </button>

          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/harsh-brahmkshatriya-3932932b9/")
            }
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/harshbr")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
