// Slide hamburger menu
const menu = document.querySelector('.hamburger-menu input');
const slideTop = document.querySelector('nav ul');

menu.addEventListener('click', function () {
    slideTop.classList.toggle('top');
});

//Scroll Nav
const scrollNav = document.querySelector('nav');

window.addEventListener("scroll", function () {
    scrollNav.classList.toggle('scrolling', window.scrollY >100)
}); 

// Tidak menutupi text ketika scroll
const links = document.querySelectorAll('#link-menu')
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 110;
    scroll({
        top: offsetTop,
    });
}


