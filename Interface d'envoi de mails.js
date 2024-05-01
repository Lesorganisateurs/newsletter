document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var to = document.getElementById('to').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  sendEmail(to, subject, message);
});

function sendEmail(to, subject, message) {
  // Utilisation du service SMTP de Google pour envoyer l'e-mail
  // Remplacez ces valeurs par vos propres informations d'authentification SMTP
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'votre_adresse_email@gmail.com',
      pass: 'votre_mot_de_passe'
    }
  };

  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      document.getElementById('status').innerHTML = 'Erreur : ' + error.message;
    } else {
      document.getElementById('status').innerHTML = 'E-mail envoyé : ' + info.response;
    }
  });
}
