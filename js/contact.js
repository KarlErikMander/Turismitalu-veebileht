// See js fail on valideeritud https://esprima.org/demo/validate.html

// Näite sain siit
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-html
function myMap() {
    // Marknatalu kordinaadid
    const marknatalu = { lat: 58.373428, lng: 24.595235};
    // Seaded google map api-le
    var mapProp= {
        center:marknatalu,
        zoom:15,
    };
    // Lae google map elemeti, kasutades id
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}