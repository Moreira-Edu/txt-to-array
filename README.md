# TXT To String
Leitor assíncrono de arquivos escrito em Node.

## Run
Para executar o leitor, utilize:
```
npm index.js [file-path]
```

## Tests
Testes são implementados via [Mocha](https://mochajs.org/) na pasta `test/`.
Os testes podem ser executados com o comando:
```
npm run test
```

## Options
As opções abaixo são passadas para o leitor do arquivo (`readLinesAsync(path, options)`).

| Propriedade | Tipo                               | Default | Descrição                                                                                    |
|-------------|------------------------------------|---------|----------------------------------------------------------------------------------------------|
| callback    | Function(file: string \| string[]) | Empty   | Executado após carregar o arquivo por completo. O arquivo é passado como parâmetro.          |
| eol         | String                             | \r\n    | O delimitador de fim-de-linha. Caso indexistente ou falso o arquivo é retornado como string. |
|             |                                    |         |                                                                                              |