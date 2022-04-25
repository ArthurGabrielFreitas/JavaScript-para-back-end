import fetch from "node-fetch"

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayLinks) {
    try {
        const arrayStatus = await Promise
            .all(arrayLinks
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`;
                }))
        return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}

function geraArrayURLs(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
    try {
        const links = geraArrayURLs(arrayLinks)
        const statusLinks = await checaStatus(links)
        // spread operator
        const resultados = arrayLinks
            .map((objeto, indice) => ({
                ...objeto,
                status: statusLinks[indice]
            }))

        return resultados
    } catch (erro) {
        manejaErros(erro)
    }
}

export default validaURLs