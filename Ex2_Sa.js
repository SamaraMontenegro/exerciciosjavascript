/*
 @autor: Samara
 */

/*Exercício 2 - Modulo 2
Implemente um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias e 
imprima-a na tela:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos

*/


function faixaEtaria(idade) {


    if (idade >= 5 && idade <= 7) {
        return ("Categoria INFANTIL A");
    }
    else if (idade >= 8 && idade <= 10) {
        return("Categoria INFANTIL B");
    }
    else if (idade >= 11 && idade <= 13) {
        return("Categoria JUVENIL A");
    }
    else if (idade >= 14 && idade <= 17) {
        return("Categoria JUVENIL B");
    }
    else if (idade >= 18) {
        return("Categoria ADULTO");
    }
}

//let resultado = faixaEtaria (5);
//console.log (resultado)

module.exports = faixaEtaria;
