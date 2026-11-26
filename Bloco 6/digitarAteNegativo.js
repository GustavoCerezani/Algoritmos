// Somar números até digitar zero

let quantidade = 0;
let numero = parseFloat(prompt("Digite um número:"));

while (numero >= 0) {
    quantidade++;

    numero = parseFloat(prompt("Digite outro número:"));
}

console.log("Quantidade de valores: " + quantidade);