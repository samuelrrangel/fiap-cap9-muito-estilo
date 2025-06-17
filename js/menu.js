const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const servicosBtn = document.getElementById('servicosBtn');
const dropdown = document.querySelector('.dropdown');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Controle do dropdown no mobile
servicosBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('active');
});