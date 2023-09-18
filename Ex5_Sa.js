/*Exercício 5 - Modulo 2

Dimitri e Monique foram à feira, cada um comprou e colocou na sua respectiva sacola as 
frutas que mais gostava. Na sacola de Dimitri tinha: 12 bananas que ele comprou por R$ 2,50; 
1 abacaxi que custou 2,78; 5 maçãs que custou 6,94. Já na sacola de Monique tinha 10 bananas
que custaram R$ 2,00; 6 tomates que foi R$ 5,00, 2 abacaxi R$ 5,00 e 10 morangos que custaram 
R$10,00. Implemente um algoritmo que mostre quanto cada um gastou.
*/

function custoSacola() {

    const sacolaDimitri = { bananas: 2.5, abacaxi: 2.78, maca: 6.94, }
    const sacolaMonique = { bananas: 2.0, tomates: 5.0, abacaxi: 5.0, morangos: 10.0, }
    const custoDimitri = sacolaDimitri.bananas + sacolaDimitri.abacaxi + sacolaDimitri.maca
    const custoMonique = sacolaMonique.bananas + sacolaMonique.tomates + sacolaMonique.abacaxi + sacolaMonique.morangos
   
    return {
        custoDimitri: custoDimitri.toFixed(2),
        custoMonique: custoMonique.toFixed(2),
    };
}

const resultado = custoSacola();
console.log(resultado.custoDimitri);
console.log(resultado.custoMonique);