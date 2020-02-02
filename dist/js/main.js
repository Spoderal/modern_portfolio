// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuBtn.classList.toggle('close');
    navMenu.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItem.forEach(item => {
      item.classList.toggle('show');
    })
  
}
