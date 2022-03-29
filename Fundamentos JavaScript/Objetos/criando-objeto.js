const objPersonagem = {
    nome: "Kasy'No",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Kasy'No fivvv"

console.log(objPersonagem.nome) //Kasy'No
console.log(objPersonagem2.nome) //Kasy'No fivvv

// objPersonagem2 = objPersonagem -> dessa forma, o objeto 2 apenas aponta para o objeto 1. Se algo for alterado em um deles, será alterado em ambos
// const objPersonagem2 = Object.create(objPersonagem) cria uma cópia do objeto para um novo. Dessa forma, os objetos são independentes.