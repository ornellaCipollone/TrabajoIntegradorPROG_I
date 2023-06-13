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


// CAPTURANDO EL ÁLBUM CUYO DETALLE QUIERE VISUALIZAR EL USUARIO
let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
console.log(id)

// CAPTURANDO LA SECCIÓN DONDE QUIERO AGREGAR EL CONTENIDO Y AGREGÁNDOLO
let contenedor = document.querySelector(".detail-album")
let contenedor2= document.querySelector(".info-album")

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        contenedor.innerHTML += 
            `<h1 class="titulo-listados">${data.title}</h1>
            <img class="img-detailalbum" src="${data.cover_medium}"/>`
       
        contenedor2.innerHTML += 
            `<a href="detail-artist.html?id=${data.artist.id}">
                <h4 class="contenido-info-album"> Artista: ${data.artist.name}</h4>
            </a>
            <a href="detail-genres.html?id=${data.genres.data[0].id}">
                <h4 class="contenido-info-album"> Género: ${data.genres.data[0].name}</h4>
            </a>
            <div>
                <h4 class="contenido-info-album"> Fecha de lanzamiento: ${data.release_date}</h4>
            </div>`
            
          
        let canciones = document.querySelector(".canciones-detail-album")
        for (let i = 0; i<10; i++) {
            canciones.innerHTML += 
            `<li class="listados">
                <img class="img-listados" src="${data.tracks.data[i].album.cover_medium}">
                 <a href= "./detail-track.html?id=${data.tracks.data[i].id}">
                    <h4 class="nombreTrack"> "${data.tracks.data[i].title_short}"</h4>
                </a>
            </li>`
        }
    })
    .catch(function (error) {
        console.log(error)
    })
