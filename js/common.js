
// kõrvalmenüü javascript
// näite sain siit https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push 

// Kutsutaks, kui kõrvalmenüüd vaja avada
function openNav() {
    // Muudab kõrvalmenüü laius 
    document.getElementById("mySidenav").style.width = "min(30vw, 390px)";
}
// Kutsutaks, kui kõrvalmenüüd vaja sulgeda
function closeNav() {
    // Muudab kõrvalmenüü laius 0
    document.getElementById("mySidenav").style.width = "0";
}


