function validar() {
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var mensaje = document.getElementById("mensaje");
    if (usuario == "admin" && pass == "admin") {
        // mensaje.innerHTML = ("Usuario Correcto");
    }
    else {
        mensaje.innerHTML = ("Usuario o password Incorrecto");
        setTimeout(function () {
            mensaje.innerHTML = "";
        }, 3000);
    }
}

//----------

var timeInterval;
var min = 0, sec = 0;

function start() {
    timeInterval = setInterval(contSec, 1000);
}
function pause() {
    if (timeInterval != null)
        clearInterval(timeInterval);
}

function stop() {
    if (timeInterval != null)
        clearInterval(timeInterval);
    putSec(0, 0,"hora");
    min = 0;
    sec = 0;
}

function contSec() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    putSec(min, sec,"hora");
}

function putSec(m, s) {
    var hora = document.getElementById("hora");
    var mS = "" + m, sS = "" + s;
    hora.innerHTML = getFormat(m) + ":" + getFormat(s);

}

function putSec(m, s, id) {
    var hora = document.getElementById(id);
    var mS = "" + m, sS = "" + s;
    hora.innerHTML = getFormat(m) + ":" + getFormat(s);

}

function getFormat(n) {
    var ns;
    if (n < 10) {
        ns = "0" + n;
    } else {
        ns = "" + n;
    }
    return ns;
}

//--------------

function initTime() {
    setInterval(function(){
        var date = new Date();
        putSec(date.getHours(),date.getMinutes(),"tiempo");
    },1000);
}