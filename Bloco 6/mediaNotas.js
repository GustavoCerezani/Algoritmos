// Média de cinco notas

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Digite a nota " + i + ":"));

    soma += nota;
}

let media = soma / 5;

console.log("Média da turma: " + media.toFixed(2));