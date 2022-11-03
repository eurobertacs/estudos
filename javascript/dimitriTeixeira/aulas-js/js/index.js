/* Funções
Uma função JavaScript é um bloco de código projetado para executar uma 
tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma
saída.

Pode ser encarado como um "mini-programas" projetados para fazer uma tarefa 
que vai contribuir para todo código.

Uma função JavaScript é executada quando algo a invoca (chama-a).
*/

// Função de soma
function soma(valor1, valor2){
    return valor1 + valor2;
}

// Função de conversão de real para dólar
function converterRealParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}

document.getElementById("texto").innerHTML = soma(10,10);

var total = soma(10,23);
alert(total);

var valorReal = 7.89;
var cotacaoDolar = 5.08;
var valorConvertido = converterRealParaDolar(valorReal,cotacaoDolar);

alert("O valor em real é R$ " + valorReal + " e o valor em dólar é U$ " + valorConvertido);

// Exemplo preliminar de função de evento
function alertaHello(){
    alert("Olá pessoal");
}

alertaHello();

function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}

var celsius = paraCelsius(77);
alert("A temperatura é de " + celsius + " graus Celsius.")