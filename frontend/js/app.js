/* =====================================================
   APP PRINCIPAL
===================================================== */

let datos = [];

document.addEventListener("DOMContentLoaded", async () => {

    cargarTema();

    mostrarLoader();

    datos = await obtenerEstaciones();

    cargarTabla(datos);

    actualizarDashboard(datos);

    ocultarLoader();

    document

        .getElementById("modoOscuro")

        .addEventListener(

            "click",

            cambiarTema

        );

    document

        .getElementById("btnBuscar")

        .addEventListener(

            "click",

            () => {

                const resultado =

                    aplicarFiltros(datos);

                cargarTabla(resultado);

            }

        );

});