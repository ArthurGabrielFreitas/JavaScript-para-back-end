const notas = [4, 8.6, 7]
notas.push(6.3)
console.log(notas)

let media = 0

for (let i = 0; i < notas.length; i++) {
    media += notas[i]
}
media /= notas.length

console.log(media)