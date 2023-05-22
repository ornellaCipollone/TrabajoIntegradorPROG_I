let buscador = document.querySelector(".buscador")
if (buscador == "") {
    alert("ingrese texto")
}
else if (buscador.length < 3) {
    alert("debe tener mas de 3 caracteres")
}