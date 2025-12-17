const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const submenuToggle = document.querySelector('.submenu-toggle');
const dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Toggle submenu en móviles
submenuToggle.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  submenuToggle.textContent = dropdown.classList.contains('show') ? "−" : "+";
});
