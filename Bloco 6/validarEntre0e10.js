// Validar nota entre 0 e 10

let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseFloat(prompt("Nota inválida. Digite novamente:"));
}

console.log("Nota válida: " + nota);