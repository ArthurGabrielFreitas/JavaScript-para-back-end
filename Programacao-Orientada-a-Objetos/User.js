export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        if (this.#role != "admin") {
            throw new Error("Papel inválido para a requisição")
        }
        this.#nome = novoNome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    // #montaObjUser(){
    //     return({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos() {
        return `${this.nome}, ${this.email}, data de nascimento: ${this.nascimento}, papel: ${this.role}, ativo: ${this.ativo}`
    }
}