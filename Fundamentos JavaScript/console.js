// console é uma ferramenta do NodeJS para enviar dados para fora da aplicação
// Console API
// log => registro

const minhaVar = true;

console.log(65)
console.log("texto teste texte testo")
console.log(minhaVar)

// tratamento de erro

console.time()
let contador;
for(i = 0; i < 100; i++){
    contador *= i + 1;
}
console.log(contador)
console.error(new Error('Valor grande demais.'))
// console.trace('Caminho: ')
console.timeEnd()
