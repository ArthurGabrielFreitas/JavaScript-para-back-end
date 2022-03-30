function troca(lista, analise, trocado) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[trocado];

    lista[analise] = itemAnterior
    lista[trocado] = itemAnalise
}

module.exports = troca