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

let recupero = localStorage.getItem('favoritos')
let favoritos = JSON.parse(recupero)
console.log(favoritos)

for (i=0; i <= favoritos.length; i++) {
    fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/track/?id=" + favoritos[i])
    .then(function(repsponse){
        return repsponse.json
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })
}

