const idadeMinima = 18;
let idadeCliente = 19;

if (idadeCliente >= idadeMinima){
    console.log('Uma cerveja para você!')
} else {
    console.log('Vai ficar só no suco hoje')
}

// operador ternário (três operadores em uma linha)
// condição ? caso true : caso false
console.log(idadeCliente >= idadeMinima ? 'Pode criar uma empresa': 'Vai ser jovem aprendiz')
