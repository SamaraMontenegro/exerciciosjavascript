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
        compraas: [50,30]
    }
},
{
    idConta:2,
    nome: "Beutrana",
    sado:100,
    cartaoDeCredito: {
        limite: 150,
        compras:[]    
    }
},
]