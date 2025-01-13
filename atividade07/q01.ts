class Veiculo {
    placa: String;
    ano : number;

    constructor(placa: String, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    modelo: String;

    constructor(placa: String, ano: number, modelo: String) {
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    autonomia: number;

    constructor(placa: String, ano: number, modelo: String, autonomia: number) {
        super(placa, ano, modelo);
        this.autonomia = autonomia;
    }
}