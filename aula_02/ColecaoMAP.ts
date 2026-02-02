import leia = require('readline-sync');

const participantes: Map<number, string> = new Map<number, string>();

////////////////////////////////////////////////////////////
const teste = [1, 2, 3]; // relaciona os objetos de uma array
let [p, s, t] = teste; // com a outra

console.log(p); // 1
console.log(s); // 2
console.log(t); // 3
////////////////////////////////////////////////////////////

participantes.set(1, 'Ana');
participantes.set(2, 'Samuel');
participantes.set(3, 'Leonardo');
participantes.set(4, 'Camila');

let matricula = leia.questionInt('Digite o numero da matricula: ');
let nome = leia.question('Digite o nome do participante: ');
participantes.set(matricula, nome);


for(let [matricula, nome] of participantes){
    console.log(`Matrícula: ${matricula} - Nome: ${nome}`);
}
// Procura um elemento pela chave
console.log('Existe a matrícula 2? ', participantes.has(2));

// Procura um elemento pelo valor
console.log('Existe a participante Ana? ', Array.from(participantes.values()).includes('Ana'));

// Matricula tem o valor das chaves de participantes
for(let matricula of participantes.keys()){
    console.log(`Matrícula: ${matricula}`);
}

// Procura o valor associado à chave
console.log('Qual é o nome do aluno com a matrícula 3? ', participantes.get(3));

// Apaga a chave
participantes.delete(3);

console.table(participantes)