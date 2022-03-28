#!/usr/bin/env node

import pegaArquivos from './index.js';
import chalk from 'chalk';
import { validaURLs } from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivos(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    } else{
        console.log(chalk.yellow('lista de links'), resultado); 
    }
}

processaTexto(caminho);