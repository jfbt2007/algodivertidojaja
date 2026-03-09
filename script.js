console.log ("hola");
const titulo = document.getElementById("titulo");
console.log(titulo);
let estadoInicial = true;
let indice = 0;
const parrafo1 = document.getElementById ("texto");
const listaTextos = ["hola, soy roberto", "te voy a contar mi trágica historia", "yo era un niño huerfano"];

titulo.addEventListener("click", () => {
    if (estadoInicial === true){
    titulo.innerText = "buenos dias";
    titulo.style.backgroundColor = "black";
    
} else {
    titulo.innerText = "mi dibujo absolutamente perfecto";
    titulo.style.color = "blue";
    titulo.style.backgroundColor = "rgb(250, 192, 192)";
}
    estadoInicial =  !estadoInicial;
})

parrafo1.addEventListener ("click", () => {
    if(indice < listaTextos.length){
    parrafo1.innerText = listaTextos[indice];
    indice += 1;
} else {
    indice = 0;
}
}
)
