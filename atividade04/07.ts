class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;

    }

    formaTriangulo(): boolean {
        const {lado1, lado2, lado3} = this;
        return (
            Math.abs(lado2 - lado3) < lado1 && lado1 < lado2 + lado3 &&
            Math.abs(lado1 - lado3) < lado2 && lado2 < lado1 + lado3 &&
            Math.abs(lado1 - lado2) < lado3 && lado3 < lado1 + lado2 
        );
    }

    ehIsoceles(): boolean {
        if (!this.formaTriangulo()) return false;
        return (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3);
    }

    ehEquilatero(): boolean {
        if (!this.formaTriangulo()) return false; 
        return (this.lado1 === this.lado2 && this.lado2 === this.lado3); 
    }
    
    ehEscaleno(): boolean { 
        if (!this.formaTriangulo()) return false; 
        return (this.lado1 !== this.lado2 && this.lado1 !== this.lado3 && this.lado2 !== this.lado3); 
    }

}

const triangulo1 = new Triangulo(3, 4, 5);
console.log(triangulo1.formaTriangulo());
console.log(triangulo1.ehIsoceles());
console.log(triangulo1.ehEquilatero());
console.log(triangulo1.ehEscaleno());

const triangulo2 = new Triangulo(2, 2, 2);
console.log(triangulo2.formaTriangulo());
console.log(triangulo2.ehIsoceles());
console.log(triangulo2.ehEquilatero());
console.log(triangulo2.ehEscaleno());
