//Seccion aparte del carrito de compras
let carritoCompras = [];
if (localStorage.getItem("compras")){
    let libroComprado = JSON.parse(localStorage.getItem("compras"));
    carritoCompras.push(...libroComprado)
}

//Factura
carritoCompras.forEach(libro => {
    let div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-between");
    div.innerHTML = `<h3 class="infoFactura">${libro.titulo} x${libro.cantidad}</h3>
                    <h3 class="infoFactura">$${libro.precio} c/u</h3>
                    `;
    factura.appendChild(div);
})

const facturaTotal = document.getElementById("facturaTotal");
const verFactura = document.getElementById("verFactura")

//Botones 
let totalFinal = localStorage.getItem("total");
verFactura.onclick = () =>{
   totalFinal == null ? facturaTotal.innerText = `Tu total es de $0`: facturaTotal.innerText = `Tu total es de $${totalFinal}`   
}



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

    if (isNaN(tarjetaCliente)){
        swal.fire({
            title:"Tarjeta no válida",
            icon:"error"
        })
    } else{
        Swal.fire({
        title: `¡Gracias por tu compra, ${nombreCliente} ${apellidoCliente}!`,
        text: `Enviaremos tu compra a ${direccionCliente}`,
        icon: "success",
        backdrop: "white"
    })
    } 
    
    localStorage.clear();
})


//Fución de cancelar
const cancelar = document.getElementById("cancelar");

cancelar.onclick = () =>{
    localStorage.clear();
}

