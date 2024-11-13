/*Crie uma função que recebe como parâmetro um número e retorna true se o
número for par e false se for ímpar.*/

function ehPar(numero: number): void {
    if (numero % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
        
    }
}

ehPar(6);
