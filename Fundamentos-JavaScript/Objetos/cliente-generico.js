function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = valor => this.saldo += valor
}

const art = new Cliente("Art", "45678912302", "art@email.com", 50)

console.log(art)

art.depositar(150)

console.log(art)