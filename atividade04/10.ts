class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(atacado: Jogador): void {
        if (atacado.estaVivo()) {
            const dano = this.calcularAtaque();
            atacado.pontosAtuais -= dano;
            console.log(`${this.toString()} atacou ${atacado.toString()} causando ${dano} de dano `);
        } else {
            console.log(`${atacado.toString()} já está morto e não pode ser atacado`);
        }
    }

    estaVivo(): boolean {
        return this.pontosAtuais > 0;
    }

    toString(): string {
        return `Jogador (força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontosAtuais})`; 
    }
    
}

const jogador1 = new Jogador(5, 2, 50);
const jogador2 = new Jogador(4, 3, 60);

console.log(jogador1.toString());
console.log(jogador2.toString());

jogador1.atacar(jogador2);

jogador2.atacar(jogador1);

console.log("Após ataques: ");
console.log(jogador1.toString());
console.log(jogador2.toString());

const vencedor = jogador1.pontosAtuais > jogador2.pontosAtuais ? "Jogador 1" : "Jogador 2";
console.log(`${vencedor} tem mais pontos.`);


