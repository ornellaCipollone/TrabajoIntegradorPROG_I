// BOTÓN DARK Y LIGHT MODE
const contenedorLight = document.querySelector("main");
const modoBoton = document.querySelector("#light-mode");

function aplicarModo(modo) {
  contenedorLight.classList.remove('dark-mode', 'light-mode');
  contenedorLight.classList.add(modo);
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


// CAPTURANDO EL TRACK CUYO DETALLE QUIERE VISUALIZAR EL USUARIO
let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
console.log(id)

// CAPTURANDO LA SECCIÓN DONDE QUIERO AGREGAR EL CONTENIDO Y AGREGÁNDOLO
let contenedor = document.querySelector(".detail-track")
let contenedor2 = document.querySelector(".info-track")


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        contenedor.innerHTML += 
            `<h1 class="titulo-listados">${data.title}</h1>
            <img class="img-detailtrack" src="${data.album.cover_medium}"/> `            
        
        contenedor2.innerHTML += 
            `<a href="./detail-artist.html?id=${data.artist.id}">
                <h4 class="contenido-info-track">Artista: ${data.artist.name}</h4>
            </a>
               
            <a href="detail-album.html?id=${data.album.id}">
                <h4 class="contenido-info-track">Álbum al que pertenece: ${data.album.title}</h4>
            </a>
            
            <div>
                <h4 class="contenido-info-track">Fecha de lanzamiento: ${data.release_date}</h4>
            </div>`
    })
    .catch(function (error) {
        console.log("el error es:" + error)
    })

    let favoritos = []
    let recupero = localStorage.getItem('favoritos');
    if (recupero != null) {
        favoritos = JSON.parse(recupero);
    }
    let botonFav = document.querySelector("#fav")
    if (favoritos.includes(id)){
        botonFav.innerText = "Quitar de playlist"
    }


    
    botonFav.addEventListener('click', function (e) {
        console.log(favoritos)
        if (favoritos.includes(id)) {
            let indice = favoritos.indexOf(id)
            console.log(indice)
            favoritos.splice(indice, 1)
            botonFav.innerText = "Agregar a playlist"
        }
        else {
            favoritos.push(id)
            botonFav.innerText = "Quitar de playlist"
            console.log(favoritos)
        }
        let arrayTostring = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', arrayTostring)
        console.log(favoritos)
    })



