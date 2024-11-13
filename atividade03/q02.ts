/*2. Crie uma função que receba como parâmetros um nome e um pronome de
tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.*/

function saudacao(nome: string, pronome: string = "Sr"): void {
    const saudar = `${pronome}. ${nome}`;
    console.log(saudar);
    
}

saudacao("Sávia", "Sra");
saudacao("Ely");