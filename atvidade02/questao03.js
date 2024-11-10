function atualizaSaldo(saldo, valor) {
    return saldo + valor;
}

const saldoAtual = 100;
const novoValor = "200"; //  string
const novoSaldo = atualizaSaldo(saldoAtual, novoValor);

console.log(novoSaldo); // Saída: 1200
