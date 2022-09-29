//Sitio web de compra de libros

//Objetos
//Libros

class Libros {
    constructor (titulo, autor, precio, imagen, id, cantidad) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.imagen = imagen
        this.id = id;
        this.cantidad = cantidad;
    }
}

//Clásicos
const orgulloPrejuicio = new Libros ("Orgullo y Prejuicio", "Jane Austen", 250, "orgullo.jpg", 1, 1);
const grandesEsperanzas = new Libros ("Grandes esperanzas", "Charles Dickens", 250, "esperanzas.jpg", 2, 1);
const persuasion = new Libros ("Persuasión", "Jane Austen", 210, "persuasion.png", "btn3", 3, 1);
const islaDelTesoro = new Libros ("La isla del tesoro", "Robert Louis Stevenson", 230, "isla.jpg", 4, 1);

//Juveniles
const seleccion = new Libros ("La selección", "Kiera Cass", 230, "seleccion.jpg", 5, 1);
const juegosHambre = new Libros ("Los juegos del hambre", "Suzanne Collins", 250, "hambre.jpg", 6, 1);
const delirium = new Libros ("Delirium", "Lauren Oliver", 230, "delirium.webp", 7, 1);
const quintaOla = new Libros ("La quinta ola", "Rick Yancey", 200, "quintaOla.jpg", 8, 1);

//Misterio
const sherlock = new Libros ("Las aventuras de Sherlock Holmes", "Arthur Conan Doyle", 230, "sherlock.jpg", 9, 1);
const orientExpress = new Libros ("Asesinato en el Orient Express", "Agatha Christie", 250, "orient.jpg", 10, 1);
const vecinosNovelas = new Libros ("Los vecinos mueren en las novelas", "Sergio Aguirre", 210, "novelas.jpg", 11, 1);
const telon = new Libros ("Telón", "Agatha Christie", 215, "telon.jpg", 12, 1);

//Recomendados
const relatosInesperado = new Libros ("Relatos de lo inesperado", "Roald Dahl", 240, "relatos.jpg", 13, 1);
const arbolesMuerenPie = new Libros ("Los árboles mueren de pie", "Alejandro Casona", 220, "arboles.jpg", 14, 1);
const mujercitas = new Libros ("Mujercitas", "Louisa May Alcott", 230, "mujercitas.jpg", 15, 1);
const caballeroArmadura = new Libros ("El caballero de la armadura oxidada", "Robert Fisher", 230, "armadura.jpg", 16, 1);

//Arrays
let librosDisponibles = [];
let librosClasicos = [];
let librosJuveniles = [];
let librosMisterio = [];
let librosRecomendados = [];
let carritoCompras = [];

//Push objetos
librosDisponibles.push(orgulloPrejuicio, grandesEsperanzas, persuasion, islaDelTesoro, seleccion,
    juegosHambre, delirium, quintaOla, sherlock, orientExpress, vecinosNovelas, telon, relatosInesperado,
    arbolesMuerenPie, mujercitas, caballeroArmadura);

librosClasicos.push(orgulloPrejuicio, grandesEsperanzas, persuasion, islaDelTesoro);
librosJuveniles.push(seleccion,juegosHambre, delirium, quintaOla);
librosMisterio.push(sherlock, orientExpress, vecinosNovelas, telon);
librosRecomendados.push(relatosInesperado,arbolesMuerenPie, mujercitas, caballeroArmadura);


//DOM
//Oferta de libros
const contenedorLibros = document.getElementById("contenedorLibros");

librosClasicos.forEach (libro => {
    let div = document.createElement("div");
    div.classList.add("col-md-2", "col-sm-5", "text-center", "my-3", "col-10", "d-flex", "flex-column", "tarjeta");
    div.innerHTML = `<img src="./img/${libro.imagen}" class="img-fluid imgCard">
                    <h4 class="mt-auto">${libro.titulo}</h4>
                    <p class="mt-auto"> $${libro.precio} </p>
                    <button id="boton${libro.id}" class="boton mt-auto "> Agregar al Carrito </button>`;
    contenedorLibros.appendChild(div);
        //Carrito
        const btnCarrito = document.getElementById(`boton${libro.id}`);
        btnCarrito.addEventListener("click", ()=>{
            carritoCompras.push(libro);
            mostrarCarrito();
        })
})

