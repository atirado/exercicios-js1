const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

// o valor que aparece é 27 e a frase mudada fica assim:SUBI NUM ONIBUS EM MIRROCOS. "