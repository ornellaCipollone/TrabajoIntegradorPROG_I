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
        for (let i = 0; i<data.tracks.data.length; i++) {
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
