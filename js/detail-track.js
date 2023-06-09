let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id") 
console.log(id)
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

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/track/" + id)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let contenedor = document.querySelector(".padre-detail-track")

    contenedor.innerHTML = `<article>
    <img src="${data.album.cover_medium}">
    <h1>${data.title}</h1>
    <a href=./detail-album?id=${data.album.id}><h2>${data.album.title}</h2></a>
    <a href=./detail-artist?id=${data.artist.id}><h3>${data.artist.name}</h3></a>
    </article>

    <article>
    <h1>Agregar a mi playlist</h1>
    <a href="playlist.html"><h2>Mi playlist</h2></a>
    </article>  
    `
})
.catch(function(error){
    console.log("el error es:" + error)
})
let favoritos=[]

let recupero = localStorage.getItem('favoritos')
let favs = JSON.parse(recupero)
for (i=0; i < favs.length; i++){
    favoritos.push(favs[i])
}


let botonFav= document.querySelector(".fav")
botonFav.addEventListener('click',function(e){
    if (favoritos.includes(id)){
        let indice = favoritos.indexOf(id)
        console.log(indice)
        favoritos.splice(indice,1)
        botonFav.innerText = "Agregar a playlist"
    }
    else {
        botonFav.innerText="Quitar de playlist"
        favoritos.push(id)
    }
    let stringify = JSON.stringify(favoritos)
    localStorage.setItem('favoritos',favoritos)
    console.log(favoritos)
})



console.log(favoritos)

