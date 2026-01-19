import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import MyRecipesBlog from "../assets/img/MyRecipesBlog.png";
import Airbnb from "../assets/img/Airbnb.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Hackernews from "../assets/img/Hackernews.png";
import moviebild from "../assets/img/moviebild.png";
import MobileApp from "../assets/img/mobileapp0.png";
import TRVL from "../assets/img/TRVL_Site.png";
import Pinchofsalt from "../assets/img/Pinch-of-salt.png";
import commerce from "../assets/img/onlineshop2.png";
import ipadress from "../assets/img/ipadress.png";
import poke from "../assets/img/poke.png";
import kirsch from "../assets/img/Kirsch.png";
import MobileApp_Video from "../assets/img/mobileapp-vedio.mp4";

import "animate.css";

import TrackVisibility from "react-on-screen";

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOpenVideo = () => {
    setShowVideo(true);
  };

  const handleOpenProjects = () => {
    setShowVideo(false);
  };

  const projects = [
    {
      title: "Scan Eat",
      description: "Design & Development",
      imgUrl: MobileApp,

      category: "Mobile App",
    },
    {
      title: "Pinch of Salt",
      description: "Design & Development",
      imgUrl: Pinchofsalt,
      linkto: "https://peppy-starburst-08fd89.netlify.app/",
      category: "Web App",
    },
    {
      title: "My Recipes Blog",
      description: "Design & Development",
      imgUrl: MyRecipesBlog,
      linkto: "https://rodrigomenezes22.github.io/cook-book-group4/index.html",
      category: "Web App",
    },
    {
      title: "Online Shop",
      description: "Design & Development",
      imgUrl: commerce,
      linkto: "https://online-shop23.netlify.app",
      category: "Web App",
    },

    {
      title: "Airbnb",
      description: "Design & Development",
      imgUrl: Airbnb,
      linkto: "https://bookingappl.netlify.app/",
      category: "Web App",
    },
    {
      title: "Pokemon App",
      description: "Design & Development",
      imgUrl: poke,
      linkto: "https://pokemonapplic.netlify.app/",
      category: "Web App",
    },
    {
      title: "Moving App",
      description: "Design & Development",
      imgUrl: kirsch,
      linkto: "https://unternehmenkirsch.netlify.app/login",
      category: "Web App",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I maintain a personal project portfolio website where I
                    present my web development projects. The page showcases
                    real-world applications I have built using modern web
                    technologies, highlighting my skills in frontend
                    development, fullstack architecture, and clean, maintainable
                    code.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <button>
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <button>
                          <Row>
                            {projects
                              .filter(
                                (project) => project.category === "Web App",
                              )
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Row>
                        </button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          These Projects that I have built during the Full stack
                          web & App development course.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {showVideo ? (
                          <div>
                            <video controls>
                              <source src={MobileApp_Video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <Button onClick={handleOpenProjects}>
                              Back to Projects
                            </Button>
                          </div>
                        ) : (
                          <Row>
                            {projects
                              .filter(
                                (project) => project.category === "Mobile App",
                              )
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            <Button onClick={handleOpenVideo}>
                              Watch Video
                            </Button>
                          </Row>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
