const tabla = document.getElementById("tabla");

async function cargarDatos() {

    const respuesta =
        await fetch(
            "http://localhost:3000/api/estaciones"
        );

    const datos = await respuesta.json();

    tabla.innerHTML = "";

    datos.forEach(item => {

        tabla.innerHTML += `
            <tr>
                <td>${item.empresa}</td>
                <td>${item.provincia}</td>
                <td>${item.localidad}</td>
                <td>${item.combustible}</td>
                <td>$${item.precio}</td>
            </tr>
        `;
    });
}

cargarDatos();