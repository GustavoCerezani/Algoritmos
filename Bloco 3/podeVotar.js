// Leia a idade e informe se a pessoa pode votar.

let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18) {
    console.log("Pode votar");
} else if (idade >= 16 && idade <= 17) {
    console.log("Pode votar, mas não é obrigatório");
} else {
    console.log("Não pode votar");
}