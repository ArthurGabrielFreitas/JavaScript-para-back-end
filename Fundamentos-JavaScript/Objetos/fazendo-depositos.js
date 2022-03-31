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
    }, {
        nome: "Alfredix",
        parentesco: "Pet",
        dataNasc: "xx/xx/2021"
    }],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)