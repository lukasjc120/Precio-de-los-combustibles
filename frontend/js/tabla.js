/* =====================================================
   TABLA
===================================================== */

function cargarTabla(datos) {

    const tbody =

        document.querySelector("#tabla tbody");

    tbody.innerHTML = "";

    datos.forEach(item => {

        tbody.innerHTML += `

<tr>

<td>${item.empresa}</td>

<td>${item.provincia}</td>

<td>${item.localidad}</td>

<td>${item.direccion}</td>

<td>${item.combustible}</td>

<td>${formatearPrecio(item.precio)}</td>

</tr>

`;

    });

}