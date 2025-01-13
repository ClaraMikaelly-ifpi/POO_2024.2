/*
class Calculadora {
    private op1: number;
    private op2: number;

    constructor(op1: number, op2: number) {
        this.op1 = op1;
        this.op2 = op2;
    }

    protected getOp1(): number {
        return this.op1;
    }

    protected getOp2(): number {
        return this.op2;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor(op1: number, op2: number) {
        super(op1, op2);
    }

    exponenciar(): number {
        return Math.pow(this.getOp1(), this.getOp2());
    }
}

// Testando a classe
const calcCientifica = new CalculadoraCientifica(2, 3);
console.log(calcCientifica.exponenciar()); // 8
*/