// Maior entre três números

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

if (num1 > num2 && num1 > num3) {
    console.log("Maior número: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("Maior número: " + num2);
} else {
    console.log("Maior número: " + num3);
}

