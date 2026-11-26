// Calcular o fatorial

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("Fatorial: " + fatorial);