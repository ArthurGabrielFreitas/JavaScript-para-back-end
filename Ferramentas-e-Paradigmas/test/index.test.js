import pegaArquivo from '../index.js';

const arrayResult = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

const caminhoArquivoTeste = "./test/arquivos/texto1.md"
const caminhoArquivoSemLinks = "./test/arquivos/texto1-sem-links.md"

describe("pegaArquivo:", () => {
    it("Deve ser uma função.", () => {
        expect(typeof (pegaArquivo)).toBe("function");
    })
    it("Deve retornar um array com resultados.", async () => {
        const resultado = await pegaArquivo(caminhoArquivoTeste)
        expect(resultado).toEqual(arrayResult)
    })
    it("Deve retornar mensagem 'Não há links'", async () => {
        const resultado = await pegaArquivo(caminhoArquivoSemLinks)
        expect(resultado).toBe("Não há links")
    })
})