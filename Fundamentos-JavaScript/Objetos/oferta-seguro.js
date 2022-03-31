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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

// Object.keys(objeto) retorna as chaves do objeto.
// Object.values(objeto) retorna os valores.
// Object.entries(objeto) retorna os pares chave/objeto.