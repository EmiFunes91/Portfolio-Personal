console.log('EMAIL_USER:', process.env.SPRING_MAIL_USERNAME);
console.log('EMAIL_PASS:', process.env.SPRING_MAIL_PASSWORD);

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Verificar que las variables de entorno estén configuradas
if (!process.env.SPRING_MAIL_USERNAME || !process.env.SPRING_MAIL_PASSWORD) {
  console.error("ERROR: Las variables de entorno SPRING_MAIL_USERNAME y SPRING_MAIL_PASSWORD no están configuradas.");
  process.exit(1); // Detener el servidor si faltan las variables
}

// Configuración del transporte SMTP de Nodemailer para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Servicio SMTP de Gmail
  auth: {
    user: process.env.SPRING_MAIL_USERNAME, // Correo de Gmail
    pass: process.env.SPRING_MAIL_PASSWORD, // Contraseña de aplicación generada
  },
});

// Verificar la conexión con el servidor SMTP al iniciar
transporter.verify((error, success) => {
  if (error) {
    console.error("Error al conectar con el servidor SMTP:", error.message);
    process.exit(1); // Detener el servidor si falla la conexión SMTP
  } else {
    console.log("Conexión SMTP exitosa. Listo para enviar correos.");
  }
});

// Endpoint para manejar el formulario de contacto
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ code: 400, message: 'Todos los campos son obligatorios.' });
  }

  const mailOptions = {
    from: process.env.SPRING_MAIL_USERNAME, // Tu correo de Gmail
    to: process.env.SPRING_MAIL_USERNAME,   // Recibes los correos aquí
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${firstName} ${lastName}\nEmail del remitente: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error.message);
      return res.status(500).json({ code: 500, message: 'Hubo un error al enviar el correo. Inténtalo más tarde.' });
    }
    console.log('Correo enviado:', info.response);
    res.status(200).json({ code: 200, message: 'Mensaje enviado correctamente.' });
  });
});

// Levantar el servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));



