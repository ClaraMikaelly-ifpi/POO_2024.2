class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date, contas: Conta[] = []) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = contas;
    }

    
}

class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

}

// Exemplo de uso
const conta1 = new Conta("12345", 1000);
const conta2 = new Conta("67890", 500);

const cliente = new Cliente(1, "João Silva", "123.456.789-00", new Date("1980-01-01"), [conta1, conta2]);

console.log(cliente);
