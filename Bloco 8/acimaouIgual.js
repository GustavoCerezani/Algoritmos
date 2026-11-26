// Média e quantidade de notas acima ou iguais à média

let notas = [];
let soma = 0;
let quantidade = 0;

for (let i = 0; i < 8; i++) {
    notas[i] = parseFloat(prompt("Digite uma nota:"));

    soma += notas[i];
}

let media = soma / 8;

for (let i = 0; i < 8; i++) {
    if (notas[i] >= media) {
        quantidade++;
    }
}

console.log("Média: " + media.toFixed(2));
console.log("Notas maiores ou iguais à média: " + quantidade);