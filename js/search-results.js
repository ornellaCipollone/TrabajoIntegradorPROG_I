// BOTÓN DARK Y LIGHT MODE
let contenedorLight = document.querySelector("main")
let modoBoton = document.querySelector("#light-mode")
let guardado = localStorage.getItem('modo')

if (guardado == 'dark') {
    contenedorLight.classList.add('dark-mode')
}
else if (guardado == 'light') {
    contenedorLight.classList.add('light-mode')
}

modoBoton.addEventListener('click', function () {
    contenedorLight.classList.toggle('dark-mode')
    contenedorLight.classList.toggle('light-mode')
    if (contenedorLight.classList.contains('dark-mode')) {
        localStorage.setItem('modo', 'dark')
    }
    else {
        localStorage.setItem('modo', 'light')
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
    else if (terminoBuscador.length < 3) {
        e.preventDefault()
        alert("Su búsqueda debe tener más de 3 caracteres")
        return
    }
})


// CAPTURANDO EL CONTENIDO DE LA BÚSQUEDA DEL USUARIO
let qs = location.search
let qsObject = new URLSearchParams(qs)
let buscar = qsObject.get("buscador")
let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + buscar


//CAPTURANDO LA SECCIÓN DONDE QUIERO AGREGAR EL CONTENIDO Y AGREGÁNDOLO
let contenedor = document.querySelector(".search-results-final");
let contenedor2 = document.querySelector(".titulo-busqueda");
let botonVerMas = document.querySelector("#ver-mas");

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if (data.data.length == 0) {
            contenedor2.innerHTML = `<h3>No hay resultados para su búsqueda</h3>`;
        } else {
            botonVerMas.style.display = "block";
            contenedor2.innerHTML = `<h1>Resultados de búsqueda para: ${buscar}</h1>`;
            for (let i = 0; i < 10; i++) {
                contenedor.innerHTML +=
                    `<article class="cancion-buscada">
                        <img class="img-search" src="${data.data[i].album.cover_medium}">
                        <a href="detail-track.html?id=${data.data[i].id}">
                            <h2 class="nombre-cancion-buscada">${data.data[i].title}</h2>
                        </a>
                    </article>`;
            }

            let mostrarMas = false;
            botonVerMas.addEventListener('click', function (e) {
                mostrarMas = !mostrarMas;
                if (mostrarMas) {
                    botonVerMas.innerText = "Ver menos";
                    contenedor.innerHTML = "";
                    for (let i = 0; i < data.data.length; i++) {
                        contenedor.innerHTML += 
                            `<article class="cancion-buscada">
                                <img class="img-search" src="${data.data[i].album.cover_medium}">
                                <a href="detail-track.html?id=${data.data[i].id}">
                                    <h2 class="nombre-cancion-buscada">${data.data[i].title}</h2>
                                </a>
                            </article>`;
                    }
                } else {
                    botonVerMas.innerText = "Ver más";
                    contenedor.innerHTML = "";
                    for (let i = 0; i < 10; i++) {
                        contenedor.innerHTML += 
                            `<article class="cancion-buscada">
                                <img class="img-search" src="${data.data[i].album.cover_medium}">
                                <a href="detail-track.html?id=${data.data[i].id}">
                                    <h2 class="nombre-cancion-buscada">${data.data[i].title}</h2>
                                </a>
                            </article>`;
                    }
                }
            });
        }
    })
    .catch(function (error) {
        console.log(error);
    });