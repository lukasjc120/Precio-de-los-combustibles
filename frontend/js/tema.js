/* =====================================================
   TEMA
===================================================== */

function cargarTema() {

    const tema = localStorage.getItem("tema");

    if (tema === "dark") {

        document.body.classList.add("dark");

    }

}

function cambiarTema() {

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "tema",

        document.body.classList.contains("dark")

            ? "dark"

            : "light"

    );

}