// Parralax title//
let parallax = document.querySelectorAll(".parallax");
let imageBanner = document.GetElementbyId ("#logo");

window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    if (offset < parallax.offsetParent.offsetTop + parallax.offsetTop) {
        parallax.style.transform = "translateY(" + offset * 0.5 + "px)";
    }
});


