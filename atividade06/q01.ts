class Calculador {
    
    private operando1: number;
    private operando2: number;

    
    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    
    public somar(): number {
        return this.operando1 + this.operando2;
    }

    
    public subtrair(): number {
        return this.operando1 - this.operando2;
    }
}


const calc = new Calculadora(10, 5);
console.log("Soma:", calc.somar()); 
console.log("Subtração:", calc.subtrair()); 


/*console.log("Operando 1:", calc.operando1); // Deve gerar um erro de compilação
console.log("Operando 2:", calc.operando2); // Deve gerar um erro de compilação*/
