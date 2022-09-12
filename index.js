import { readFile } from "fs/promises";

/**
 * Lê um arquivo linha por linha.
 * @param {string} path O caminho do arquivo
 * @param {object} options As opções
 * @returns {string[] || string} as linhas carregadas do arquivo.
 */
export async function readLinesAsync(path, options = {
  /**
   * Executado ao carregar todas as linhas.
   * @param {*} lines as linhas carregadas.
   */
  callback: (lines) => {},
  /**
   * Executado a cada linha.
   * @param {*} line a linha carregada.
   */
  handler: (line) => {},
  /**
   * Representa o End-Of-Line Character. Caso não fornecido, o arquivo será retornado como `string` ao invés de `string[]`.
   */
  eol: '\n',
}, encoding = 'utf-8') {
  try {
    const file = await readFile(path, { encoding })

    if(options.eol) {
      return file.split(options.eol)
    } else {
      return file
    }
  } catch(error) {
    throw error
  }
}