const contenedorJuveniles = document.getElementById("contenedorJuveniles");

librosJuveniles.forEach (libro => {
    let div = document.createElement("div");
    div.classList.add("col-md-2", "col-sm-5", "text-center", "my-3", "col-10", "d-flex", "flex-column", "tarjeta");
    div.innerHTML = `<img src="./img/${libro.imagen}" class="img-fluid imgCard">
                    <h4 class="mt-auto">${libro.titulo}</h4>
                    <p class="mt-auto"> $${libro.precio} </p>
                    <button id="boton${libro.id}" class="boton mt-auto"> Agregar al Carrito </button>`;
    contenedorJuveniles.appendChild(div);

    //Carrito
    const btnCarrito = document.getElementById(`boton${libro.id}`);
    btnCarrito.addEventListener("click", ()=>{
        carritoCompras.push(libro);
        mostrarCarrito();
    })

})




const contenedorMisterio = document.getElementById("contenedorMisterio");

librosMisterio.forEach (libro => {
    let div = document.createElement("div");
    div.classList.add("col-md-2", "col-sm-5", "text-center", "my-3", "col-10", "d-flex", "flex-column", "tarjeta");
    div.innerHTML = `<img src="./img/${libro.imagen}" class="img-fluid imgCard">
                    <h4 class="mt-auto">${libro.titulo}</h4>
                    <p class="mt-auto"> $${libro.precio} </p>
                    <button id="boton${libro.id}" class="boton mt-auto"> Agregar al Carrito </button>`;
    contenedorMisterio.appendChild(div);

        //Carrito
        const btnCarrito = document.getElementById(`boton${libro.id}`);
        btnCarrito.addEventListener("click", ()=>{
            carritoCompras.push(libro);
            mostrarCarrito();
        })
})

const contenedorRecomendados = document.getElementById("contenedorRecomendados");

librosRecomendados.forEach (libro => {
    let div = document.createElement("div");
    div.classList.add("col-md-2", "col-sm-5", "text-center", "my-3", "col-10", "d-flex", "flex-column", "tarjeta");
    div.innerHTML = `<img src="./img/${libro.imagen}" class="img-fluid imgCard">
                    <h4 class="mt-auto" >${libro.titulo}</h4>
                    <p class="mt-auto"> $${libro.precio} </p>
                    <button id="boton${libro.id}" class="boton mt-auto"> Agregar al Carrito </button>`;
    contenedorRecomendados.appendChild(div);

    const btnCarrito = document.getElementById(`boton${libro.id}`);
    //Carrito
        btnCarrito.addEventListener("click", ()=>{
            carritoCompras.push(libro);
            mostrarCarrito();
        })

})



//Carrito
const carrito = document.getElementById("carrito");

function mostrarCarrito(){
    let aux="";
    carritoCompras.forEach (libro =>{
        aux += ` 
                <div class="d-flex my-3">
                <img src="./img/${libro.imagen}" class="img-fluid imgCarrito">
                <div class="d-flex flex-column m-3">
                    <h4 class="mt-auto">${libro.titulo}</h4>
                    <p class="mt-auto"> $${libro.precio} </p>
                    <button id="sacar${libro.id}" onClick = "eliminarDelCarrito(${libro.numero})" class="boton mt-auto"> Quitar del carrito </button>
                </div>
            </div>`;
        
        
    })
    carrito.innerHTML = aux 
    calcularTotalCompra();
    localStorage.setItem("compras", JSON.stringify(carritoCompras));
}

const eliminarDelCarrito = (numero) => {
    const libro = carritoCompras.find(libro => libro.numero === numero);
    carritoCompras.splice(carritoCompras.indexOf(libro),1);
    mostrarCarrito(); 
}

const totalCompra = document.getElementById("totalCompra")
let total;

const calcularTotalCompra = () => {
    total = 0; 
    carritoCompras.forEach( libro => {
        total += libro.precio * libro.cantidad;
    });
    totalCompra.innerText = "Tu total es de: $" + total;
    localStorage.setItem("total", total)
}




