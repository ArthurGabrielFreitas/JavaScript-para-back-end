function exponenciacao(num1, num2){
    return Math.pow(num1, num2);
}

console.log(exponenciacao(2, 2))
console.log(exponenciacao(8.0, 3.0))
console.log(exponenciacao(2.5, 4.6))

// parâmetros vs argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(21, 'Art'))
console.log(nomeIdade('Art', 21))

function soma(num1, num2){
    return num1 + num2;
}

// valor padrão para um parâmetro
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(165, 156)))
