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


// BUSCADOR
let buscador = document.querySelector("#buscador")
let formulario = document.querySelector("#contenedor-form")

formulario.addEventListener('submit', function (e) {
    
    let terminoBuscador = buscador.value.trim();

    if (terminoBuscador === "") {
        e.preventDefault()
        alert("No puede dejar el campo vacío")
        return
    }
    if (terminoBuscador.length < 3) {
        e.preventDefault()
        alert("Su búsqueda debe tener más de 3 caracteres")
        return
    }
})


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
                <a href="./detail-genres.html?id=${data.data[i].id}"> 
                    <h4 class="nombreGenres">"${data.data[i].name}"</h4> 
                </a>
            </li>`
        })
    .catch (function(error){
        console.log(error)
    })