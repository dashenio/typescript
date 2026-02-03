import leia from 'readline-sync';
import Stack from './Stack';


const pilha = new Stack<string>();

pilha.push('Renan');
pilha.push('Vivian'); // add item na lista
pilha.push('Erick');
pilha.push(leia.question('Digite um nome: '));

pilha.printStack(); // mostra a fila

pilha.pop();
console.log('\n')

pilha.printStack();
console.log('\n');

// conta o numero de elementos da fila
console.log('Tamanho da fila: ', pilha.count());

// procura o valor na fila
console.log('O Erick está na fila? ', pilha.contains('Erick'));