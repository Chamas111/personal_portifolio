import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import MyRecipesBlog from "../assets/img/MyRecipesBlog.png";
import Airbnb from "../assets/img/Airbnb.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Hackernews from "../assets/img/Hackernews.png";
import moviebild from "../assets/img/moviebild.png";
import MobileApp from "../assets/img/mobileapp0.png";
import pokemonbild from "../assets/img/pokemon-bild.png";
import Pinchofsalt from "../assets/img/Pinch-of-salt.png";
import commerce from "../assets/img/commerce.png";
import ipadress from "../assets/img/ipadress.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Pokemon",
      description: "Design & Development",
      imgUrl: pokemonbild,

      category: "Web App",
    },
    {
      title: "Movie App",
      description: "Design & Development",
      imgUrl: moviebild,

      category: "Web App",
    },
    {
      title: "Hacker News",
      description: "Design & Development",
      imgUrl: Hackernews,

      category: "Web App",
    },
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

      category: "Web App",
    },
    {
      title: "My Recipes Blog",
      description: "Design & Development",
      imgUrl: MyRecipesBlog,

      category: "Web App",
    },
    {
      title: "Commerce Shop",
      description: "Design & Development",
      imgUrl: commerce,

      category: "Web App",
    },
    {
      title: "ip Tracker",
      description: "Design & Development",
      imgUrl: ipadress,

      category: "Web App",
    },
    {
      title: "Airbnb",
      description: "Design & Development",
      imgUrl: Airbnb,

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
                    These projects that I have built during the Full stack web &
                    App development course.
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
                                (project) => project.category === "Web App"
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
                        <a href="">
                          <Row>
                            {projects
                              .filter(
                                (project) => project.category === "Mobile App"
                              )
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Row>
                        </a>
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
