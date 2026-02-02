import leia = require('readline-sync');
import Stack = require('../Stack');

const pilha = new Stack<string>();
let continuar: boolean = true;

console.log('1 - Adicionar livro na pilha');
console.log('2 - Listar todos os livros');
console.log('3 - Retirar livro da pilha');
console.log('0 - Sair');


while(continuar){
    let opcao = leia.questionInt('\nEscolha uma opcao: ')
    switch(opcao){
        case 1:
            pilha.push(leia.question('Pilha: '));
            console.log('\nPilha:\n');
            pilha.printStack();
            console.log('\nLivro adicionado!\n')
            break;
        case 2:
             if(pilha.count() === 0){
                console.log('A Pilha está vazia!\n')
            }
            else{
                console.log('Lista de Livros na Pilha:\n')
                pilha.printStack();
            }
            break;
        case 3:
            console.log('\nPilha:\n')
            pilha.pop();
            pilha.printStack();
            console.log('\nUm Livro foi retirado da pilha!\n')
            break;
        case 0:
            continuar = false
            console.log('\nPrograma Finalizado!\n')
            break;
        default:
            console.log('Digite uma opção válida!\n')
    }
}