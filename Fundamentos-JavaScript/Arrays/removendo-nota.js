const notas = [4.8, 7, 6.5, 7.7, 10]
notas.pop()

console.log(notas)

let media = 0

for (let i = 0; i < notas.length; i++) {
    media += notas[i]
}
media /= notas.length

console.log(`A média das notas é ${media}`)