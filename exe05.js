
const readlineSync = require('readline-sync');

// Cria um array vazio para armazenar as tarefas
let listaDeTarefas = [];

// Pede ao usuário para inserir 3 tarefas e as armazena no array
const tarefa1 = readlineSync.question('Digite a primeira tarefa: ');
const tarefa2 = readlineSync.question('Digite a segunda tarefa: ');
const tarefa3 = readlineSync.question('Digite a terceira tarefa: ');

// Adiciona as tarefas ao array
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

// Imprime o array completo no console
console.log('Lista de tarefas:', listaDeTarefas);

// Pede ao usuário que informe o índice da tarefa realizada e remove-a
const indiceRealizada = readlineSync.questionInt('Digite o índice da tarefa realizada (0, 1 ou 2): ');
listaDeTarefas.splice(indiceRealizada, 1);

// Imprime o array atualizado no console
console.log('Lista de tarefas atualizada:', listaDeTarefas);
