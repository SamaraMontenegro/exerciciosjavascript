/*
 @autor: Samara
 */

/*Exercício 4 - Modulo 2

Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO e na 
cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor 
de R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente 
um algoritmo que representa o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” 
ou “Saldo insuficiente, falta R$ ?,00 para pagar a conta”

*/

function extratoBancario(saldo_bancario) {

    var despesasFulano = {
        agua: 30,
        energia: 50,
        lanche: 26
    };
    somaDespesas = (despesasFulano.agua + despesasFulano.energia + despesasFulano.lanche)

    if (saldo_bancario >= somaDespesas)
        return ("Pagamento Aprovado");
    else if (saldo_bancario < somaDespesas)
        return ("Saldo insuficiente");
}

module.exports = extratoBancario;

