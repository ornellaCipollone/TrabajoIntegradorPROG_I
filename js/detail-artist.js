// CAPTURANDO EL ARTISTA CUYO DETALLE QUIERE VISUALIZAR EL USUARIO
let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id")
console.log(id)

// CAPTURANDO LA SECCIÓN DONDE QUIERO AGREGAR EL CONTENIDO Y AGREGÁNDOLO
let seccion = document.querySelector(".detail-artist")

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        seccion.innerHTML = 
            `<h1 class="titulo-listados">${data.name}</h1>
            <img class="img-detailartist" src="${data.picture_big}"/>`
    })
    .catch(function (error) {
        console.log(error)
    })

let contenedor = document.querySelector(".albumes-artista")

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + id + "/albums")
    .then(function (responses) {
        return responses.json()
    })
    .then(function (datas) {
        console.log(datas)
        for (let i = 0; i < 5; i++) {
            contenedor.innerHTML +=
            `<li class="listados">
                <img class="img-listados" src="${datas.data[i].cover_medium}">
                <a href= "detail-album.html?id=${datas.data[i].id}">
                    <h4 class="tituloAlbum"> "${datas.data[i].title}"</h4>
                </a>
            </li>`            
        }
    })
    .catch(function (error) {
        console.log(error)
    })