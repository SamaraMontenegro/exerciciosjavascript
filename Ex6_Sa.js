/*  
Questão 6: Ainda sobre a questão anterior, Dimitri e Monique colocaram as suas sacolas 
em um único carrinho de compras. Desenvolva um algoritmo que junte as duas sacolas no carrinho, 
imprima na tela cada um dos produtos contidos no carrinho da seguinte forma Produto: ? Preço: R$ ? 
Quantidade: ?. E no final apresente o total a ser pago e a quantidade de frutas adicionadas. 
Obs: Implemente os testes unitários */

function juntarSacolas(sacola1, sacola2) {
    let carrinho = []
    sacola1.forEach(produto => {
        carrinho.push(produto)
    });

    sacola2.forEach(produto => {
        carrinho.push(produto)
    });

    return carrinho
}

function imprimirNF(carrinho) {
    return carrinho
}

function obterTotalCarrinho(carrinho) {
    return carrinho.reduce((acumulador, produto) => acumulador + produto.quantidade * produto.preco, 0)
}

module.exports = {
    juntarSacolas,
    imprimirNF,
    obterTotalCarrinho
};