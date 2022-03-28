// expressão de função
// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo
// funções em expressão não podem ser chamadas antes de serem definidas, enquanto funções declaradas podem

const soma = function(num1, num2) {return num1 + num2}

console.log(soma(5,9))