// Função que retorna o maior número

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = maiorNumero(num1, num2);

console.log("Maior número: " + resultado);