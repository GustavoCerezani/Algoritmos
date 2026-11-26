// Leia tres notas e calcule a media aritmetica.

let nota1 = parseFloat(prompt("Digita a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let soma = nota1  + nota2 + nota3;  
let media = soma / 3;

console.log("A média das notas é: " + media);
