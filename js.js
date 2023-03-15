const burgerUl = document.querySelector('#burgerUl');
const navBtn = document.querySelector('#nav-btn')
const btnBurger = document.querySelector('#btnBurger');

navBtn.onclick = () => {
    if(burgerUl.classList.toggle('open')) {
        btnBurger.src = " ./img/header/nav_close.svg "
    } else {
        btnBurger.src = " ./img/header/burger.svg "
    }
}