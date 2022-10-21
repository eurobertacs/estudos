// Declarações
let a,b,c;
a=5;
b=6;
c=7;

// Outro exemplo de declaração
let d,e,f; d=5; e=6; f=7;

// espaços em brancos aceitos no javascript
let nome="Fulano";
let sobrenome = "de Tal" ;

// Exemplos de declarações com quebras de linha
document.getElementById("texto").innerHTML = 
    "Meu primeiro texto <b>JS</b>";

document
    .getElementById("texto").innerHTML = 
    "Meu primeiro texto <b>JS</b>";

// Declarações em bloco
function minhaFuncao() {
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
}