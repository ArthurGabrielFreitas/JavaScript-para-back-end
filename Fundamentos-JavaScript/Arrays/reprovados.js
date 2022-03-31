const nomes = ["Ana", "Mar", "Ram", "Mau"]
const notas = [10, 6.4, 4.1, 8]

const reprovados = nomes.filter((_, indice) => notas[indice] < 6)
console.log(reprovados)