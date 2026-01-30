import leia = require('readline-sync');

const numeros : Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]); 

let n = leia.questionInt('Digite um numero para ser procurado: ')

if(numeros.has(n)){
    console.log(`O número ${n} foi encontrado!`);
}
else{
    console.log(`O número ${n} não foi encontrado!`)
}