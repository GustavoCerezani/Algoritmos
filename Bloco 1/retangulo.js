// Leia largura e comprimento de um retângulo e informe a área e o perímetro.

let largura = parseFloat(prompt("Digite a largura: "));
let comprimento = parseFloat(prompt("Digite o comprimento: "));

let area = largura * comprimento; 
let perimetro = 2 * (largura + comprimento);

console.log("Área: " + area);
console.log("Perimetro: " + perimetro);
