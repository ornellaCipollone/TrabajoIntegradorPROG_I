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
    