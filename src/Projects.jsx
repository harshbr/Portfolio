import React from "react";
import arrow from "./assets/arrow.png";

const Projects = () => {
  const projects = [
    {
      title: "DocAI - AI-powered Document Analysis",
      description:
        "Built a platform to automatically extract summaries and key points from PDF documents using OpenAI API. Developed scalable RESTful APIs with Spring Boot and optimized MongoDB for fast retrieval.",
      github: "https://github.com/harshbr/DocAI",
      tech: ["Java", "Spring Boot", "MongoDB", "REST API", "OpenAI API"],
    },
    {
      title: "Online Food Ordering",
      description:
        "Created an online food ordering platform with cart functionality, checkout, and order history.",
      github: "https://github.com/harshbr/FoodOrdering.git",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    },
    {
      title: "Online Shopping",
      description:
        "Developed a fully functional e-commerce platform with product management, cart, and checkout functionality.",
      github: "https://github.com/harshbr/e-commerce.git",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Chakra UI",
      ],
    },
    {
      title: "Online Bus Ticket Booking",
      description:
        "Built a bus ticket booking platform with seat selection, ticket download, and admin dashboard for scheduling and user management.",
      github: "https://github.com/harshbr/hotelbooking.git",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <button
              className="btn project-btn"
              onClick={() => (window.location.href = project.github)}
            >
              GitHub
            </button>
          </div>
        ))}
      </div>

      <div className="arrow-container">
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#contact")}
        />
      </div>
    </section>
  );
};

export default Projects;
