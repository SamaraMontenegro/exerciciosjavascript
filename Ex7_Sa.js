/*Questão 7: Chegando ao caixa, Monique e Dimitri verificam se esqueceram de comprar laranjas. 
Desenvolva o código que imprima na tela se eles esqueceram ou não de comprar laranja. 
Obs: Implemente os testes unitário.
*/

function verificarEsquecimentoDeLaranjas(compras) {
    var esqueceramLaranjas = false;

    compras.forEach(function (pessoa) {
        if (pessoa.nome) {
            var temLaranjas = pessoa.sacola.some(function (item) {
                return item.fruta === "laranja";
            });
            if (!temLaranjas) {
                console.log(pessoa.nome + " esqueceu das laranjas");
                esqueceramLaranjas = true;
            } else {
                console.log(pessoa.nome + " não esqueceu das laranjas");
            }
        }
    });

    if (!esqueceramLaranjas) {
        return "Ninguém esqueceu das laranjas";
    } else {
        return "Pelo menos uma pessoa esqueceu das laranjas";
    }
}

var compras = [
    {
        nome: "Dimitri",
        sacola: [
            { fruta: "banana", preço: 2.50, qtd: 12 },
            { fruta: "abacaxi", preço: 2.78, qtd: 1 },
            { fruta: "maçãs", preço: 6.94, qtd: 5 }
        ]
    },
    {
        nome: "Monique",
        sacola: [
            { fruta: "banana", preço: 2.00, qtd: 10 },
            { fruta: "tomate", preço: 5.00, qtd: 6 },
            { fruta: "abacaxi", preço: 5.00, qtd: 2 },
            { fruta: "morango", preço: 10, qtd: 10 },
            { fruta: "laranja", preço: 3.5, qtd: 5 }
        ]
    },
    // Adicione mais objetos aqui, se necessário
];

var resultado = verificarEsquecimentoDeLaranjas(compras);
console.log(resultado);

