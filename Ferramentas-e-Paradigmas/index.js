import chalk from "chalk"
import fs from "fs"
import path from "path"

console.log(chalk.blue("Vamos começar!"))

function extraiLinks(texto) {
    const regex = /\[([^\[]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }

    return arrayResultados.length === 0 ? "Não há links" : arrayResultados
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "Arquivo não encontrado"))
}

async function pegaArquivo(caminhoDoArquivo) {
    const __dirname = path.resolve()
    const caminhoAbsoluto = path.join(__dirname, caminhoDoArquivo)
    const encoding = "utf-8"
    try {
        const texto = await fs.promises.readFile(caminhoAbsoluto, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo