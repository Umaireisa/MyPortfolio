// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("hrader-scrolled");
    } else {
        nav.classList.remove("hrader-scrolled");
    }
}

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})