const notas = [9.4, 4.8, 10, 8.1]

let somaDasNotas = 0

// notas.forEach(nota => {
//     somaDasNotas += nota
// })

// forEach executa o que está dentro do bloco
// map executa o que está dentro do bloco e retorna como um novo array

notas.forEach(function (nota) {
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(media)