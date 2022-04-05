const user = {
    nome: "art",
    email: "email@ema.il",
    nascimento: "21/21/2121",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "admin",
    email: "em@a.il",
    role: "admin",
    criarCurso() {
        console.log("Curso criado")
    }
}

// herança de protótipo

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()