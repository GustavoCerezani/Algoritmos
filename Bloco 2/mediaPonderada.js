// Leia três notas com pesos 2, 3 e 5 e calcule a média ponderada.

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 * 2 + nota2 + 3 + nota3 + 5) / 10;

console.log("A média ponderada é: " + media);