let buscador = document.querySelector("#buscador")
let formulario = document.querySelector("#form")

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
        for (let i=0 ; i<6; i++ )
        contenedor.innerHTML += `<li> <a href="./detail-album.html"><img src=${data.data[i].cover}><h4>${data.data[i].title}</h4></a></li>`
        

    })
    .catch (function(error){
        console.log(error)
    })