const toggleBtnMobile = document.querySelector(".header-nav__right-toggle-mobile ")
const menuMobile = document.querySelector("nav .nav-mobile")
toggleBtnMobile.addEventListener("click", () => {
    menuMoble.classList.toggle("active")
})