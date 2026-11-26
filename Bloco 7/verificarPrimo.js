// Verificar se um número é primo

let numero = parseInt(prompt("Digite um número inteiro:"));
let primo = true;

if (numero < 2) {
    primo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log("Número primo");
} else {
    console.log("Não é primo");
}