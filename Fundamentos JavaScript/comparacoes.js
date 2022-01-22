// == (comparação implícita)

const numero = 4165;
const texto = '4165';

console.log(numero == texto) // true
console.log(numero === texto) // false

// typeof => verifica o tipo de dados de uma variável
console.log(typeof numero) // number
console.log(typeof texto) // string

// == compara apenas o valor
// === compara o valor e o tipo de dados

// conversão explícita

Number()
String()

const meuNumero = 77;
const minhaString = '77';

console.log(meuNumero != minhaString) // false
console.log(meuNumero !== minhaString) // true
