import React from "react";
import checkmarkIcon from "./assets/checkmark.png";
import arrowIcon from "./assets/arrow.png";

const Experience = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Redux",
    "Material UI",
  ];
  const backendSkills = [
    "Java",
    "C++",
    "Spring Boot",
    "Spring Security",
    "Node JS",
    "Express JS",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "JWT",
  ];
  const devOpsSkills = [
    "Docker",
    "AWS (EC2, S3, EBS, RDS, DynamoDB, IAM)",
    "Git",
    "GitHub",
  ];
  const methodologySkills = [
    "Software Development Life Cycle (SDLC)",
    "REST APIs",
    "Agile",
    "Scrum",
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <article key={skill} className="skill-article">
        <img src={checkmarkIcon} alt="Experience icon" className="icon" />
        <div>
          <h3>{skill}</h3>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {renderSkills(frontendSkills)}
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Backend & Languages</h2>
            <div className="article-container">
              {renderSkills(backendSkills)}
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">DevOps & Cloud</h2>
            <div className="article-container">
              {renderSkills(devOpsSkills)}
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Methodologies & Concepts</h2>
            <div className="article-container">
              {renderSkills(methodologySkills)}
            </div>
          </div>
        </div>
      </div>

      <div className="arrow-container">
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </div>
    </section>
  );
};

export default Experience;
