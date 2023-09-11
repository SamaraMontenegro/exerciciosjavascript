/*
 @autor: Samara

/*Exercício 3 - Modulo 2
Implemente um algoritmo que receba a idade de uma pessoa e apresente na tela se ela ainda não tem 
idade para votar, se ela é obrigada a votar e se o voto dela é opcional.

voto facultativo maior de 16 e menor de 18 anos e acima de 70 anos;
voto obrigatorio entre 18 a 69 anos;
não pode votar menores de 16 anos.

*/


function idadeVotacao(idade) {

    if (idade >= 18 && idade < 70) {
        return ("Você é obrigado a votar");
    }

    else if (idade < 16) {
        return ("Você não pode votar");
    }

    else if (idade >= 16 && idade < 18 || idade >= 70) {
        return ("Voto Facultativo");
    }
}

//let resultado = idadeVotacao(17);
//console.log(resultado)

module.exports = idadeVotacao;
