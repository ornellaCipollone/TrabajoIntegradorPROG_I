// BUSCADOR
let buscador = document.querySelector("#buscador")
let formulario = document.querySelector("#contenedor-form")

formulario.addEventListener('submit', function (e) {
    
    let terminoBuscador = buscador.value.trim();

    if (terminoBuscador === "") {
        e.preventDefault()
        alert("ingrese texto")
        return
    }
    if (terminoBuscador.length < 3) {
        e.preventDefault()
        alert("debe tener mas de 3 caracteres")
        return
    }
})


// LISTA CANCIONES
fetch("https://api.allorigins.win/raw?url=" + "https://api.deezer.com/chart")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let contenedorTrack = document.querySelector(".canciones")
        for (let i = 0; i < 5; i++)
            contenedorTrack.innerHTML += 
            `<li class="listados"> 
                <img class="img-listados" src="${data.tracks.data[i].album.cover}">   
                <a href="./detail-track.html">
                    <h4 class="nombreTrack">${data.tracks.data[i].title}</h4>
                </a>    
                <a href="./detail-artist.html?id=${data.tracks.data[i].artist.id}">
                    <h5 class="nombreArtista">${data.tracks.data[i].artist.name}</h5>
                </a>    
            </li>`
    })
    .catch(function (error) {
        console.log(error)
    })

    
// LISTA ÁLBUMES
fetch("https://api.allorigins.win/raw?url=" + "https://api.deezer.com/chart/0/albums")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let contenedor = document.querySelector(".albumes")
        for (let i = 0; i < 5; i++)
            contenedor.innerHTML += 
            `<li class="listados"> 
                <img class="img-listados" src="${data.data[i].cover}">
                <a href="./detail-album.html"> 
                    <h4 class="tituloAlbum">"${data.data[i].title}"</h4> 
                </a>
            </li>`
    })
    .catch(function (error) {
        console.log(error)
    })


// LISTA ARTISTAS
fetch("https://api.allorigins.win/raw?url=" + "https://api.deezer.com/chart/0/artists")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let contenedorArtista = document.querySelector(".artistas")
        for (let i = 0; i < 5; i++)
            contenedorArtista.innerHTML +=
                `<li class="listados">
                    <img class="img-listados" src="${data.data[i].picture}">
                    <a href= "./detail-artist.html?id=${data.data[i].id}">
                        <h4 class="nombreArtista"> "${data.data[i].name}"</h4>
                    </a>
                </li>`
    })
    .catch(function (error) {
        console.log(error)
    })


