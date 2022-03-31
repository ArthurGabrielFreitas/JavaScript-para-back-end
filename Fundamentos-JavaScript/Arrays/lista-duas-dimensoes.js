const alunos = ["Joa", "Jul", "Cai", "Ana"]
const mediasAlunos = [10, 6, 8, 7.6]

let listaDeNotasEAlunos = [alunos, mediasAlunos]

for (i = 0; i < alunos.length; i++) {
    console.log(`${listaDeNotasEAlunos[0][i]}, sua média é ${listaDeNotasEAlunos[1][i]}`)
}
