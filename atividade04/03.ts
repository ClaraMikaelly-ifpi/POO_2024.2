class Hotel {
    quantReservas: number;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas);
