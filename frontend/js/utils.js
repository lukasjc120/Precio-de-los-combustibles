/* =====================================================
   UTILIDADES
===================================================== */

function formatearPrecio(precio) {

    return Number(precio).toLocaleString(

        "es-AR",

        {

            style: "currency",

            currency: "ARS"

        }

    );

}

function capitalizar(texto) {

    if (!texto) return "";

    return texto.charAt(0).toUpperCase() +

        texto.slice(1).toLowerCase();

}

function limpiarElemento(id) {

    document.getElementById(id).innerHTML = "";

}