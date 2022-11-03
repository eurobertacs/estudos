/* Vamos entender operadores
-> Os operadores JavaScript são usados para atribuir valores, comparar
valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":

1) Operadores aritméticos (matemáticos)
2) Operadores de atribuição
3) Operadores de sequencia 
4) Operadores de comparação
5) Operadores de Condicional (Ternário)
6) Operadores Lógicos

*/

var valor1, valor2, soma, sub, mult, divi, incr, decr;
valor1 = 5;
valor2 = 2;

soma = valor1 + valor2;
sub = valor1 - valor2;
mult = valor1 * valor2;
divi = valor1 / valor2;
incr = ++valor1;
decr = --valor2;

alert('Soma: ' + soma);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + mult);
alert('Divisão: ' + divi);
alert('Incremento: ' + incr + ' valor1: ' + valor1);
alert('Decremento: ' + decr + ' valor2: ' + valor2);

valor1 += valor2;
alert('Soma: ' + valor1);

valor1 -= valor2; 
alert('Subtração: ' + valor1);

valor1 *= valor2; 
alert('Multiplicação: ' + valor1);

valor1 /= valor2; 
alert('Divisão: ' + valor1);

valor1 = "Dimitri ";
valor2 = "Teixeira";

soma = valor1 + valor2;

alert('Soma de duas strings ' + soma);

// Uso de operadores de comparação
var a,b, c, d, opComp;

a = 8;
b = 10;
c = 8;
d = "8";

opComp = (a == b);
alert ('Resultado comparação a == b ' + opComp);

opComp = (a == c);
alert ('Resultado comparação a == c ' + opComp);

opComp = (a == d);
alert ('Resultado comparação a == d ' + opComp);

opComp = (a === d);
alert ('Resultado comparação a === d ' + opComp);

opComp = (a === c);
alert ('Resultado comparação a === c ' + opComp);

opComp = (a != b);
alert ('Resultado comparação a != b ' + opComp);

opComp = (a != c);
alert ('Resultado comparação a != c ' + opComp);

opComp = (a != d);
alert ('Resultado comparação a != d ' + opComp);

opComp = (a !== d);
alert ('Resultado comparação a !== d ' + opComp);

opComp = (a !== c);
alert ('Resultado comparação a !== c ' + opComp);

opComp = (a > b);
alert ('Resultado comparação a > b ' + opComp);

opComp = (a >= b);
alert ('Resultado comparação a >= b ' + opComp);

opComp = (a < b);
alert ('Resultado comparação a < b ' + opComp);

opComp = (a <= b);
alert ('Resultado comparação a <= b ' + opComp);

// Operador Ternário
var idade, idade2, eleitor, resultado;
idade = 17;
idade2 = 25;
eleitor = (idade <= 18) ? "não eleitor" : "sim eleitor";
alert ('A resposta é ' + eleitor + ' a idade dele é de: ' + idade);

eleitor = (idade2 <= 18) ? "não eleitor" : "sim eleitor";
alert ('A resposta é ' + eleitor + ' a idade dele é de: ' + idade2);

//Operadores lógicos
resultado = (idade > 60 && idade < 70);
alert (resultado);

resultado = (idade === 65 || idade === 72);
alert(resultado);

resultado = !(idade === 65);
alert(resultado);