// BOTÓN DARK Y LIGHT MODE
const contenedorLight = document.querySelector("main");
const modoBoton = document.querySelector("#light-mode");

function aplicarModo(modo) {
  contenedorLight.classList.remove('dark-mode', 'light-mode');
  contenedorLight.classList.add(modo);
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


// PLAYLIST
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

