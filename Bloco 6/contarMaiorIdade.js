// Contar pessoas maiores de idade

let maiores = 0;
let idade = parseInt(prompt("Digite a idade:"));

while (idade !== 0) {
    let sexo = prompt("Digite o sexo:");

    if (idade >= 18) {
        maiores++;
    }

    idade = parseInt(prompt("Digite a próxima idade:"));
}

console.log("Quantidade de maiores de idade: " + maiores);