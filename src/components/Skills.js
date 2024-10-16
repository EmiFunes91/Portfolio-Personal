import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaJava, FaReact, FaJsSquare, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostgresql, SiVisualstudiocode, SiIntellijidea, SiApachemaven, SiGit, SiGithub, SiHtml5, SiCss3 } from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
              En esta sección se encuentran mis principales habilidades técnicas, que abarcan desde el desarrollo backend con Java y Spring Boot, hasta la gestión de bases de datos y la contenerización de aplicaciones. Cada una de estas competencias refleja mi enfoque en la creación de soluciones escalables, seguras y eficientes, adaptadas a las necesidades modernas del desarrollo de software.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaJava size={80} color="#f89820" /> {/* Ícono de Java */}
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <SiSpringboot size={80} color="#6DB33F" />{" "}
                  {/* Ícono de Spring Boot */}
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <SiMysql size={70} color="#00758F" /> {/* Ícono de MySQL */}
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <SiPostgresql size={70} color="#396c94" /> {/* Ícono de PostgreSQL */}
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <SiApachemaven size={70} color="#b52754" /> {/* Ícono de MySQL */}
                  <h5>Maven</h5>
                </div>
                <div className="item">
                  <FaDocker size={70} color="#2496ED" /> {/* Ícono de Docker */}
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <FaReact size={70} color="#61DBFB" /> {/* Ícono de React */}
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FaJsSquare size={70} color="#F7DF1E" />{" "}
                  {/* Ícono de JavaScript */}
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <SiHtml5 size={70} color="#f26430" />{" "}
                  {/* Ícono de HTML */}
                  <h5>HTML</h5>
                  </div>
                  <div className="item">
                  <SiCss3 size={70} color="#08abf3" />{" "}
                  {/* Ícono de CSS */}
                  <h5>CSS</h5>
                  </div>
                <div className="item">
                  <SiGit size={70} color="#e74823" />{" "}
                  {/* Ícono de Git */}
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <SiGithub size={70} color="#FFFFFF" />{" "}
                  {/* Ícono de GitHub */}
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <SiIntellijidea size={70} color="#000000"/>{" "}
                  {/* Ícono de IntellijIDEA */}
                  <h5>Intellij IDEA</h5>
                </div>
                <div className="item">
                  <SiVisualstudiocode size={70} color="#23a9f2" />{" "}
                  {/* Ícono de VSC */}
                  <h5>Visual Studio Code</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
