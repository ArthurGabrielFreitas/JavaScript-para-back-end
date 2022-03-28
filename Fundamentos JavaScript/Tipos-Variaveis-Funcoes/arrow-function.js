// arrow functions

const apresentar = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de instrução

const menorNumero = (num1, num2) => {
    let menor;
    num1 < num2 ? menor = num1 : menor = num2;
    return menor;
}

console.log(apresentar('Bicho'))
console.log(`Menor número encontrado: ${menorNumero(soma(Math.round(Math.random() * 50), Math.round(Math.random() * 50)), (soma(Math.round(Math.random() * 50), Math.round(Math.random() * 50))))}`)