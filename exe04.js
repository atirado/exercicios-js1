const readlineSync = require('readline-sync');

// Array com 5 comidas preferidas
const comidasPreferidas = ['Pizza', 'Sushi', 'Lasanha', 'Hambúrguer', 'Taco'];

// a) Imprime o array completo no terminal
console.log('a) Array completo:', comidasPreferidas);

// b) Imprime cada comida preferida uma embaixo da outra
console.log('b) Essas são as minhas comidas preferidas:');
comidasPreferidas.forEach(comida => console.log(comida));

// c)  Pergunta ao usuário uma comida preferida e troca a segunda comida da lista
const novaComida = readlineSync.question('Insira uma comida preferida: ');
if (novaComida) {
    comidasPreferidas[1] = novaComida;
    console.log('c) Nova lista com a segunda comida trocada:', comidasPreferidas);
} else {
    console.log('Você não inseriu uma nova comida. A lista permanece a mesma.');
}
