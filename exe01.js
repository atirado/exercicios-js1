let array
console.log('a. ', array)

// vai aparecer indefinido

array = null
console.log('b. ', array)

// vai aparecer null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// vai aparecer 11

let i = 0
console.log('d. ', array[i])

// vai aparecer 3 pois no array o 3 é o 0 

array[i+1] = 19
console.log('e. ', array)

// vai adicionar o número 19 no lugar do 4

const valor = array[i+6]
console.log('f. ', valor)

// vai aparecer o número 9 

