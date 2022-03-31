// Algoritmo de ordenação

const livros = require("./lista-livros")
let maisBarato = 0
// let maisCaro = 0

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    } 
    // else if (livros[atual].preco > livros[maisCaro].preco) {
    //     maisCaro = atual
    // }
}

console.log(`O livro mais barato é ${livros[maisBarato].titulo} e custa ${livros[maisBarato].preco}`)
// console.log(`O livro mais caro é ${livros[maisCaro].titulo} custa ${livros[maisCaro].preco}`)