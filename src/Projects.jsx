import React from "react";
import ecommerce from "../src/assets/e-commerce1.png";
import arrow from "./assets/arrow.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/076/168/small/food-delivery-banner-design-flat-design-online-order-vector.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Online Food Ordering
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href = "https://github.com/harshbr")
                }
              >
                Github
              </button>
              {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Live Demo
              </button> */}
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={ecommerce} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Online Shopping
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href = "https://github.com/harshbr")
                }
              >
                Github
              </button>
              {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Live Demo
              </button> */}
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="https://t4.ftcdn.net/jpg/05/06/05/69/360_F_506056987_eMPxuEX8apar4UzIsG8xo1lHuH9WqGmZ.jpg"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Online Bus Ticket Booking
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href = "https://github.com/harshbr")
                }
              >
                Github
              </button>
              {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Live Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
