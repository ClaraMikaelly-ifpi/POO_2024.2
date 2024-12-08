/* 
Questao 1

class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string, saldo: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
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

    atualizarConta(numero: string, novaConta: Conta): boolean {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice !== -1) {
            this.contas[indice] = novaConta;
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
            for (const destino of destinos) {
                origem.transferir(destino, valor);
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

// Exemplo de uso
const banco = new Banco();
const cliente1 = new Conta(1, "12345", 1000);
const cliente2 = new Conta(2, "67890", 500);
const cliente3 = new Conta(3, "11223", 200);

banco.adicionarConta(cliente1);
banco.adicionarConta(cliente2);
banco.adicionarConta(cliente3);

console.log("Quantidade de contas:", banco.quantidadeDeContas());
console.log("Total de depósitos:", banco.totalDepositos());
console.log("Média de saldos:", banco.mediaSaldos());

banco.transferir(cliente1.numero, cliente2.numero, 100);
console.log("Saldo cliente1:", banco.consultarPorNumero(cliente1.numero)?.saldo);
console.log("Saldo cliente2:", banco.consultarPorNumero(cliente2.numero)?.saldo);

Questao 2
class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `${this.texto} - Curtidas: ${this.quantidadeCurtidas}`;
    }
}

class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    adicionarPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    excluirPostagem(id: number): boolean {
        const indice = this.postagens.findIndex(postagem => postagem.id === id);
        if (indice !== -1) {
            this.postagens.splice(indice, 1);
            return true;
        }
        return false;
    }

    postagemMaisCurtida(): Postagem | null {
        if (this.postagens.length === 0) return null;

        return this.postagens.reduce((maisCurtida, postagem) => {
            return (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) ? postagem : maisCurtida;
        });
    }

    curtirPostagem(id: number): boolean {
        const postagem = this.postagens.find(postagem => postagem.id === id);
        if (postagem) {
            postagem.curtir();
            return true;
        }
        return false;
    }
}

// Exemplo de uso
const blog = new Microblog();
const postagem1 = new Postagem(1, "Primeira postagem!");
const postagem2 = new Postagem(2, "Segunda postagem!");
const postagem3 = new Postagem(3, "Terceira postagem!");

blog.adicionarPostagem(postagem1);
blog.adicionarPostagem(postagem2);
blog.adicionarPostagem(postagem3);

blog.curtirPostagem(1);
blog.curtirPostagem(1);
blog.curtirPostagem(2);

console.log(postagem1.toString()); 
console.log(postagem2.toString()); 
console.log(postagem3.toString()); 

console.log("Postagem mais curtida:", blog.postagemMaisCurtida()?.toString()); 

blog.excluirPostagem(2);
console.log("Postagens após exclusão:");
blog.postagens.forEach(postagem => console.log(postagem.toString()));
*/