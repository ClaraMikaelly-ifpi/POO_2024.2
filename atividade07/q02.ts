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

    somar(): number {
        return this.op1 + this.op2;
    }
}

class Soma extends Calculadora {
    constructor(op1: number, op2: number) {
        super(op1, op2);
    }
}

const calculadora = new Calculadora(10, 20);
console.log(calculadora.somar());

