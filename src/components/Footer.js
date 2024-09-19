import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import Logo from '../assets/img/Logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/emilio-funes-8b140b21a/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/EmiFunes91">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/emi.funes/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
