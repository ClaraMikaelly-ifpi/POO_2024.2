"use strict";
// tipagem ESTÁTICA
let variavel = "Clara";
console.log(typeof (variavel));
let veriavel = 12;
console.log(typeof (variavel));
// Tipagem FRACA
const a = 12;
const b = "Clara";
console.log(a + " " + b);
// METODOS 
// aproximação
let y = 2.9372;
console.log(y.toPrecision(2));
// minusculo
let s = "CLARA";
console.log(s.toLowerCase());
// maiusculo
let d = "Clara";
console.log(d.toLocaleLowerCase());
// arrays tipados
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros.reverse());
// for
let numeros1 = [4, 5, 6];
for (let i = 0; i < numeros1.length; i++) {
    numeros1[i] = numeros1[i] * 2;
    console.log(numeros1[i]);
}
for (let numero of numeros1) {
    console.log(numero * 3);
}
for (let num in numeros1) {
    console.log(num);
}
// funcao
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
// funcao como variaveis
let z = function add(x, y) {
    return x + y;
};
console.log(z(2, 4));
//arrow
var dobra = (x) => x * 2;
console.log(dobra(2));
