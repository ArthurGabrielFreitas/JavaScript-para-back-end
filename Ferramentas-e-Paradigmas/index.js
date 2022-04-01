// const chalk=require("chalk")

// console.log(chalk.blue("Vamos começar!"))
const fs = require("fs")

function extraiLinks(texto) {
    const regex = /\[([^\[]*)\]\((https?:\/\/[^$#\s].[^\s]*\))/gm
    const arrayResultados = []
    let temp

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: [temp[2]] })
    }

    return arrayResultados.length === 0 ? "Não há links" : arrayResultados
}

function trataErro(erro) {
    // throw new Error(chalk.red(erro.code, "Arquivo não encontrado"))
    throw new Error(erro.code, "Arquivo não encontrado")
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "utf-8"
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        // return chalk.green(texto)
        return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

module.exports = pegaArquivo