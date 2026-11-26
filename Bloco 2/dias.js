// Leia a quantidade de dias e apresente o equivalente. em semanas inteiras e dias restantes.

let dias = parseInt(prompt("Digite a quantidade de dias:"));

let semanas = Math.trunc(dias / 7);
let diasRestantes = dias % 7;

console.log("Semanas inteiras: " + semanas);
console.log("Dias restantes: " + diasRestantes);