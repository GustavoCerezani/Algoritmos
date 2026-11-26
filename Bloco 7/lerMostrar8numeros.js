// Ler e mostrar oito números

let numeros = [];

for (let i = 0; i < 8; i++) {
    numeros[i] = parseFloat(prompt("Digite um número:"));
}

for (let i = 0; i < 8; i++) {
    console.log(numeros[i]);
}