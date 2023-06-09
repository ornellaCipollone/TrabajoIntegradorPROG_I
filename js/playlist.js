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


// PLAYLIST
let favoritos = []
let recupero = localStorage.getItem('favoritos')
if (recupero != null) {
    favoritos = JSON.parse(recupero)
}
console.log(favoritos)
let contenedor = document.querySelector(".resultados-favoritos")
for (i = 0; i < favoritos.length; i++) {
    let id = favoritos[i]
    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + id
    console.log(id)

    fetch(url)
        .then(function (response) {
            let respuesta = response.json()
            return respuesta
        })
        .then(function (data) {
            console.log(data)
            contenedor.innerHTML +=
                `<article class="article-playlist"> 
                    <img class="img-playlist" src="${data.album.cover_medium}" >
                    <a class="link-id" href= "detail-track.html?id=${data.id}">
                        <h2 class="nombre-cancion-playlist">${data.title}</h2>
                    </a>
                </article>`
        })
        .catch(function (error) {
            console.log(error)
        })
}

