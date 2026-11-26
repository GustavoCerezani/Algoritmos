// Somar números até digitar zero

let soma = 0;
let numero = parseFloat(prompt("Digite um número:"));

while (numero !== 0) {
    soma += numero;

    numero = parseFloat(prompt("Digite outro número:"));
}

console.log("Soma dos valores: " + soma);