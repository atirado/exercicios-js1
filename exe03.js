const readlineSync = require('readline-sync');

// Pergunta ao usuário seu nome e e-mail
const nomeDoUsuario = readlineSync.question('Digite seu nome: ');
const emailDoUsuario = readlineSync.question('Digite seu e-mail: ');

// Imprime a mensagem formatada no console
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`);


