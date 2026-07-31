/* =====================================================
   FILTROS
===================================================== */

function aplicarFiltros(datos) {

    const empresa =

        document.getElementById("filtroEmpresa")

        .value.toLowerCase();

    const provincia =

        document.getElementById("filtroProvincia")

        .value.toLowerCase();

    return datos.filter(item => {

        return item.empresa.toLowerCase().includes(empresa)

            && item.provincia.toLowerCase().includes(provincia);

    });

}