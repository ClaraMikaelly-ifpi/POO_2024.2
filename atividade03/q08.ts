/*Crie um exemplo usando a função map para dobrar os elementos de um array e
reduce para totalizar a soma dos elementos do array. */

const numeros2 = [1, 2, 3, 4, 5];

// Usando map para dobrar os elementos do array
const numerosDobrados = numeros2.map(num => num * 2);
console.log("Números Dobrados: ", numerosDobrados); // Saída: [2, 4, 6, 8, 10]

// Usando reduce para somar os elementos do array dobrado
const somaTotal = numerosDobrados.reduce((acc, num) => acc + num, 0);
console.log("Soma Total: ", somaTotal); // Saída: 30




