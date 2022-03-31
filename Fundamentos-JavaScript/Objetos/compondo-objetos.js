const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email",
    fones: ["55984653248", "77945120369"]
}

cliente.dependentes = {
    nome: "bicho",
    parentesco: "Animal",
    dataNasc: "xx/xx/2020"
}

console.log(cliente)

cliente.dependentes.nome = "Bicho Chateaubrian"
cliente.dependentes.parentesco = "Pet"

console.log(cliente)