function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = valor => this.saldo += valor
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
}

const art = new ClientePoupanca("Art", "45678912302", "art@email.com", 50, 150)

console.log(art)

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    this.saldoPoupanca += valor
}

art.depositarPoupanca(50)

console.log(art.saldoPoupanca)