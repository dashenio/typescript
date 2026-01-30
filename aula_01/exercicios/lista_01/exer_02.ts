import leia = require('readline-sync');

const numeros : Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6); 

let n = leia.questionInt('Digite um numero para ser procurado: ')

if(numeros.includes(n)){
    console.log(`O número ${n} está localizado na posição: ${numeros.indexOf(n)}`);
}
else{
    console.log(`O número ${n} não foi encontrado!`)
}