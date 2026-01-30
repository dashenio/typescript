import leia = require('readline-sync');

let n1, n2: number; // tem que tipar
let n3: number, n4: string; // como colocar várias em uma linha com tipos !=

n1 = leia.questionFloat('Digite n1: ');
n2 = leia.questionFloat('Digite n2: ');

console.log(`${n1} + ${n2} = ${n1+n2}`)

n4 = "oi"