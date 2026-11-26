// Leia o valor de um produto e o percentual de desconto. Mostre desconto e preço final.

let valor = parseFloat(prompt("Digite o valor do produto:"));
let percentual = parseFloat(prompt("Digite o percentual de desconto:"));

let desconto = valor * (percentual / 100);
let precoFinal = valor - desconto;

console.log("Desconto: R$ " + desconto);
console.log("Preço final: R$ " + precoFinal);
