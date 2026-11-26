// Contar números positivos

let positivos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Digite um número:"));

    if (numero > 0) {
        positivos++;
    }
}

console.log("Quantidade de positivos: " + positivos);