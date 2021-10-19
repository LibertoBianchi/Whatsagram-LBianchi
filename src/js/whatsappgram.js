var mayus = 1;

function enviar() {
    if (document.getElementById("mensaje").value.trim() != "") {
        var mensaje = document.createElement("p");
        var enviado = document.createTextNode(document.getElementById("mensaje").value);
        mensaje.appendChild(enviado);
        document.getElementById("messagingArea").appendChild(mensaje);
        document.getElementById("mensaje").value = "";
        mayus = 1
    }
}

function mandarLetra(letra) {
    if (mayus == 0) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra;
    } else if (mayus == 1) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
        mayus = 0
    } else if (mayus == 2) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
    }
}

function saltoLinea() {
    document.getElementById("mensaje").value = document.getElementById("mensaje").value + "\n";
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
}

function eliminarUltimaPalabra() {
    var texto = document.getElementById("mensaje").value.trim();
    var ultimoEspacio = texto.lastIndexOf(" ");
    document.getElementById("mensaje").value = texto.substring(0, ultimoEspacio);
}

function mayuscula() {
    if (mayus == 0) {
        mayus = 1
    } else if (mayus == 1) {
        mayus = 2
    } else if (mayus == 2) {
        mayus = 0
    }
}