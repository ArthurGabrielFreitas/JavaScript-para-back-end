const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email",
    fones: ["55984653248", "77945120369"]
}

cliente.fones.push("66978520145")

cliente.fones.forEach(fone => console.log(fone))

console.log(cliente)