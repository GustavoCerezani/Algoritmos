// Leia o salário e o percentual de reajuste. Mostre o novo salário.

let salario = parseFloat(prompt("Digite seu salário:"));
let percentual = parseFloat(prompt("Digite o percentual de reajuste:"));

let reajuste = salario * (percentual / 100);
let novoSalario = salario + reajuste;

console.log("Novo salário: R$ " + novoSalario); 