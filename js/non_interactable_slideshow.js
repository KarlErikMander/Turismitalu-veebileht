// See js fail on valideeritud https://esprima.org/demo/validate.html

// naite sain siit https://www.w3schools.com/howto/howto_js_slideshow.asp
// Index, mis näitab, mis slide praegu on
var slideIndex = 0;
// paneb functiooni tööle
showSlides();

function showSlides() {
    var i;
    // Toob handlid ( kõikid piltide ja täppide omad)
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // Muudab kõik pildid nähtamatuks
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Järgmine pilt
    slideIndex++;
    // Kui enam pilte pole siis alustab algusest
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    // muudab kõik täpid mitte aktiivseks
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Näitab õiget pilti ja muudab õige täpi aktiivseks
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // Kutsub uuesti ennast välja 8 sekundi pärast
    setTimeout(showSlides, 8000);
}