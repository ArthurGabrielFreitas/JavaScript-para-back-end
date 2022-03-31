const listaDeChamada = ["Jorge", "Aluísio", "Clara", "Laio", "Maergareth", "Leão"]

// listaDeChamada.splice(2, 2, "Tonho")
listaDeChamada.splice(2, 0, "Tonho")
console.log(`Lista de chamada: ${listaDeChamada}`)

listaDeChamada.sort()
console.log(`Lista de chamada ordenada: ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)
