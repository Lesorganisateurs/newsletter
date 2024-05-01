function sendEmail(to, subject, message) {
  var data = {
    to: to,
    subject: subject,
    text: message,
    // Remplacez 'YOUR_SENDGRID_API_KEY' par votre clé d'API SendGrid
    api_key: 'YOUR_SENDGRID_API_KEY'
  };

  fetch('https://api.sendgrid.com/api/mail.send.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_SENDGRID_API_KEY'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('E-mail envoyé avec succès !');
  })
  .catch(error => {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
  });
}
