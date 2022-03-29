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

let relatorio = ""

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `
    }
}

console.log(relatorio)