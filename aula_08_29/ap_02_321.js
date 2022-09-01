const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
            const dobro = conteudo.toString() + conteudo.toString();
            const finalizar = function (erro) {
                if (erro) {
                    console.log('Deu erro tentando salvar o dobro')
                }
                else {
                    console.log("Salvou o dobro com sucesso");
                }
            }
            console.log("dkdkdk " + finalizar)
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt");
