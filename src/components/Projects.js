import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // Proyectos para Tab 1
  const projectsTab1 = [
    {
      title: "Gestión de Productos",
      description: "Desarrollo e Implementación",
      imgUrl: projImg1,
      GitHubUrl: "https://github.com/EmiFunes91/store", // Enlace al repositorio
    },
    {
      title: "Gestión de Productos",
      description: "Desarrollo e implementación",
      imgUrl: projImg2,
      GitHubUrl: "https://github.com/EmiFunes91/TechMarketPro", // Enlace al repositorio
    },
    {
      title: "Gestión de Usuarios",
      description: "Control y administración",
      imgUrl: projImg3,
      GitHubUrl: "https://github.com/EmiFunes91/crud-utn", // Enlace al repositorio
    },
  ];

  // Proyectos para Tab 2
  const projectsTab2 = [
    {
      title: "Portfolio Personal",
      description: "Desarrollo e implementación",
      imgUrl: projImg4,
      GitHubUrl: "https://github.com/EmiFunes91/Portfolio-Personal.git", // Enlace al repositorio
    },
  ];

  // Proyectos para Tab 3
  const projectsTab3 = [
    //Agregar nuevos proyectos
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
                  <h2>Proyectos</h2>
                  <p>
                    Estos proyectos reflejan mi experiencia en el desarrollo de
                    soluciones escalables usando tecnologías como Java, Spring
                    Boot, React y MySQL. Cada uno demuestra mi habilidad para
                    integrar funcionalidades modernas y ofrecer una experiencia
                    de usuario óptima.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};

export default Projects;
