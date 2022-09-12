import { readFile } from "fs/promises";
import { isValidPath } from "./helpers/resolver.js";

/**
 * Lê um arquivo linha por linha.
 * @param {string} path O caminho do arquivo
 * @param {object} options As opções
 * @returns {string[] || string} as linhas carregadas do arquivo.
 */
export async function readLinesAsync(
  path,
  options = {
    /**
     * Executado ao carregar todas as linhas.
     * @param {*} lines as linhas carregadas.
     */
    callback: (lines) => {},
    /**
     * Representa o End-Of-Line Character. Caso não fornecido, o arquivo será retornado como `string` ao invés de `string[]`.
     */
    eol: "\n",
  },
  encoding = "utf-8"
) {
  if (!isValidPath(path)) throw new Error("Not a valid file path");

  try {
    let file = await readFile(path, { encoding });

    if (options.eol) {
      file = file.split(options.eol);
    }

    if (options.callback && options.callback.constructor === Function) {
      options.callback(file);
    }

    return file;
  } catch (error) {
    throw error;
  }
}

// CLI
if (process && process.argv && process.argv.length) {
  (async function (args) {
    if (!args[0]) return;

    console.log(await readLinesAsync(args[0]));
  })(process.argv.slice(2));
}
