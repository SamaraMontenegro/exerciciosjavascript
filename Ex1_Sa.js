/*
 @autor: Samara
 */

/*Exercíco 1 - Modulo 2

Questão 1: Um aluno tirou a nota 7.0 no primeiro bimestre, 6.5 no segundo bimestre, 6.0 no terceiro e 6.7 no 
quarto bimestre. Considerando que a média para ser aprovado é 7, implemente um algoritmo que calcule a média 
e exiba na tela se o aluno passou foi aprovado ou se foi reprovado

*/
function mediaNotas (aluno) {
    const { nota1, nota2, nota3, nota4} = aluno.notas
    const media = ((nota1 + nota2 + nota3+ nota4)/4).toFixed(2);
    if (media >=7) 
        return "APROVADO, PARABENS";
    
        return "REPROVADO";
    
}
 

module.exports = mediaNotas;
///var resultado = mediaNotas(aluno);
//console.log(resultado)


