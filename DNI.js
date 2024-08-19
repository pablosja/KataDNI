import { letrasDni } from "./LetrasDNI";

export class DNI {
    constructor(numero) {
        if (!Number.isInteger(numero) || numero < 0 || numero > 99999999) {
            throw new Error("El dato introducido es incorrecto");
        }
        this.numero = numero;
    }

    calcularLetra() {
        const resto = this.numero % 23;
        return letrasDni[resto];
    }
}