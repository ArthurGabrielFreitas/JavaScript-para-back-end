// tipo de dados
// booleanos

// conversão implícita
let numero = 31415;
let texto = '31415';

console.log(numero == texto) // true
console.log(numero === texto) // false

console.log(numero + texto + '\nA variável texto é um(a) ' + typeof texto) // concatenação de strings

// Number()
// String()

texto = Number(texto); // conversão em número

console.log(numero + texto + '\nA variável texto é um(a) ' + typeof texto) 

// conversão explícita