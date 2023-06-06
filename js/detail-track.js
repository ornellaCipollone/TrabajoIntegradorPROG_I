let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id") 
console.log(id)


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
    <h2>Mi playlist</h2>
    </article>  
    `
})
.catch(function(error){
    console.log("el error es:" + error)
})