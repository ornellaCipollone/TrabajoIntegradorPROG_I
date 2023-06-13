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
let contenedorLight = document.querySelector("main")
let modoBoton = document.querySelector("#light-mode")
let guardado = localStorage.getItem('modo')
if (guardado == 'dark'){
    contenedorLight.classList.add('dark-mode')
}
if (guardado == 'light'){
    contenedorLight.classList.add('light-mode')
}
modoBoton.addEventListener('click',function(){
    contenedorLight.classList.toggle('dark-mode')
    contenedorLight.classList.toggle('light-mode')
    if (contenedorLight.classList.contains('dark-mode')){
        localStorage.setItem('modo','dark')
    }
    else{
        localStorage.setItem('modo','light')  
    }

})
let qs =location.search
let qsObject = new URLSearchParams(qs)
let buscar = qsObject.get("buscador")
let endpoint ="https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + buscar


let contenedor = document.querySelector(".search-results-final")
fetch(endpoint)
.then(function(response){
 return response.json()
})
.then(function(data){
    console.log(data)
    if (data.data.length == 0){
        contenedor.innerHTML = `<h3>No hay resultados para su busqueda</h3>`
    }
    else {
        contenedor.innerHTML = `<h1>Resultados de busqueda para: </h1>`
        for (let i=0; i<10; i++){
            contenedor.innerHTML += `<article class="cancion-buscada">
                <img src="${data.data[i].album.cover_medium}">
                <a href="detail-track.html?id=${data.data[i].id}"><h2>${data.data[i].title}</h2></a>

            </article>`
        }
    }
    
})
.catch(function(error){
    console.log(error)
})

