const alunos = ["Joa", "Jul", "Cai", "Ana"]
const mediasAlunos = [10, 6, 8, 7.6]

let listaDeNotasEAlunos = [alunos, mediasAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua média é " + listaDeNotasEAlunos[1][indice]
    }
    else {
        return "Aluno não cadastrado!"
    }
}

console.log(exibeNomeNota("Ana"))