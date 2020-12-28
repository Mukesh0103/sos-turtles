var scrollShadow = document.getElementById("header");
window.onscroll = function () {
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

var dropdown = document.querySelectorAll(".dropdown-btn");
var dropdownBox = document.querySelectorAll(".dropdown-box");
var dropdownValue = document.querySelectorAll(".dropdown-value")
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        dropdownBox[i].classList.toggle("show");
    })
}
for (let i = 0; i < dropdownBox.length; i++) {
    dropdownBox[i].addEventListener("click", function (e) {
        e.stopPropagation;
        dropdownValue[i].innerHTML = e.target.innerHTML;
        dropdownBox[i].classList.remove("show");
    })
}