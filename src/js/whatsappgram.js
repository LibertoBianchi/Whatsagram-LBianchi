//Variables globales para control
var mayus = 1;
var emoji = 1
var fechaControl = 0;

//Enviará los mensajes del mensaje a la missagingArea
function enviar() {
    //Creamos la hora para unirla al mensaje posteriormente
    var fecha = new Date();
    var horaMsjHoras = fecha.getHours() + ":"
    var horaMsjMin = +fecha.getMinutes();

    var horaMinTxt = horaMsjMin.toLocaleString();

    //array para formatear el dia
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        //si los minutos son menores que 10 añade un cero a los minutos
    console.log(horaMinTxt)
    if (horaMinTxt < 10) {
        horaTxt = fecha.getHours() + ":" + "0" + fecha.getMinutes()

    } else {
        horaTxt = fecha.getHours() + ":" + fecha.getMinutes()
    }
    console.log(horaMinTxt)
        //variable que printearemos como el dia en que se envia el mensaje
    var diaMes = new Date();
    diaMes = "<h1 class=" + "fechas" + ">" + (diaMes.getDate() + " de " + meses[diaMes.getMonth()]).toLocaleString() + "</h1>";

    //Control para que el dia solo se printe una vez
    if (fechaControl == 0) {
        document.getElementById("messagingArea").innerHTML += diaMes
        fechaControl++
    }

    //Si el mensaje no esta vacío crea y envia al messagingArea el mensaje y la hora
    if (document.getElementById("mensaje").value.trim() != "") {

        document.getElementById("messagingArea").innerHTML += "<p>" + document.getElementById("mensaje").value + " " + "<font style='font-size:1.5vh'>" + horaTxt + "</font>" + "</p>";
        //vaciamos el valor del mensaje y ponermos las mayusculas en true
        document.getElementById("mensaje").value = "";
        mayus = 1
        document.getElementById("mayus").value = "⇪"
    }
}

//Recibe de parametro una letra enviada y la envia al mensaje
function mandarLetra(letra) {
    //Comprobará la variable mayuscula y dependiendo de su valor pondrá mayusculas o cambiará su estado
    if (mayus == 0) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra;
        //En caso de que el valor letra sea un punto, la próxima letra será escrita en mayuscula
        if (letra == ".") {
            mayus = 1
        }
    } else if (mayus == 1) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
        mayus = 0;
        document.getElementById("mayus").value = "⇧"

    } else if (mayus == 2) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
    }
}

//Se añadirá un br al valor de mensaje
function saltoLinea() {
    document.getElementById("mensaje").value = document.getElementById("mensaje").value + " <br> ";
}

//Recibe un parametro, segun su valor elimina alante o elimina atrás
function eliminarCaracter(a) {
    var texto = document.getElementById("mensaje").value.trim();

    if (a == "delante") {
        document.getElementById("mensaje").value = texto.slice(0, -1);
    } else if (a == "atras") {
        document.getElementById("mensaje").value = texto.slice(1)
    };
}

//Da un valor vacio al string y la proxima letra será mayuscula
function limpiarTexto() {
    document.getElementById("mensaje").value = "";
    mayus = 1;
}

//Busca el último espacio y elimina la palabra antes que ese ultimo espacio
function eliminarUltimaPalabra() {
    var texto = document.getElementById("mensaje").value.trim();
    var ultimoEspacio = texto.lastIndexOf(" ");

    document.getElementById("mensaje").value = texto.substring(0, ultimoEspacio);
}

//Cambia el valor de la global mayus y cambia el estilo de la tecla mayusculas
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

//Cambia el valor de la globl emoji para hacer aparecer y desaparecer el emojiArea
function verEmoji() {
    console.log("funciona")
    if (emoji == 1) {
        document.getElementById("emojiArea").classList.remove('emojiAreaInv');
        document.getElementById("emojiArea").classList.add('emojiAreaVis');
        document.getElementById("emojiButton").value = "🄰"
        emoji = 0;
    } else if (emoji == 0) {
        document.getElementById("emojiArea").classList.remove('emojiAreaVis');
        document.getElementById("emojiArea").classList.add('emojiAreaInv');
        document.getElementById("emojiButton").value = "☻"
        emoji = 1;
    }
}