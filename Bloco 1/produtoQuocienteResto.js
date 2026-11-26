// Leia dois números e exiba produto, quociente e resto da divisão inteira.

let num1 = parseInt(prompt("Digite o número 1: "));
let num2 = parseInt(prompt("Digite o número 2: "));

let produto = num1 * num2;
let quociente = Math.floor(num1 / num2);
let resto = num1 % num2;

console.log("Produto: " + produto);
console.log("quociente: " + quociente);
console.log("Resto: " + resto);