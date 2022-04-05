const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function (nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)

novoUser.init("art", "a@r.t")
console.log(novoUser.exibirInfos())