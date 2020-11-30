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
        pauliait_button.style.backgroundColor = "0";
        muu_button.style.backgroundColor = "0";
    } else if (gallery_name == "pauliait") {
        saunamaja_button.style.backgroundColor = "0";
        pauliait_button.style.backgroundColor = "rgba(211, 250, 208, 0.4)";
        muu_button.style.backgroundColor = "0";
    } else {
        saunamaja_button.style.backgroundColor = "0";
        pauliait_button.style.backgroundColor = "0";
        muu_button.style.backgroundColor = "rgba(211, 250, 208, 0.4)";
    }
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
var saunamaja_images = ["1.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "12.jpg","DSC_0303.jpg", "talv.jpg" ]
var pauliait_images = ["1.jpg","DSC_0080.jpg", "DSC_0822.jpg", "DSC_0353.jpg", "DSC_0171.jpg", "DSC_0160.jpg", "DSC_0103.jpg", "DSC_0088.jpg", "img3.jpg"]
var muu_images = ["DSC_0057","DSC_0085.JPG", "DSC_0202.JPG", "DSC_0207.JPG", "DSC_0358.JPG", "DSC_0374.JPG", "DSC_0481.JPG", "DSC_0770.JPG", "DSC_0772.JPG", "DSC_0811.JPG", "DSC_0848.JPG", "DSC_0850.JPG", "DSC_0851.JPG", "DSC_0941.JPG", "DSC_1180.JPG", "DSC_1184.JPG", "DSC_1186.JPG", "DSC_1452.JPG", "DSC_1457.JPG", "DSC_1544.JPG", "DSC_1786.JPG", "img2.jpg", "uus_maja.jpg"]

function showSlides(n) {
    var i;
    if(current_gallery == "saunamaja"){
        var images = saunamaja_images;
    }else if(current_gallery == "pauliait"){
        var images = pauliait_images;
    }else{
        var images = muu_images;
    }


    var slide = document.getElementById("slideImg");


    if (n > images.length - 1) {
         slideIndex = 1 ;
    }
    if (n < 1) { 
        slideIndex = images.length - 1;
    }
    
    slide.src 
    if(current_gallery == "saunamaja"){
        slide.src =  '../resources/saunamaja/' + images[n] ;
    }else if(current_gallery == "pauliait"){
        slide.src =  '../resources/pauliait/' + images[n];
    }else{
        slide.src =  '../resources/overall/' + images[n] ;
    }
    

}