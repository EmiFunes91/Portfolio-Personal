import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa"; // Importa el ícono de GitHub

export const ProjectCard = ({ title, description, imgUrl, GitHubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* Aquí está el botón con el ícono GitHub */}
          <a 
            href={GitHubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-btn"
            style={{ display: "block", color: "#fff", textDecoration: "none", marginTop: "10px" }} // Ajusta los estilos aquí
          >
            <FaGithub style={{ fontSize:"23px", marginRight: "5px", marginBottom:"7px" }} /> Ver en GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

