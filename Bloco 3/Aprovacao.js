// Leia duas notas. Informe Aprovado se a média for pelo menos 6; caso contrário, informe Recuperação.

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

console.log("Média: " + media);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Recuperação");
}