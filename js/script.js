// Get the hamburger button and the nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the show class on the nav links when clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
