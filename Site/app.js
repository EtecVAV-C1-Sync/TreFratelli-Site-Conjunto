// Dropdow das traduções 
const langBtn = document.querySelector('.lang-btn');
const dropdown = document.querySelector('.lang-dropdown');
const arrow = document.getElementById('lang-arrow');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('.language-selector').contains(e.target)) {
        dropdown.classList.remove('show');
        arrow.classList.remove('rotate');
    }
});

// Dropdown do menu de navegação
const navBtn = document.querySelector('.navegacao-btn');
const menuNav = document.querySelector('.top-menu-icons');

navBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuNav.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuNav.contains(e.target) && !navBtn.contains(e.target)) {
        menuNav.classList.remove('show');
    }
});

