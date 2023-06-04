let queryString = location.search;
let queryObj = new URLSearchParams(queryString)
let id = queryObj.get("id") 
console.log(id)
let seccion=document.querySelector(".detalle-artista")
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/artist/"+id)
.then(function(response){
    return response.json()
})
.then(function (data) {
    console.log(data)
    let idA= data.id
    seccion.innerHTML = `<article>
    <img src="${data.picture_big}"/>
    <h1>${data.name}</h1>
    </article>
    `


})
.catch(function(error){
    console.log(error)
})

fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/artist/"+ id +"/albums")
.then(function(responses){
    return responses.json()
})
.then(function(datas){
    console.log(datas)
    for( let i=0; i<5; i++){
        seccion.innerHTML += `<article>

        <img src="${datas.data[i].cover_medium}"/>
        <a href="detail-album.html?id=${datas.data[i].id}"><h2>${datas.data[i].title}</h2></a>
        
        
        </article>
        `
    }
})
.catch(function(error){
    console.log(error)
})