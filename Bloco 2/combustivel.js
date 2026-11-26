// Leia a distância percorrida e o combustível gasto. Calcule o consumo médio em km por litro.

let distancia = parseFloat(prompt("Digite a distância percorrida em km:"));
let combustivel = parseFloat(prompt("Digite a quantidade de combustível gasto em litros:"));

let consumo = distancia / combustivel;

console.log("Consumo médio: " + consumo + " km/L");