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

let favoritos = []
let recupero = localStorage.getItem('favoritos')
if (recupero != null){
favoritos = JSON.parse(recupero)
}
console.log(favoritos)
let contenedor = document.querySelector(".resultados-favoritos")
for (i=0; i < favoritos.length; i++) {
    let id = favoritos[i]
    let url ="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + id
    console.log(id)

    fetch(url)
    
    .then(function(response){
        let respuesta = response.json()
        return respuesta
    })
    .then(function(data){
        console.log(data)
        contenedor.innerHTML += `<article> 
        <img src="${data.album.cover_medium}" >
        <a href= "detail-track.html?id=${data.id}"><h2>${data.title}</h2></a>
        </article>`


    })
    .catch(function(error){
        console.log(error)
    })
}

