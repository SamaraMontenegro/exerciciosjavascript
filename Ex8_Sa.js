/*Questão 8: Dado a seguinte array de cores [“Preto”,”Rosa”,”Azul”,”Verde”,”Vermelho”,”Amarelo”,”Branco”], 
Desenvolva um código que imprima na tela em ordem alfabética cada uma das cores e que apresente a frase 
Cor favoritas ao lado da sua cor favorita, exemplo:
Amarelo
Azul
Branco
-> Cor favoritas: Preto
-> Cor favoritas: Verde
Vermelho
Obs: Implemente os testes unitários
*/
function imprimirCores(cores, corFavorita) {
    cores.sort();

    cores.cores
    forEach(cores => {
        console.log(cor);
        if (cores === corFavorita) {
            console.log(`Cor favorita: ${corFavorita}`);
        }
    });
}



module.exports = imprimirCores;


