// Mostrar vetor na ordem inversa

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseFloat(prompt("Digite um número:"));
}

for (let i = 9; i >= 0; i--) {
    console.log(numeros[i]);
}