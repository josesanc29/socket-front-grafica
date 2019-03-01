import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Ticket } from '../classes/ticket';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  
  listaTickets: Ticket[];


  constructor( public ws: WebsocketService ,
               public http: HttpClient ) { }

  getAllTickets() {
    return this.http.get('http://localhost:5000/tickets/ultimos').pipe(map((datos: Ticket[]) => {
        console.log(datos);
        this.listaTickets = datos;
        return this.listaTickets;

    }));
  }
  getUltimoTicket() {
    return this.http.get('http://localhost:5000/tickets/ultimo-ticket').pipe(map( (datos: Ticket ) => {
        console.log(datos);
        const ultimo = {
          numero : datos.numero,
          escritorio: datos.escritorio
        };
        this.listaTickets.push(ultimo);
    }));
  }

  sendEscritorio(escritorio: number) {
    const payload = {
      escritorio
    };
    return this.ws.emit('escritorio', payload);
  }

  nuevoTicket( numero: number , escritorio: string) {
    const payload = {
      numero,
      escritorio
    };
    return this.ws.emit('nuevo-ticket', payload);
  }
  
  atendiendoTicket(){
    this.ws.listen('atiendo-ticket');
  }

  ticketAtendidoUltimo(){
    this.ws.listen('ultimo');
  }

}
