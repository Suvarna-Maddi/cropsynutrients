function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Toggle the nav menu visibility
  navLinks.classList.toggle('active');

  // Add or remove the "open" class for animation
  hamburger.classList.toggle('open');
}

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
}

// Set interval for auto-slide
setInterval(moveCarousel, 3000); // Slide every 3 seconds