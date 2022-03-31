class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(`O saldo é ${this.saldo}`)
    }

}

const art = new Cliente("Art", "art@email.com", "45678912302", 50)

console.log(art)

art.depositar(120)
art.exibirSaldo()