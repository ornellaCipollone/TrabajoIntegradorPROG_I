//BUSCADOR
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

//LISTA GÉNEROS
fetch("https://api.allorigins.win/raw?url="+"https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let contenedor = document.querySelector(".generos")
        for(let i =1 ; i<6; i++)
        contenedor.innerHTML += 
        `<li class="listados"> 
                <img class="img-listados" src="${data.data[i].picture_medium}">
                <a href="./detail-genres.html"> 
                    <h4 class="nombreGenres">"${data.data[i].name}"</h4> 
                </a>
            </li>`
        })
    .catch (function(error){
        console.log(error)
    })