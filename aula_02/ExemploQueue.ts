import leia from 'readline-sync';
import Queue from './Queue';

const fila = new Queue<string>();

fila.enqueue('Renan');
fila.enqueue('Vivian'); // add item na lista
fila.enqueue('Erick');
fila.enqueue(leia.question('Digite um nome: '));

fila.printQueue(); // mostra a fila

fila.dequeue();
console.log('\n')

fila.printQueue();
console.log('\n');

// conta o numero de elementos da fila
console.log('Tamanho da fila: ', fila.count());

// procura o valor na fila
console.log('O Erick está na fila? ', fila.contains('Erick'));