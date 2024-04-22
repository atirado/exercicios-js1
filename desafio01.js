const readlineSync = require('readline-sync');

const frase = readlineSync.question('Digite uma frase: ');

const palavras = frase.split(' ');

console.log(palavras);
