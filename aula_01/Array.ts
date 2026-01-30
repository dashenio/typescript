import leia = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1,7,9,6);
numeros.push(leia.questionInt('Digite um numero: '))

console.table(numeros)
