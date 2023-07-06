console.log("Utilizando os Comandos innerText e innerHTML:");

// let elementoH1 = document.querySelector("h1");
// console.log(elementoH1);
// console.log(elementoH1.innerText);
// console.log(elementoH1.innerHTML)

// Amazenando o Elemento main:
// let elementoMain = document.querySelector("main");
// console.log(elementoMain);
// console.log(elementoMain.innerText);
// console.log(elementoMain.innerHTML);

// Modificando o valor de variários pelos comandos:
let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "Novo Titulo Modificado com JS";
console.log(elementoH1);

//Modificando a estrutua da main ou qualquer outra TAG HTML:
let elementoMain = document.querySelector("main");
elementoMain.innerHTML = `
<h2>Novo Subtitulo</h2>
<ul>
    <li>Elemento de Lista JS 01</li>
    <li>Elemento de Lista JS 02</li>
    <li>Elemento de Lista JS 03</li>
</ul>
`