var text = document.querySelector("#numeroDocumento");
var ruc = "";
var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var guionExiste =false
var longitud = 0;

function validarNumeroDocumento() {
    longitud = ruc.length
    if (!ruc.includes('-'))
        guionExiste = false
    if (text.value.length < longitud) {
        ruc = text.value;
        return;
    }
    if (guionExiste && ruc.charAt(longitud - 1) !== "-") {
        text.value = ruc;
        return;
    }
    
    let ingresado = text.value.charAt(text.value.length - 1);
    
    if (text.value.length === 1 && ingresado === "-") {
        text.value = '';
        return;
    }
    if (ingresado === "-" && guionExiste) {
        text.value = ruc;
        return;
    }
    
    if (ingresado === '-') {
        guionExiste = true;
    }
    if (numeros.includes(ingresado) || ingresado === '-') {
        ruc += ingresado;
        text.value = ruc;
    } else {
        text.value = ruc;
    }
}
$("#numeroDocumento").keyup(function (e) {
    validarNumeroDocumento();
})