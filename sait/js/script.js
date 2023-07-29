window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu_list-item'),
    hamburger = document.querySelector('.hambuger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hambuger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hambuger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})