'use strict';
const menuIcon = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');
const cloneMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide-menu');
})

cloneMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hide-menu')
})