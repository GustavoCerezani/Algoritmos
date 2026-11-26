// Somar 10 números

let soma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Digite o número " + i + ":"));

    soma += numero;
}

console.log("Soma: " + soma);