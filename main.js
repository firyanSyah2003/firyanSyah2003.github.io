const menuTogle = document.querySelector('.menu-toogle input')
const nav = document.querySelector('nav ul')

menuTogle.addEventListener('click', function () {
    nav.classList.toggle('slide')
})