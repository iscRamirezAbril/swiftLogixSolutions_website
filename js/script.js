// |-----| Scroll Effect function |-----| //
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    });
}
// |-----| Scroll Effect function |-----| //

// |-----| Scroll Reveal function |-----| //
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.display-3', { 
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false
    });

    // Anima el párrafo principal
    ScrollReveal().reveal('.lead', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    delay: 200
    });

    // Anima el botón
    ScrollReveal().reveal('.header .btn', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    delay: 400
    });

    // Anima los logos de partners
    ScrollReveal().reveal('.partners img', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
    });

    // Animar imagen en la sección 'About'
    ScrollReveal().reveal('.about img', { 
      duration: 1000, 
      origin: 'left', 
      distance: '50px' 
    });
  
    // Animar el contenido de la sección 'About'
    ScrollReveal().reveal('.about h2, .about p', {
      duration: 1200,
      origin: 'right',
      distance: '50px',
      interval: 200
    });
  
    // Animar los servicios en la sección 'Services'
    ScrollReveal().reveal('.services .col-md-4', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      interval: 200
    });
  
    // Animar el contenido de la sección 'Details'
    ScrollReveal().reveal('.details h2, .details ul li .contact img', {
      duration: 1200,
      origin: 'left',
      distance: '50px',
      interval: 300
    });
  
    // Animar la imagen de la sección 'Details'
    ScrollReveal().reveal('.details .image-container img', {
      duration: 1200,
      origin: 'right',
      distance: '50px'
    });
  
    // Animar los puntos de la sección 'SwiftLogix Method'
    ScrollReveal().reveal('.method .col-md-6, .col-md-12', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      interval: 200
    });
  
    // Animar las estadísticas en la sección 'Stats'
    ScrollReveal().reveal('.stats .col-md-3', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      interval: 200
    });
  
    // Animar las tarjetas del blog en la sección 'Blog'
    ScrollReveal().reveal('.blog .card', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      interval: 200
    });
  
    // Animar la sección de contacto
    ScrollReveal().reveal('.contact h1, .contact form, .contact img', {
      duration: 1200,
      origin: 'right',
      distance: '50px',
      interval: 200
    });

    ScrollReveal().reveal('.contact img', {
      duration: 1200,
      origin: 'left',
      distance: '50px',
      interval: 200
    });
  });
// |-----| Scroll Reveal function |-----| //

document.addEventListener('DOMContentLoaded', navbarScrollEffect);