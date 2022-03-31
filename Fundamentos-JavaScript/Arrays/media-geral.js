const salaJS = [9, 5, 4, 7, 8, 2.6, 10, 9.4, 5]
const salaJava = [6, 7, 8, 5.4, 6.5]
const salaPython = [8, 3.1, 4.8, 8.7]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notas = [4.8, 9, 6, 10]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media)