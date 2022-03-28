const nomes = ["Arthur", "Gabriel", "Ana", "Gabriela", "Jorge"]

let sala1
let sala2

if (nomes.length % 2 == 1) {
    sala1 = nomes.slice(0, (nomes.length / 2) + 1)
    sala2 = nomes.slice((nomes.length / 2) + 1)
} else {
    sala1 = nomes.slice(0, nomes.length / 2)
    sala2 = nomes.slice(nomes.length / 2)
}

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
