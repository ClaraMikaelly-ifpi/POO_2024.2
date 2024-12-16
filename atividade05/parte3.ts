class Conta {
    id: number;
    numero: string;
    saldo: number;
    titular: string | null;

    constructor(id: number, numero: string, saldo: number, titular: string | null = null) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.titular = titular;
    }

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    transferir(destino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true;
        }
        return false;
    }

    mudarTitularidade(novoTitular: string): void {
        this.titular = novoTitular;
    }
}

class Banco {
    contas: Conta[] = [];

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    consultarPorIndice(indice: number): Conta | null {
        if (indice >= 0 && indice < this.contas.length) {
            return this.contas[indice];
        }
        return null;
    }

    excluirConta(numero: string): boolean {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1);
            return true;
        }
        return false;
    }

    excluirCliente(titular: string): void {
        this.contas = this.contas.filter(conta => conta.titular !== titular);
    }

    atualizarConta(numero: string, novaConta: Conta): boolean {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice !== -1) {
            this.contas[indice] = novaConta;
            return true;
        }
        return false;
    }

    listarContasSemTitular(): Conta[] {
        return this.contas.filter(conta => !conta.titular);
    }

    atribuirTitularidade(numero: string, titular: string): boolean {
        const conta = this.consultarPorNumero(numero);
        if (conta) {
            conta.mudarTitularidade(titular);
            return true;
        }
        return false;
    }

    sacar(numero: string, valor: number): boolean {
        const conta = this.consultarPorNumero(numero);
        if (conta) {
            return conta.sacar(valor);
        }
        return false;
    }

    depositar(numero: string, valor: number): void {
        const conta = this.consultarPorNumero(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    transferir(origemNumero: string, destinoNumero: string, valor: number): boolean {
        const origem = this.consultarPorNumero(origemNumero);
        const destino = this.consultarPorNumero(destinoNumero);
        if (origem && destino) {
            return origem.transferir(destino, valor);
        }
        return false;
    }

    transferirParaMultiplos(origemNumero: string, destinos: Conta[], valor: number): void {
        const origem = this.consultarPorNumero(origemNumero);
        if (origem) {
            const totalTransferencia = valor * destinos.length;
            if (origem.saldo >= totalTransferencia) {
                for (const destino of destinos) {
                    origem.transferir(destino, valor);
                }
            } else {
                console.log("Saldo insuficiente para realizar todas as transferências.");
            }
        }
    }

    consultarPorNumero(numero: string): Conta | null {
        return this.contas.find(conta => conta.numero === numero) || null;
    }

    quantidadeDeContas(): number {
        return this.contas.length;
    }

    totalDepositos(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    mediaSaldos(): number {
        const quantidade = this.quantidadeDeContas();
        const total = this.totalDepositos();
        return quantidade ? total / quantidade : 0;
    }
}

class App {
    banco: Banco;

    constructor() {
        this.banco = new Banco();
    }

    menu(): void {
        console.log("1. Inserir conta");
        console.log("2. Consultar conta");
        console.log("3. Excluir conta");
        console.log("4. Excluir cliente");
        console.log("5. Listar contas sem titular");
        console.log("6. Atribuir titularidade");
        console.log("7. Efetuar ordem bancária");
        console.log("8. Mostrar quantidade de contas");
        console.log("9. Mostrar total de depósitos");
        console.log("10. Mostrar média de saldos");
    }

    inserirConta(id: number, numero: string, saldo: number, titular: string | null = null): void {
        const conta = new Conta(id, numero, saldo, titular);
        this.banco.adicionarConta(conta);
    }

    consultarConta(numero: string): void {
        const conta = this.banco.consultarPorNumero(numero);
        if (conta) {
            console.log(`Conta ${conta.numero} - Saldo: ${conta.saldo} - Titular: ${conta.titular}`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    excluirConta(numero: string): void {
        if (this.banco.excluirConta(numero)) {
            console.log("Conta excluída com sucesso.");
        } else {
            console.log("Conta não encontrada.");
        }
    }

    excluirCliente(titular: string): void {
        this.banco.excluirCliente(titular);
        console.log(`Todas as contas do titular ${titular} foram excluídas.`);
    }

    listarContasSemTitular(): void {
        const contas = this.banco.listarContasSemTitular();
        if (contas.length > 0) {
            contas.forEach(conta => console.log(`Conta ${conta.numero} sem titular.`));
        } else {
            console.log("Nenhuma conta sem titular encontrada.");
        }
    }

    atribuirTitularidade(numero: string, titular: string): void {
        if (this.banco.atribuirTitularidade(numero, titular)) {
            console.log("Titularidade atribuída com sucesso.");
        } else {
            console.log("Conta não encontrada.");
        }
    }

    efetuarOrdemBancaria(origemNumero: string, destinos: string[], valor: number): void {
        const contasDestino = destinos.map(numero => this.banco.consultarPorNumero(numero)).filter(conta => conta !== null) as Conta[];
        this.banco.transferirParaMultiplos(origemNumero, contasDestino, valor);
    }

    mostrarQuantidadeDeContas(): void {
        console.log("Quantidade de contas:", this.banco.quantidadeDeContas());
    }

    mostrarTotalDeDepositos(): void {
        console.log("Total de depósitos:", this.banco.totalDepositos());
    }

    mostrarMediaDeSaldos(): void {
        console.log("Média de saldos:", this.banco.mediaSaldos());
    }
}

//EX
const app = new App();
app.inserirConta(1, "12345", 1000, "Cliente 1");
app.inserirConta(2, "67890", 500, "Cliente 2");
app.inserirConta(3, "11223", 200);

app.mostrarQuantidadeDeContas();
app.mostrarTotalDeDepositos();
app.mostrarMediaDeSaldos();

app.efetuarOrdemBancaria("12345", ["67890", "11223"], 100);
app.consultarConta("12345");
app.consultarConta("67890");


/* versao comentada
// Classe que representa uma conta bancária
class Conta {
    id: number;
    numero: string;
    saldo: number;

    // Construtor da classe Conta
    constructor(id: number, numero: string, saldo: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
    }

    // Método para sacar um valor da conta
    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    // Método para depositar um valor na conta
    depositar(valor: number): void {
        this.saldo += valor;
    }

    // Método para transferir um valor para outra conta
    transferir(destino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true;
        }
        return false;
    }
}

// Classe que representa um banco
class Banco {
    contas: Conta[] = [];

    // Método para adicionar uma conta ao banco
    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    // Método para consultar uma conta por índice
    consultarPorIndice(indice: number): Conta | null {
        if (indice >= 0 && indice < this.contas.length) {
            return this.contas[indice];
        }
        return null;
    }

    // Método para excluir uma conta pelo número
    excluirConta(numero: string): boolean {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1);
            return true;
        }
        return false;
    }

    // Método para atualizar uma conta
    atualizarConta(numero: string, novaConta: Conta): boolean {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice !== -1) {
            this.contas[indice] = novaConta;
            return true;
        }
        return false;
    }

    // Método para sacar um valor de uma conta pelo número
    sacar(numero: string, valor: number): boolean {
        const conta = this.consultarPorNumero(numero);
        if (conta) {
            return conta.sacar(valor);
        }
        return false;
    }

    // Método para depositar um valor em uma conta pelo número
    depositar(numero: string, valor: number): void {
        const conta = this.consultarPorNumero(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    // Método para transferir um valor entre duas contas pelo número
    transferir(origemNumero: string, destinoNumero: string, valor: number): boolean {
        const origem = this.consultarPorNumero(origemNumero);
        const destino = this.consultarPorNumero(destinoNumero);
        if (origem && destino) {
            return origem.transferir(destino, valor);
        }
        return false;
    }

    // Método para transferir um valor de uma conta para várias contas
    transferirParaMultiplos(origemNumero: string, destinos: Conta[], valor: number): void {
        const origem = this.consultarPorNumero(origemNumero);
        if (origem) {
            for (const destino of destinos) {
                origem.transferir(destino, valor);
            }
        }
    }

    // Método para consultar uma conta pelo número
    consultarPorNumero(numero: string): Conta | null {
        return this.contas.find(conta => conta.numero === numero) || null;
    }

    // Método para obter a quantidade de contas no banco
    quantidadeDeContas(): number {
        return this.contas.length;
    }

    // Método para calcular o total de depósitos no banco
    totalDepositos(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    // Método para calcular a média dos saldos das contas no banco
    mediaSaldos(): number {
        const quantidade = this.quantidadeDeContas();
        const total = this.totalDepositos();
        return quantidade ? total / quantidade : 0;
    }
}

// Exemplo de uso das classes
const banco = new Banco();
const cliente1 = new Conta(1, "12345", 1000);
const cliente2 = new Conta(2, "67890", 500);
const cliente3 = new Conta(3, "11223", 200);

banco.adicionarConta(cliente1);
banco.adicionarConta(cliente2);
banco.adicionarConta(cliente3);

console.log("Quantidade de contas:", banco.quantidadeDeContas()); // Exibe a quantidade de contas no banco
console.log("Total de depósitos:", banco.totalDepositos()); // Exibe o total de depósitos no banco
console.log("Média de saldos:", banco.mediaSaldos()); // Exibe a média dos saldos das contas

// Realiza uma transferência de 100 da conta cliente1 para a conta cliente2
banco.transferir(cliente1.numero, cliente2.numero, 100);

console.log("Saldo cliente1:", banco.consultarPorNumero(cliente1.numero)?.saldo); // Exibe o saldo da conta cliente1
console.log("Saldo cliente2:", banco.consultarPorNumero(cliente2.numero)?.saldo); // Exibe o saldo da conta cliente2

*/