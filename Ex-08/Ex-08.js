let temps = document.querySelector('p');

function afficherDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    if (s < 10) { s = '0' + s; }
    var time = h + ':' + m + ':' + s
    temps.innerHTML = time;
    reset();
}

function reset() {
    var t = 1000;
    setTimeout('afficherDate()', t)
}