const clientes = [
    {
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
    },
    {
        nome: "Ele",
        idade: 20,
        cpf: "96385274102",
        email: "outro@email.email",
        fones: ["22945612378"],
        dependentes: [{
            nome: "Alfredix",
            parentesco: "Pet",
            dataNasc: "xx/xx/2021"
        }]
    }
]

let listaDependentes = []
for (let cliente in clientes) {
    listaDependentes.push(...clientes[cliente].dependentes)
}

console.table(listaDependentes)