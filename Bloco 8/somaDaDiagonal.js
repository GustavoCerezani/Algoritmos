// Soma da diagonal principal de uma matriz

let matriz = [];
let soma = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseFloat(prompt(
            "Digite o valor da linha " + i + " e coluna " + j
        ));
    }
}

for (let i = 0; i < 3; i++) {
    soma += matriz[i][i];
}

console.log("Soma da diagonal principal: " + soma);