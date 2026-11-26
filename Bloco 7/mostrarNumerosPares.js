// Mostrar números pares de 0 até N

let n = parseInt(prompt("Digite um número:"));

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}