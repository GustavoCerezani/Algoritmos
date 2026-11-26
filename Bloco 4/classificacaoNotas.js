// Classificação de nota

let nota = parseFloat(prompt("Digite sua nota:"));

if (nota < 0 || nota > 10) {
    console.log("Nota inválida");
} else if (nota < 5) {
    console.log("Insuficiente");
} else if (nota < 7) {
    console.log("Regular");
} else if (nota < 9) {
    console.log("Bom");
} else {
    console.log("Excelente");
}