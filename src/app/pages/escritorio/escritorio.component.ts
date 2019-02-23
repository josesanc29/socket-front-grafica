import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
 
  escritorioId: number;
  numeroTicket: number;

  constructor(
              private ws: WebsocketService,
              private ts: TicketsService,
              private http: HttpClient,
              private aroute: ActivatedRoute
              ) { 
              this.escritorioId = this.aroute.snapshot.params.id;
              console.log('Numero de Escritorio es: ===>> ' , this.escritorioId);
  }

  ngOnInit() {
  }

  atenderSiguiente() {
  }

}
