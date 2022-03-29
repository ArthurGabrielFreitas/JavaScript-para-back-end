const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email"
}

console.log(`Seu nome é ${cliente.nome}, você tem ${cliente.idade} e seu e-mail é ${cliente.email}`)

console.log(`CPF de número ${cliente.cpf.substring(0, 3)}.***.***-**`)