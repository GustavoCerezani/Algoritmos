// Leia um número e informe se ele é positivo, negativo ou zero.

let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}