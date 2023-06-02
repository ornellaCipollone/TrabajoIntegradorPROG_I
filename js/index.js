let buscador = document.querySelector("#buscador")
let formulario = document.querySelector("#contenedor-form")

formulario.addEventListener('submit', function(e) {;
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
});

fetch ("https://api.allorigins.win/raw?url="+"https://api.deezer.com/chart/0/albums")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let contenedor = document.querySelector(".albumes")
        for (let i=0 ; i<5; i++ )
        contenedor.innerHTML += `<li class="listados"> <a href="./detail-album.html"><img src=${data.data[i].cover}><h4 class="tituloAlbum">${data.data[i].title}</h4></a></li>`
        

    })
    .catch (function(error){
        console.log(error)
    })

    fetch("https://api.allorigins.win/raw?url="+"https://api.deezer.com/chart/0/artists")
        .then(function(response){
        return response.json()
        })
        .then(function(data){   
         console.log(data);
         let contenedorArtista = document.querySelector(".artistas")
         for (let i=0 ; i<5; i++ )
        contenedorArtista.innerHTML += `<li class="listados"> <a href="./detail-artist.html"><img src=${data.data[i].picture}><h4 class="nombreArtista">${data.data[i].name}</h4></a></li>`
        })
        .catch (function(error){
            console.log(error)
        })

        fetch("https://api.allorigins.win/raw?url="+"https://api.deezer.com/chart")
        .then(function(response){
        return response.json()
        })
        .then(function(data){   
         console.log(data)
         let contenedorTrack = document.querySelector(".canciones")
         for (let i=0 ; i<5; i++ )
        contenedorTrack.innerHTML += `<li class="listados"> <a href="./detail-track.html"><img src=${data.tracks.data[i].album.cover}></a><h4 class="nombreTrack" ><a href="./detail-artist"></a>${data.tracks.data[i].title}</h4>
        <h5 class="nombreArtista">${data.tracks.data[i].artist.name}</h5>
        </li>`
        })
        .catch (function(error){
            console.log(error)
        })
