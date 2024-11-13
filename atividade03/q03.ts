/*Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays.*/ 

function arrayToString(numeros: number[]): string {
    let resultado = "";
    numeros.forEach((num, index) => {
        if (index == numeros.length - 1) {
            resultado += num;
        } else {
            resultado += num + "-";
        }
    });
    return resultado
}

const numero = [1, 2, 3, 4, 5];
console.log(arrayToString(numero));
