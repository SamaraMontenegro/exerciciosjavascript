/*Questão 10: Considere objeto de correntistas

image.png

A) Implemente uma função de depositar, a qual deve incrementar o valor do saldo;
B) Implemente uma função de sacar, a qual deve subtraia o valor do saldo;
C) Implemente uma função comprar que deve adicionar o valor da compra na array compras do respectivo correntista. 
Obs: Implemente os testes unitários
*/

const correntistas = [
{
    idConta: 1,
    nome: "Fulano",
    saldo: 10,
    cartaoDeCredito:{
        limite: 100,
        compras: [50,30]
    }
},
{
    idConta: 2,
    nome: "Beutrana",
    saldo: 100,
    cartaoDeCredito: {
        limite: 150,
        compras:[]    
    }
},
]
//Implemente uma função de depositar, a qual deve incrementar o valor do saldo

function deposito(conta, valor) {
    for (let index = 0; index < correntistas.length; index++) {
        if (correntistas[index].idConta === conta) {
            correntistas[index].saldo += valor;
            return correntistas[index].saldo;
        }
    }
    return "Conta não encontrada"; // Retorna uma mensagem se a conta não for encontrada
}

//const resultado = deposito(1, 50);
//console.log(resultado);

//Implemente uma função de sacar, a qual deve subtraia o valor do saldo

function sacar(conta, valor) {
    for (var i = 0; i < correntistas.length; i++) {
        if (correntistas[i].idConta === conta) {
            if (valor > correntistas[i].saldo) {
                return "Saldo insuficiente.";
            } else {
                correntistas[i].saldo -= valor;
                return correntistas[i].saldo;
            }
        }
    }
    return "Conta não encontrada";
}

//const resultado = sacar(2, 20);
//console.log(resultado);

//Implemente uma função comprar que deve adicionar o valor da compra na array compras do respectivo correntista.

function comprarCartaoCredito(conta, valor) {
    for (var i = 0; i < correntistas.length; i++) {
        if (correntistas[i].idConta === conta) {
            const cartaoDeCredito = correntistas[i].cartaoDeCredito;

            if (!cartaoDeCredito.compras) {
                cartaoDeCredito.compras = [];
            }

            const totalCompras = cartaoDeCredito.compras.reduce((total, compra) => total + compra, 0);

            if (valor + totalCompras <= cartaoDeCredito.limite) {
                cartaoDeCredito.compras.push(valor);
                return `Compra de ${valor.toFixed(2)} realizada com sucesso. Novo limite: ${(cartaoDeCredito.limite - totalCompras - valor).toFixed(2)}`;
            } else {
                return "Limite de crédito insuficiente para realizar a compra.";
            }
        }
    }
    return "Conta não encontrada";
}

// Exemplo de uso:
const resultado = comprarCartaoCredito(1, 10);
console.log(resultado);





