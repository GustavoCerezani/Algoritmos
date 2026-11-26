//Procedimento para mostrar uma linha de 30 caracteres 

function mostrarLinha() {
    console.log("-".repeat(30));
}

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

mostrarLinha();

console.log("RESULTADO DAS NOTAS");
console.log("Nota 1: " + nota1);
console.log("Nota 2: " + nota2);
console.log("Média: " + media.toFixed(2));

mostrarLinha();