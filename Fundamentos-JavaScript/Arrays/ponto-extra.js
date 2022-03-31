const notas = [4, 8, 10, 4]

// forEach executa o que está dentro do bloco
// map executa o que está dentro do bloco e retorna como um novo array

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)