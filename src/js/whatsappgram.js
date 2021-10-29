var mayus = 1;
var emoji = 1
var fechaControl = 0;

function enviar() {
    console.log(document.getElementById("mensaje").value)
    var fecha = new Date();
    var horaMsj = fecha.getHours() + ":" + fecha.getMinutes();
    var horaTxt = horaMsj.toLocaleString();

    if (fecha.getMinutes < 10) {
        horaMsj = fecha.getHours() + ":" + "0" + fecha.getMinutes()

    }

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    var diaMes = new Date();
    diaMes = "<h1 class=" + "fechas" + ">" + (diaMes.getDate() + " de " + meses[diaMes.getMonth()]).toLocaleString() + "</h1>";

    if (fechaControl == 0) {

        document.getElementById("messagingArea").innerHTML += diaMes
        fechaControl++
    }

    if (document.getElementById("mensaje").value.trim() != "") {
        var mensaje = document.createElement("p");
        var horaEnv = document.createElement("span");



        document.getElementById("messagingArea").innerHTML += "<p>" + document.getElementById("mensaje").value + " " + "<font style='font-size:2vh'>" + horaTxt + "</font>" + "</p>";



        document.getElementById("mensaje").value = "";
        mayus = 1

    }
}

function mandarLetra(letra) {
    if (mayus == 0) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra;
        if (letra == ".") {
            mayus = 1
        }
    } else if (mayus == 1) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
        mayus = 0
    } else if (mayus == 2) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
    }
}

function saltoLinea() {
    document.getElementById("mensaje").value = document.getElementById("mensaje").value + "<br>";
}

function eliminarCaracter(a) {
    var texto = document.getElementById("mensaje").value.trim();

    if (a == "delante") {
        document.getElementById("mensaje").value = texto.slice(0, -1);
    } else if (a == "atras") {
        document.getElementById("mensaje").value = texto.slice(1)
    };
}

function limpiarTexto() {
    document.getElementById("mensaje").value = "";
    mayus = 1;
}

function eliminarUltimaPalabra() {
    var texto = document.getElementById("mensaje").value.trim();
    var ultimoEspacio = texto.lastIndexOf(" ");

    document.getElementById("mensaje").value = texto.substring(0, ultimoEspacio);
}

function mayuscula() {
    if (mayus == 0) {
        mayus = 1
        document.getElementById("mayus").value = "⇪"

    } else if (mayus == 1) {
        mayus = 2
        document.getElementById("mayus").classList.add('mayusPerma');


    } else if (mayus == 2) {
        mayus = 0
        document.getElementById("mayus").classList.remove('mayusPerma');
        document.getElementById("mayus").value = "⇧"
    }
}

function verEmoji() {
    console.log("funciona")
    if (emoji == 1) {
        document.getElementById("emojiArea").classList.remove('emojiAreaInv');
        document.getElementById("emojiArea").classList.add('emojiAreaVis');
        document.getElementById("emojiButton").value = "Txt"
        emoji = 0;
    } else if (emoji == 0) {
        document.getElementById("emojiArea").classList.remove('emojiAreaVis');
        document.getElementById("emojiArea").classList.add('emojiAreaInv');
        document.getElementById("emojiButton").value = "☻"
        emoji = 1;
    }
}