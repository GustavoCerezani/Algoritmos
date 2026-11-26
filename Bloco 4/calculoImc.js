// Cálculo e classificação do IMC

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura ** 2);

console.log("IMC: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}