const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});