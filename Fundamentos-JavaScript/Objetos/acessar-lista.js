const cliente = {
    nome: "Art",
    idade: 22,
    cpf: "12365478930",
    email: "email@email.email"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(`Nome ${cliente[chaves[0]]}`)

chaves.forEach(info => console.log(info, cliente[info]))