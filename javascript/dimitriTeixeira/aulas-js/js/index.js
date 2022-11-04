/* Objetos
Objetos são basicamente variáveis com muitos valores dentro.

Exemplo: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocadas dentro
de uma propriedade.

*/
// Exemplos
const carro = { marca: "ford", modelo: "ka", ano: 2015, placa: "ABC-1234"};

// Outra forma de escrever e mais recomendada
const outroCarro = {
    marca: "fiat",
    modelo: "elba",
    ano: 1990,
    placa: "ABC-6789",
    buzina: function() {alert('Biiiiiiiiiiiiii')},
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo + "."; 
    }
};

console.log(carro);
console.log(outroCarro);
console.log(carro.ano);
console.log(outroCarro.ano);
console.log(carro.placa);
console.log(outroCarro.placa);
console.log(carro["marca"]);
console.log(outroCarro["marca"]);
console.log(outroCarro.completo());

outroCarro.buzina();