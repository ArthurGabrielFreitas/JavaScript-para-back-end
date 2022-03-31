const livros = require("./lista-livros")
const menorValor = require("./menorValor")
const troca = require('./troca')

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual)
    if (menor != atual) {
        troca(livros, menor, atual)
    }
}

console.log(livros)