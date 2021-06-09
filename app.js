// refresh
function getnumber(num) {
var screen = document.getElementById("screen");
screen.value += num;
}

function clearnum() {
var screen = document.getElementById('screen');
screen.value = "";
}

function result() {
    var screen = document.getElementById("screen");
    screen.value = eval(screen.value);
}


