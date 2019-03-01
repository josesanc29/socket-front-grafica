import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from '../../classes/ticket';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

    sub: Subscription;
    escritorioId: number;
    listado: Ticket[] = [];
    ultimoTicket: Ticket;
  
  constructor( private ws: WebsocketService,
               private ts: TicketsService,
               private http: HttpClient,
               private aroute: ActivatedRoute ) { 

        this.sub = this.aroute.parent.params.subscribe( (dato: any) => {
            this.escritorioId = dato;
            console.log(' id escritorio pasado desde home ', this.escritorioId);
        });
        this.ts.getAllTickets();
        this.ts.getUltimoTicket();
    }
  ngOnInit() {
    this.obtenerListaTickets();
    this.obtenerUltimoTicket();
  }
  obtenerListaTickets() {
    this.ts.getAllTickets()
        .subscribe(( resp: any ) => {
            this.listado = resp;
        });
  }
  obtenerUltimoTicket(){
    this.ts.getUltimoTicket()
        .subscribe(( resp: any ) => {
          this.ultimoTicket = resp;
        })
  }
}
