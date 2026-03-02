console.log ("hola");
const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.addEventListener("click", () => {
    titulo.innerText = "buenos dias";
    titulo.style.backgroundColor = "black";
})
