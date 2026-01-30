import leia = require('readline-sync');
// indexOf não funciona pois Set não tem index
const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("Verde");
cores.add("Vermelho");
                   // |  
cores.add("Verde");// |vai deletar
cores.add("Azul"); // |esses repetidos
                   // |
cores.add("Amarelo");
cores.add(leia.question('Digite uma cor: '));

// false pq é case sensitive
console.log("A cor verde existe? ", cores.has("verde"));
// true
console.log("A cor Verde existe? ", cores.has("Verde"));

console.table(cores);

cores.delete('Amarelo'); // deleta o item 

console.table(cores);

for(let cor of cores){
    console.log(cor);
}
