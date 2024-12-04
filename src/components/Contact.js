import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  // Validaciones
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{8,}$/.test(phone); //Menos 8 dígitos
  const validateMessage = (message) => message.length >= 50;

  const onFormUpdate = (category, value) => {
    let error = {};
    switch (category) {
      case 'firstName':
      case 'lastName':
        error[category] = validateName(value) ? '' : 'Solo letras permitidas';
        break;
      case 'email':
        error.email = validateEmail(value) ? '' : 'Email no válido';
        break;
      case 'phone':
        error.phone = validatePhone(value) ? '' : 'Teléfono no válido';
        break;
      case 'message':
        error.message = validateMessage(value) ? '' : 'El mensaje debe tener al menos 50 caracteres';
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      ...error
    });

    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación final antes de enviar
    if (!validateName(formDetails.firstName) || !validateName(formDetails.lastName) || !validateEmail(formDetails.email) || !validatePhone(formDetails.phone) || !validateMessage(formDetails.message)) {
      setStatus({ success: false, message: 'Por favor revisa los campos del formulario.' });
      return;
    }

    try {
      setButtonText("Enviando...");
      const response = await fetch("https://mi-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setStatus({ success: true, message: 'Mensaje enviado correctamente.' });
        setFormDetails(formInitialDetails); //Reinicia el formulario
      } else {
        const result = await response.json();
        setStatus({ success: false, message: result.message || 'Error al enviar el mensaje. Inténtalo de nuevo.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Error de conexión. Inténtalo más tarde.' });
    } finally {
      setButtonText("Enviar");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contáctame" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contáctame</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Nombre"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Apellido"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Teléfono"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Mensaje"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        {errors.message && <p className="error-text">{errors.message}</p>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

