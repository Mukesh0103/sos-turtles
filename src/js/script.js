var scrollShadow = document.getElementById("header");
window.onscroll = () => {
    if (window.scrollY >= 50) {
        scrollShadow.classList.add("scroll-shadow");
    } else {
        scrollShadow.classList.remove("scroll-shadow");
    }
}

var menuBtn = document.getElementById("menu-button");
var mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
    scrollShadow.classList.add("scroll-shadow");
})