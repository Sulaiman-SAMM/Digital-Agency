// ----------------------- Header -----------------------
"use strict"
let buttonNavbar = document.querySelectorAll('[data-button-navbar]'),
    overLay = document.querySelector('[data-overlay]'),
    navbar = document.querySelector('[data-navbar]');

for(let i = 0; i < buttonNavbar.length;i++) {
    buttonNavbar[i]. addEventListener('click',function(){
        overLay.classList.toggle('active');
        navbar.classList.toggle('active')
    })
}
