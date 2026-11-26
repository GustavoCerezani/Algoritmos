// Categoria por idade

let nascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = parseInt(prompt("Digite o ano atual:"));

let idade = anoAtual - nascimento;

if (idade < 0) {
    console.log("Idade inválida");
} else if (idade <= 10) {
    console.log("Infantil");
} else if (idade <= 17) {
    console.log("Juvenil");
} else {
    console.log("Adulto");
}