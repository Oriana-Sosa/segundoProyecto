//Seccion aparte del carrito de compras
if (localStorage.getItem("compras")){
    let libroComprado = JSON.parse(localStorage.getItem("compras"));
    carritoCompras.push(...libroComprado)
}

//Factura
carritoCompras.forEach(libro => {
    let div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-between");
    div.innerHTML = `<h3 class="infoFactura">${libro.titulo}</h3>
                    <h3 class="infoFactura">$${libro.precio}</h3>
                    `;
    factura.appendChild(div);
})

const facturaTotal = document.getElementById("facturaTotal");
const verFactura = document.getElementById("verFactura")

//Botones 
verFactura.onclick = () =>{
    facturaTotal.innerText = `Tu total es de $${totalFinal}`
}

let totalFinal = localStorage.getItem("total");


const formulario = document.getElementById("formulario");

//Reuno la info del formulario para utilizarla más adelante con librerías
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("apellido");
    const direccion = document.getElementById("direccion");
    const numeroTarjet = document.getElementById("numeroTarjeta");

    let nombreCliente = (nombre.value)
    let apellidoCliente = (apellido.value);
    let emailCliente = (email.value);
    let direccionCliente = (direccion.value);
    let tarjetaCliente = (numeroTarjet.value);

    isNaN(tarjetaCliente) && alert("Tarjeta no válida");
})


//Fución de cancelar
const cancelar = document.getElementById("cancelar");

cancelar.onclick = () =>{
    localStorage.clear();
}
