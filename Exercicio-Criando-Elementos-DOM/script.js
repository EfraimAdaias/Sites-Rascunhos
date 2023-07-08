//Criando a <li> e inserindo o Conteúdo e o ID:
let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-html"

//Selecionando uma variável para receber objeto filho <li>:
let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

//Criando mais elementos utilizando o innerHTML:
const postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML = 
`<h2 class = "post-titulo">JavaScript 02</h2>
 <p class = "post-texto">
    Java Script é uma linguagem de programação
 </p>`
 postagemJavaScript.id = "post-js"

 //Utilizando também o templateString e o appedChild:
 const postagens = document.querySelector(".postagens");
 postagens.appendChild(postagemJavaScript);