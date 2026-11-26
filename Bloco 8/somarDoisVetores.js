// Somar dois vetores

let vetorA = [];
let vetorB = [];
let vetorC = [];

for (let i = 0; i < 5; i++) {
    vetorA[i] = parseFloat(prompt("Digite um número do vetor A:"));
}

for (let i = 0; i < 5; i++) {
    vetorB[i] = parseFloat(prompt("Digite um número do vetor B:"));
}

for (let i = 0; i < 5; i++) {
    vetorC[i] = vetorA[i] + vetorB[i];
}

console.log(vetorC);