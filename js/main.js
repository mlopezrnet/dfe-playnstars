function enConstruccion() {
  alert('En construcción');
}

document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
    });
  });

});

function showContactForm() {
  const contactForm = document.getElementById('contacto-form');
  const showContact = document.getElementById('show-contact');
  const footer = document.getElementById('footer');
  contactForm.style.display = 'flex';
  showContact.classList.add('hidden');
  footer.style.height = '60vh';
  window.scrollTo(0, document.body.scrollHeight);
}

//
// Recuperar datos del formulario
//

const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - Nombre: ' + nombre + '- Email: ' + email + '- Mensaje: ' + mensaje);

  contactoForm.reset();
});