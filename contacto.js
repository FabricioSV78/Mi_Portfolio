//email

document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("oqQZyBGYO60eiKK52");

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById("loader").style.display = "flex";
    document.getElementById("formResponse").innerHTML = ""; 

    emailjs.sendForm('service_72evku6', 'template_h8r0kom', this)
      .then(function() {
        console.log("Correo de confirmación enviado al cliente.");
        return emailjs.sendForm('service_72evku6', 'template_8se1h3l', event.target);
      })
      .then(function() {
        console.log("Notificación enviada a mi correo.");
        document.getElementById("loader").style.display = "none";
        document.getElementById('formResponse').innerHTML =
          '<p style="color:#00bcd4;">Mensaje enviado correctamente. ¡Gracias por contactarme!</p>';
        document.getElementById('contact-form').reset();
      })
      .catch(function(error) {
        console.log("Error al enviar:", error);
        document.getElementById("loader").style.display = "none";
        document.getElementById('formResponse').innerHTML =
          '<p style="color:red;">Ocurrió un error. Por favor intenta de nuevo.</p>';
      });
  });
});
