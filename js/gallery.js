// See js fail on valideeritud https://esprima.org/demo/validate.html

// Kui html leht on ära laetud, siis kuva saunamaja galerii
var current_gallery = "saunamaja";
showGallery("saunamaja");

function showGallery(gallery_name) {
    current_gallery = gallery_name;
    // Tekita elemendi handle ID kasutades
    var saunamaja = document.getElementById("saunamaja_gallery");
    var pauliait = document.getElementById("pauliait_gallery");
    var muu = document.getElementById("muu_gallery");
    // Muuda elemente vastavalt, mida on vaja näidata 
    if (gallery_name == "saunamaja") {
        saunamaja.style.display = "block";
        pauliait.style.display = "none";
        muu.style.display = "none";
    } else if (gallery_name == "pauliait") {
        saunamaja.style.display = "none";
        pauliait.style.display = "block";
        muu.style.display = "none";
    } else {
        saunamaja.style.display = "none";
        pauliait.style.display = "none";
        muu.style.display = "block";
    }
    //Muuda galerii nuppude tagatausta, et näidata mis galerii praegu lahti on
    var saunamaja_button = document.getElementById("saunamaja_button");
    var pauliait_button = document.getElementById("pauliait_button");
    var muu_button = document.getElementById("muu_button");
    if (gallery_name == "saunamaja") {
        saunamaja_button.style.backgroundColor = "rgba(211, 250, 208, 0.4)";
        pauliait_button.style.backgroundColor = "rgba(0, 0, 0,0)";
        muu_button.style.backgroundColor = "rgba(0, 0, 0 ,0)";
    } else if (gallery_name == "pauliait") {
        saunamaja_button.style.backgroundColor = "rgba(0, 0, 0 ,0)";
        pauliait_button.style.backgroundColor = "rgba(211, 250, 208, 0.4)";
        muu_button.style.backgroundColor = "rgba(0, 0, 0 ,0)";
    } else {
        saunamaja_button.style.backgroundColor = "rgba(0, 0, 0 ,0)";
        pauliait_button.style.backgroundColor = "rgba(0, 0, 0 ,0)";
        muu_button.style.backgroundColor = "rgba(211, 250, 208, 0.4)";
    }
}

// Galerii näite javascripti sain siit.  https://www.w3schools.com/howto/howto_css_modal_images.asp

// Ava modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Sulge modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// var, mis näitab, mis slide praegu lahti on
var slideIndex = 1;


// Muuda slide pilti edasi või tagasi
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Kui vajutatakse galeriis pildile siis näita pilti
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Varrid, mis hoiavad galeriis olevate piltide nimesi
var saunamaja_images = ["1.jpg", "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg" ,"6.jpg", "7.jpg", "8.jpg", "9.jpg", "12.jpg", "talv.jpg" ]
var pauliait_images = ["1.jpg","DSC_0077.jpg", "DSC_0088.jpg", "DSC_0089.jpg", "DSC_0090.jpg", "DSC_0094.jpg", "DSC_0095.jpg", "DSC_0160.jpg", "DSC_0171.jpg", "DSC_0296.jpg", "DSC_0353.jpg", "DSC_0712.jpg", "DSC_0822.jpg", "DSC_1081.jpg"]
var muu_images = ["DSC_0057.jpg","DSC_0085.JPG", "DSC_0202.JPG", "DSC_0207.JPG", "DSC_0358.JPG", "DSC_0374.JPG", "DSC_0770.JPG", "DSC_0772.JPG", "DSC_0811.JPG", "DSC_0848.JPG", "DSC_0941.JPG", "DSC_1184.JPG", "DSC_1186.JPG", "DSC_1186.JPG", "DSC_1452.JPG", "DSC_1457.JPG", "DSC_1786.JPG"]

// Muuda slidi pilti
function showSlides(n) {
    // Vali õige array, kust faili nimesi võtta
    if(current_gallery == "saunamaja"){
        var images = saunamaja_images;
    }else if(current_gallery == "pauliait"){
        var images = pauliait_images;
    }else{
        var images = muu_images;
    }

    // Slidi img tägi element
    var slide = document.getElementById("slideImg");

    // Kui rohkem pilte pole siis alusta algusest
    if (n > images.length  - 1) {
         slideIndex = 0 ;
         n = 0;
    }

    // Kui tagurpidi liikuda ja oled algusesse jõudnud, alusta lõpust
    if (n < 0) { 
        slideIndex = images.length - 1;
        n = images.length - 1;
    }
    
    // Muuda pilti vastavalt, mis galerii lahti on
    if(current_gallery == "saunamaja"){
        slide.src =  'resources/saunamaja/' + images[n] ;
    }else if(current_gallery == "pauliait"){
        slide.src =  'resources/pauliait/' + images[n];
    }else{
        slide.src =  'resources/overall/' + images[n] ;
    }
    

}