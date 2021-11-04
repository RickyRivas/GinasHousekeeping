// Navigation 1
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
navOverlay.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
navLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', () => {
        nav.classList.remove('is-active');
        burger.classList.remove('is-active');
        body.classList.remove('body-fixed');
        navOverlay.classList.remove('is-active');
        console.log(index)
    })
})
// // Color theme toggle
// const themeToggle = document.querySelector('.theme-toggle');
// const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme == 'dark') {
//     document.body.classList.toggle('dark-mode')
// }

// themeToggle.addEventListener('click', () => {
//     if (prefersDarkTheme.matches) {
//         document.body.classList.toggle('light-mode')
//         var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
//     } else {
//         document.body.classList.toggle('dark-mode');
//         var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
//     }
//     localStorage.setItem('theme', theme)
// })
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next-gal",
        prevEl: ".swiper-prev-gal",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});
var swiper = new Swiper(".testSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next-test",
        prevEl: ".swiper-prev-test",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
            1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});