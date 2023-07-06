console.log ("Olá Mundo");

const titulo = document.getElementById("titulo");
console.log ("Imprimindo código HTML do elemento H2 com ID titulo", titulo);

const textos = document.getElementsByClassName("texto-simples");
console.log ("Imprimindo o código HTML do elemento div com CLASSE texto-simples na Posição 01:", textos[0]);

const segundoTitulo = document.querySelector("div h2");
console.log("Selecionando a TAG pelo comando query", segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log("Selecionando uma CLASS em comum", textosPorClasse);