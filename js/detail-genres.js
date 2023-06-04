let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id") 
console.log(id)
let seccion= document.querySelector(".detail-genero")
fetch("https://api.allorigins.win/raw?url="+"https://api.deezer.com/genre/"+id)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        seccion.innerHTML = `<h1 clas="nombre-genero">${data.name}</h1>
        <img  src="${data.picture_big}"/>
        
        `

    })
    .catch(function(error){
        console.log(error)
    })
let contenedor=document.querySelector(".artistas-genero")
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/"+id)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i = 0; i < 10; i++) {
        contenedor.innerHTML += `<a href="./detail-artist.html?id=${data.artists.data[i].id}">
        <div class="list-artista-genero">
            <img src="${data.artists.data[i].picture_small}">
            <h3 >
            ${data.artists.data[i].name}
            </h3>
        </div>
    </a>`
    }
})
.catch(function(error){
    console.log(error)
})

