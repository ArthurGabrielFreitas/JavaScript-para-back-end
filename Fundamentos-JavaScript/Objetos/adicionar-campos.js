const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email"
}

console.log(cliente)

cliente.fone = "4986-5423"

console.log(cliente)

cliente.fone = "(33)94986-5423"

console.log(cliente)

delete cliente.fone

console.log(cliente)