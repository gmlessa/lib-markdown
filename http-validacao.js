import fetch from 'node-fetch';

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
            }))
    return arrayStatus;
    } catch(erro) {
            manejaErros(erro)
    }
}

function geraArrayURLs(arrayLinks) {
    let atual = 0;
    let arrayResultado = []
    while (atual < arrayLinks.length) {
        let arrayAtual = arrayLinks[atual];
        arrayResultado.push(arrayAtual.map(objetoLink => Object.values(objetoLink).join()));
        atual++
    }
    let arrayFinal = [].concat(...arrayResultado)
    return arrayFinal
}

// function geraArrayURLs(arrayLinks) {
//     let atual = 1;
//     let arrayAtual = arrayLinks[atual];
//     let arrayResultado = []
//     arrayResultado.push(arrayAtual.map(objetoLink => Object.values(objetoLink)))

//     return arrayResultado
// }

async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links)
    
    let atual = 0;
    let arrayResultado = [];

    while (atual < arrayLinks.length) {
        let arrayAtual = arrayLinks[atual]
        arrayResultado.push(arrayAtual.map((objeto, indice) => ({
            ...objeto, status: statusLinks[indice]
        })));
        atual++
    }
    
    let arrayFinal = [].concat(...arrayResultado)
    return arrayFinal;
}

export {validaURLs}