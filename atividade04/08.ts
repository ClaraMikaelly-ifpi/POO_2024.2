class Equipamento {
    ligado: boolean;

    constructor() {
        this.ligado = false;
    }

    liga(): void {
        if(!this.ligado) {
            this.ligado = true;
            console.log("O equipamento foi ligado!");
        } else {
            console.log("O equipamento já está desligado!");
        }
    }

    desliga(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log("O equipamento foi desligado!");
        } else {
            console.log("O equipamento já está desligado!");
        }
    }

    inverte(): void {
        this.ligado = !this.ligado;
        console.log(this.ligado ? "O equipamento foi ligado" : "O equipamento foi desligado");
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

const equipamento = new Equipamento();

equipamento.liga();
equipamento.liga();
equipamento.desliga();
equipamento.desliga();
equipamento.inverte();
equipamento.inverte();
console.log( equipamento.estaLigado());