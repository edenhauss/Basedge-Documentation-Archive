const basedge = document.getElementById("logo");
document.body.addEventListener('click', function () {
    clearTimeout(openEyes);
    clearInterval(blinking);
    Blink();
    blinking = setInterval(function () {
        Blink();
    }, 4000);
}, true);
let openEyes = null;

let blinking = setInterval(function () {
    Blink();
}, 4000);

function Blink() {
    basedge.style.backgroundImage = "url('logo_sleep.png')";
    openEyes = setTimeout(function () {
        basedge.style.backgroundImage = "url('logo.png')";
    }, 300);
}
