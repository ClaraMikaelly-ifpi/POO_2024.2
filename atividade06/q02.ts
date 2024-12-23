class Hora {
    
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    
    public lerHora(): number {
        return this.hora;
    }

    
    public lerMinutos(): number {
        return this.minutos;
    }

    
    public lerSegundos(): number {
        return this.segundos;
    }

    
    public formatarHora(): string {
        const hh = this.hora < 10 ? '0' + this.hora : this.hora.toString();
        const mm = this.minutos < 10 ? '0' + this.minutos : this.minutos.toString();
        const ss = this.segundos < 10 ? '0' + this.segundos : this.segundos.toString();
        return `${hh}:${mm}:${ss}`;
    }
}


const horaAtual = new Hora(9, 5, 30);
console.log("Hora:", horaAtual.lerHora()); 
console.log("Minutos:", horaAtual.lerMinutos()); 
console.log("Segundos:", horaAtual.lerSegundos()); 
console.log("Hora formatada:", horaAtual.formatarHora()); 

