import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {


  constructor( public ws: WebsocketService ) { 

  }
  sendEscritorio(escritorio: number) {
    const payload = {
      escritorio
    };
    return this.ws.emit('escritorio', payload);
  }

  atenderTicket() {
    return this.ws.listen('atender');
  }
  siguienteTicket() {
    return this.ws.listen('siguiente');
  }

}
