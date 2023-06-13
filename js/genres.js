// BOTÓN DARK Y LIGHT MODE
const contenedorLight = document.querySelector("main");
const modoBoton = document.querySelector("#light-mode");

function aplicarModo(modo) {
  contenedorLight.classList.toggle('dark-mode', modo === 'dark-mode');
    contenedorLight.classList.toggle('light-mode', modo === 'light-mode');
    localStorage.setItem('modo', modo);
}

let modoActual = localStorage.getItem('modo'); // AL CARGAR LA PÁGINA, SE PONE EL MODO GUARDADO LA ÚLTIMA VEZ QUE SE INGRESÓ 
if (modoActual === 'dark') {
  aplicarModo('dark-mode');
} else if (modoActual === 'light') {
  aplicarModo('light-mode');
}

modoBoton.addEventListener('click', function () { // CADA VEZ QUE TOCO EL BOTON SE CAMBIA EL MODO
  if (contenedorLight.classList.contains('dark-mode')) {
    aplicarModo('light-mode');
  } else {
    aplicarModo('dark-mode');
  }
});


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