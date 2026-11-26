// Função que verifica se um número é par

function verificarPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numero = parseInt(prompt("Digite um número inteiro:"));

console.log(verificarPar(numero));