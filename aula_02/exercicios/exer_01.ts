import leia from 'readline-sync';
import Queue from '../Queue';

const fila = new Queue<string>();
let continuar: boolean = true;

console.log('1 - Adicionar um novo Cliente na fila');
console.log('2 - Listar todos os Clientes na fila');
console.log('3 - Chamar (retirar) uma pessoa da fila');
console.log('0 - Sair');


while(continuar){
    let opcao = leia.questionInt('\nEscolha uma opcao: ')
    switch(opcao){
        case 1:
            fila.enqueue(leia.question('Add um cliente na lista: '));
            console.log('\nÇliente adicionado!\n')
            break;
        case 2:
            console.log('Lista de Clientes na Fila:\n')
            fila.printQueue();
            break;
        case 3:
            console.log('\nFila:\n')
            fila.dequeue();
            fila.printQueue();
            console.log('\nO cliente foi chamado!\n')
            break;
        case 0:
            continuar = false
            console.log('\nPrograma Finalizado!\n')
            break;
        default:
            console.log('Digite uma opção válida!\n')
    }
}
