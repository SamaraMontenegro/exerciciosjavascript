/*  
@autor: Samara

Questão 6: Ainda sobre a questão anterior, Dimitri e Monique colocaram as suas sacolas 
em um único carrinho de compras. Desenvolva um algoritmo que junte as duas sacolas no carrinho, 
imprima na tela cada um dos produtos contidos no carrinho da seguinte forma Produto: ? Preço: R$ ? 
Quantidade: ?. E no final apresente o total a ser pago e a quantidade de frutas adicionadas. 
Obs: Implemente os testes unitários */
const sacola_dimitri = {
    bananas: 2.5,
    abacaxi: 2.78,
    maca: 6.94,
}

const sacola_monique = {
    bananas: 2.0,
    tomates: 5.0,
    abacaxi: 5.0,
    morangos: 10.0,
}
const sacola_dimitri_qtd = {
    bananas: 12,
    abacaxi: 1,
    maca: 5,
}

const sacola_monique_qtd = {
    bananas: 10,
    tomates: 6,
    abacaxi: 2,
    morangos: 10,
}
const carrinho_total = {sacola_dimitri, sacola_monique}
console.log(carrinho_total);

const sacola_total_qtd = {sacola_dimitri_qtd,sacola_monique_qtd}
console.log(sacola_total_qtd);

console.log(`TOTAL DO CARRINHO É:= ${( sacola_dimitri.bananas + sacola_dimitri.abacaxi + sacola_dimitri.maca).toFixed(2)}+ 
${(sacola_monique.bananas + sacola_monique.tomates + sacola_monique.abacaxi + sacola_monique.morangos)}`)

console.log("TOTAL DO CARRINHO = R$ " + (12.22+22.00));

