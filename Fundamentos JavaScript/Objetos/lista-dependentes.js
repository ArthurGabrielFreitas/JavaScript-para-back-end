const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email",
    fones: ["55984653248", "77945120369"],
    dependentes: [{
        nome: "bicho",
        parentesco: "Pet",
        dataNasc: "xx/xx/2020"
    }]
}

cliente.dependentes.push({
    nome: "Alfredix",
    parentesco: "Pet",
    dataNasc: "xx/xx/2021"
})

console.log(cliente)

const petMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "xx/xx/2021")

console.log(`Pet mais novo: ${petMaisNovo[0].nome}`)