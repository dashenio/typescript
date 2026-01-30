import leia = require('readline-sync');

const cores: Array<string> = new Array<string>();

for(let cor = 0; cor < 5; cor ++){
    cores.push(leia.question(`Digite a ${cor+1}a cor: `));
}
console.log('Listar todas a cores:\n');
for(let item of cores){
    console.log(item)
}
console.log('\nOrdenar as cores:\n');
for(let item of cores.sort()){
    console.log(item)
}
    