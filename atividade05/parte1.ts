/*
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
*/

/* 2° questao
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
    id: number;
    cliente: Cliente;
    saldo: number;

    constructor(id: number, cliente: Cliente, saldo: number = 0) {
        this.id = id;
        this.cliente = cliente;
        this.saldo = saldo;
    }

}

// Exemplo de uso
const cliente1 = new Cliente(1, "João Silva", "123.456.789-00", new Date("1980-01-01"));
const conta1 = new Conta(1, cliente1, 1000);
const conta2 = new Conta(2, cliente1, 500);

cliente1.contas.push(conta1, conta2);

console.log(cliente1);
console.log(conta1);
console.log(conta2);
*/

/* Questao 3°

