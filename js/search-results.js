// BOTÓN DARK Y LIGHT MODE
const contenedorLight = document.querySelector("main");
const modoBoton = document.querySelector("#light-mode");

function aplicarModo(modo) {
    contenedorLight.classList.toggle('dark-mode', modo === 'dark-mode');
    contenedorLight.classList.toggle('light-mode', modo === 'light-mode');
    localStorage.setItem('modo', modo);
}

let modoActual = localStorage.getItem('modo'); // AL CARGAR LA PÁGINA, SE PONE EL MODO GUARDADO LA ÚLTIMA VEZ QUE SE INGRESÓ 
if (modoActual === 'dark') {
  aplicarModo('dark-mode');
} else if (modoActual === 'light') {
  aplicarModo('light-mode');
}

modoBoton.addEventListener('click', function () { // CADA VEZ QUE TOCO EL BOTON SE CAMBIA EL MODO
  if (contenedorLight.classList.contains('dark-mode')) {
    aplicarModo('light-mode');
  } else {
    aplicarModo('dark-mode');
  }
});


// BUSCADOR
let buscador = document.querySelector("#buscador")
let formulario = document.querySelector("#contenedor-form")

formulario.addEventListener('submit', function (e) {
    
    let terminoBuscador = buscador.value.trim();

    if (terminoBuscador === "") {
        e.preventDefault()
        alert("No puede dejar el campo vacío")
        return
    }
    if (terminoBuscador.length < 3) {
        e.preventDefault()
        alert("Su búsqueda debe tener más de 3 caracteres")
        return
    }
})


let qs =location.search
let qsObject = new URLSearchParams(qs)
let buscar = qsObject.get("buscador")
let endpoint ="https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + buscar


let contenedor = document.querySelector(".search-results-final")
fetch(endpoint)
.then(function(response){
 return response.json()
})
.then(function(data){
    console.log(data)
    if (data.data.length == 0){
        contenedor.innerHTML = `<h3>No hay resultados para su busqueda</h3>`
    }
    else {
        contenedor.innerHTML = `<h1>Resultados de busqueda para: </h1>`
        for (let i=0; i<10; i++){
            contenedor.innerHTML += `<article class="cancion-buscada">
                <img src="${data.data[i].album.cover_medium}">
                <a href="detail-track.html?id=${data.data[i].id}"><h2>${data.data[i].title}</h2></a>

            </article>`
        }
    }
    
})
.catch(function(error){
    console.log(error)
})

