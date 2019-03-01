import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../classes/ticket';
import { WebsocketService } from '../../services/websocket.service';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {


  constructor(private ws: WebsocketService,
              private ts: TicketsService) { 
    }

  ngOnInit() {

  }

  crearTicket( num: number , escr: string ) {
    const nuevoTicket: Ticket = {
        numero : num,
        escritorio: escr
    };
    console.log(nuevoTicket);
    this.ts.nuevoTicket(nuevoTicket.numero , nuevoTicket.escritorio);
  }

}
