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

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }

    exibirSaldoPoupanca() {
        console.log(`O saldo da poupança de ${this.nome} é R$${this.saldoPoupanca}`)
    }
}

const art = new ClientePoupanca("Art", "art@email.com", "45678912302", 50, 150)

console.log(art)

art.depositar(75)
art.depositarPoupanca(50)

art.exibirSaldo()
art.exibirSaldoPoupanca()