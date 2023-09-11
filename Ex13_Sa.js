/*Questão 13: Crie 4 métodos onde cada um receba dois parâmetros e realize, respectivamente, as seguintes operações 
aritméticas

a) - Somar
b) - Subtrair
c) - Multiplicar
d) - Dividir*/

function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
      return "Operação invalida.";
    }
    return a / b;
  }

var a = 5
var b = 12

console.log("Soma", somar(a,b));
console.log("Subritração", subtrair(a,b));
console.log("Multiplicação", multiplicar(a,b));
console.log("Dividisão", dividir(a,b));