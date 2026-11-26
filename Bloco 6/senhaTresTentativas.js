// Senha com até três tentativas

let tentativas = 0;
let senha;

while (tentativas < 3) {
    senha = parseInt(prompt("Digite a senha:"));

    tentativas++;

    if (senha === 2026) {
        console.log("Acesso permitido");
        break;
    } else {
        console.log("Senha incorreta");
    }
}

if (senha !== 2026) {
    console.log("Acesso bloqueado");
}