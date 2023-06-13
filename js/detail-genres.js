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


// CAPTURANDO EL GÉNERO CUYO DETALLE QUIERE VISUALIZAR EL USUARIO
let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
console.log(id)

// CAPTURANDO LA SECCIÓN DONDE QUIERO AGREGAR EL CONTENIDO Y AGREGÁNDOLO
let seccion = document.querySelector(".detail-genero")

fetch("https://api.allorigins.win/raw?url=" + "https://api.deezer.com/genre/" + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        seccion.innerHTML =
            `<h1 class="titulo-listados">${data.name}</h1>
            <img class="img-detailgenre" src="${data.picture_big}"/> `

    })
    .catch(function (error) {
        console.log(error)
    })


let contenedor = document.querySelector(".artistas-genero")

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/" + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 10; i++) {
            contenedor.innerHTML +=
                `<li class="listados">
                    <img class="img-listados" src="${data.artists.data[i].picture_small}">
                    <a href= "./detail-artist.html?id=${data.artists.data[i].id}">
                        <h4 class="nombreArtista"> "${data.artists.data[i].name}"</h4>
                    </a>
                </li>`
        }
    })
    .catch(function (error) {
        console.log(error)
    })
