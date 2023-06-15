// BOTÓN DARK Y LIGHT MODE
let contenedorLight = document.querySelector("main")
let modoBoton = document.querySelector("#light-mode")
let guardado = localStorage.getItem('modo')

if (guardado == 'dark') {
    contenedorLight.classList.add('dark-mode')
}
else if (guardado == 'light') {
    contenedorLight.classList.add('light-mode')
}

modoBoton.addEventListener('click', function () {
    contenedorLight.classList.toggle('dark-mode')
    contenedorLight.classList.toggle('light-mode')
    if (contenedorLight.classList.contains('dark-mode')) {
        localStorage.setItem('modo', 'dark')
    }
    else {
        localStorage.setItem('modo', 'light')
    }
})


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
    else if (terminoBuscador.length < 3) {
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
            <img class="img-detailtrack" src="${data.album.cover_medium}"/> 
            <audio controls>
            <source src="${data.preview}" type="audio/mpeg">
            </audio>
            `

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


// BOTÓN DE "AGREGAR/QUITAR A PLAYLIST" Y SU FUNCIONALIDAD   
let favoritos = []
let recupero = localStorage.getItem('favoritos');
if (recupero != null) {
    favoritos = JSON.parse(recupero);
}

let botonFav = document.querySelector("#fav")
if (favoritos.includes(id)) {
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



