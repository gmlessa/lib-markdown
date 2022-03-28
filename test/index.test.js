import { expect, test } from "@jest/globals";
import pegaArquivos from "../index.js";

test('deve ser uma função', () => {
    expect(typeof pegaArquivos).toBe('function')
});

// describe('pegaArquivos::', () => {
//     it('deve ser uma função', () => {
//         expect(typeof pegaArquivos).toBe('function') 
//     })
//     it('deve retornar array com resultados', async () => {
//         const resultado = await pegaArquivos('D:/Alura/Javascript/Node/lib-markdown/test/arquivos/texto1.md')
//         expect(resultado).toEqual(arrayResult)
//     })
//     it('deve retornar mensagem "não há links"', async() => {
//         const resultado = await pegaArquivos('D:/Alura/Javascript/Node/lib-markdown/test/arquivos/texto1-copy.md')
//         expect(resultado).toBe('não há links')

//     })
//     it('deve lançar um erro na falta de arquivo', async () => {
//         await expect(pegaArquivo('D:/Alura/Javascript/Node/lib-markdown/test/arquivos/texto1-copy.md')).rejects.toThrow(/não há arquivo no caminho/)
//     })
// }) 