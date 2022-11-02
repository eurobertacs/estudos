/* Vamos entender variáveis
Variáveis são "recipientes" onde podemos armazenar informações que 
podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chave para declarar variáveis:
-> var
-> let
-> const
*/

var pote = "Bombom";
alert(pote);

var a = 2;
var b = 3;
var c = a + b;
alert(c);

// ATENÇÃO: Como organizar o código?
// declarando as variáveis
var d, e, f, g, h, i;

// atribuindo as variáveis
d = 2;
e = 3;
f = d + e;
alert(f);

i = g + h;
alert(g); // undefined
alert(i); // NaN

// variáveis texto
var nome, sobrenome, nomeCompleto, pessoa, soma;

nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;

nomeCompleto = nome + sobrenome;
pessoa = idade + nome;

document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("texto").innerHTML = pessoa;

pessoa = idade + 10 + nome;

document.getElementById("texto").innerHTML = pessoa;

pessoa = nome + idade + 10;

document.getElementById("texto").innerHTML = pessoa;

// Recomendação
soma = idade + 10;

pessoa = nome + soma; 

document.getElementById("texto").innerHTML = pessoa;

pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = pessoa;

nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;

// Uso do Let
let nomePessoa = "Dimitri";
//let nomePessoa = "Teixeira"; não pode ser redeclarado.

var x = 10;
let y = 11;
const z = 12;

{
    var x = 2;
    let y = 3;
    const z = 4;
}

document.getElementById("texto").innerHTML = x;

document.getElementById("texto").innerHTML = y;

document.getElementById("texto").innerHTML = z;
