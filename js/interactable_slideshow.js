// naite sain siit https://www.w3schools.com/howto/howto_js_slideshow.asp
// Index, mis näitab, mis slide praegu on
var slideIndex = 1;
// paneb functiooni tööle
showSlides(slideIndex);

// Edasi/tagasi nupp
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Kutsutakse, kui vajutatakse täppi
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    // Toob handlid ( kõikid piltide ja täppide omad)
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // Kui enam pilte pole siis alustab algusest
    if (n > slides.length) {
         slideIndex = 1 
    }
    // Kui enam pilte pole siis alustab lõpust
    if (n < 1) {
         slideIndex = slides.length
    }
    // Muudab kõik pildid nähtamatuks
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // muudab kõik täpid mitte aktiivseks
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Näitab õiget pilti ja muudab õige täpi aktiivseks
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}