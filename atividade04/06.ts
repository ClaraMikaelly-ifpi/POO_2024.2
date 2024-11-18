class Saudacao {
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return `${this.texto}, ${this.destinatario}`;
    }
}

const saudacao02 = new Saudacao("Bom dia", "João");
console.log(saudacao02.obterSaudacao());