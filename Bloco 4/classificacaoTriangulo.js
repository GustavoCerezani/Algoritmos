// Classificação de triângulo

let a = parseFloat(prompt("Digite o primeiro lado:"));
let b = parseFloat(prompt("Digite o segundo lado:"));
let c = parseFloat(prompt("Digite o terceiro lado:"));

if (a > 0 && b > 0 && c > 0 &&
    a + b > c && a + c > b && b + c > a) {

    if (a === b && b === c) {
        console.log("Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno");
    }

} else {
    console.log("Não forma um triângulo");
}