export class Ticket {
    
    numero: number;
    escritorio: string;
    ultimo?: number = 0;
    hoy?: number = new Date().getDay();

    constructor( numero: number , escritorio: string ) {
        this.numero = numero;
        this.escritorio = escritorio;
    }

}