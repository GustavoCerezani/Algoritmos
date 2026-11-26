// Maior número e sua posição

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseFloat(prompt("Digite um número:"));
}

let maior = numeros[0];
let posicao = 0;

for (let i = 1; i < 10; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
        posicao = i;
    }
}

console.log("Maior número: " + maior);
console.log("Posição: " + (posicao + 1));