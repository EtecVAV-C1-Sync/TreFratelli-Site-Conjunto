document.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.querySelector('.lang-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    const arrow = document.getElementById('lang-arrow');

    if (langBtn && dropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
            arrow?.classList.toggle('rotate');
        });

        document.addEventListener('click', (e) => {
            if (!document.querySelector('.language-selector')?.contains(e.target)) {
                dropdown.classList.remove('show');
                arrow?.classList.remove('rotate');
            }
        });
    }

    const navBtn = document.querySelector('.navegacao-btn');
    const menuNav = document.querySelector('.top-menu-icons');

    if (navBtn && menuNav) {

        navBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const abrir = !menuNav.classList.contains('show');

            menuNav.classList.toggle('show');
            navBtn.classList.toggle('open', abrir);
        });

        document.addEventListener('click', (e) => {
            if (!menuNav.contains(e.target) && !navBtn.contains(e.target)) {
                menuNav.classList.remove('show');
                navBtn.classList.remove('open');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                menuNav.classList.remove('show');
                navBtn.classList.remove('open');
            }
        });

        const menuItems = menuNav.querySelectorAll('a.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('focus', () => {
                menuNav.classList.add('show');
                navBtn.classList.add('open');
            });
        });
    }
});
