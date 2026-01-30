import leia = require('readline-sync');

const numeros : Set<number> = new Set<number>();

for(let idx = 0; idx < 10; idx ++){
    numeros.add(leia.questionInt(`Digite o ${idx+1}o numero: `));
}
console.log('\nListar dados do Set:\n');
for(let i of numeros){
    console.log(i)
}