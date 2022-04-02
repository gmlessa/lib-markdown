//import chalk from 'chalk';
import fs from 'fs';
import path from 'path';


function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\s$.?#].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({
            [temp[1]] : temp[2]
        })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(erro.code, 'Não há arquivo no caminho');
}


async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro)
    }
}

async function pegaArquivos(caminho) {
    const caminhoAbsoluto = path.join("__dirname", '..', caminho);
    const encoding = 'utf-8';
    try {
         const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
         const result = await Promise.all(arquivos.map(async (arquivo) => {
         const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
         const texto = await fs.promises.readFile(localArquivo, encoding);
         return extraiLinks(texto);
     }));
     return result;
     } catch (erro) {
     return trataErro(erro);
 }
 }

export default pegaArquivos