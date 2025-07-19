//email

(function(){
  emailjs.init("oqQZyBGYO60eiKK52");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('loader').style.display = 'flex'; 

  emailjs.sendForm('service_72evku6', 'template_h8r0kom', this)
    .then(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('formResponse').innerHTML = '<p style="color:#00bcd4;">Mensaje enviado correctamente. ¡Gracias por contactarme!</p>';
      document.getElementById('contact-form').reset();
    }, function(error) {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('formResponse').innerHTML = '<p style="color:red;">Ocurrió un error. Por favor intenta de nuevo.</p>';
      console.error('FAILED...', error);
    });
});

