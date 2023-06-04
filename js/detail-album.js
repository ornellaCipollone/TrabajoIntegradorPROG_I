let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id") 
console.log(id)
let contenedor = document.querySelector(".padre-detail-album")
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/album/"+id)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    contenedor.innerHTML += `
    <section>
    <img src="${data.cover_medium}"/>
    <h1>${data.title}</h1>
    <a href="detail-artist.html?id=${data.artist.id}"><h2>${data.artist.name}</h2></a>
    <a><h3>${data.genres.data.name}</h3></a>
    <h4>${data.release_date}</h4>
    </section>
    `
    let canciones= document.querySelector(".canciones-detail-album")
    for (let i = 0; i<5;i++){
        canciones.innerHTML += `<article>
        <img src="${data.cover_small}"/>
        <a href="detail-track.html?id=${data.tracks.data[i].id}"><p>${data.tracks.data[i].title_short}</p></a>

        </article>
        `
    }
})
.catch(function(error){
    console.log(error)
})
