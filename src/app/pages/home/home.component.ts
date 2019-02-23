import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/services/tickets.service';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/classes/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ticketsTotal: Ticket[] = [];

  constructor( private router: Router ,
               private http: HttpClient,
               private ts: TicketsService) { 
      this.http.get('http://localhost:5000/tickets')
                .subscribe((tickets: any) => {
                  console.log('tickets' , tickets);
                  this.ticketsTotal = tickets;
                });
  }

  ngOnInit() {
  }
  entrar( numero: number) {
    if (!numero) {
      return;
    }
    this.ts.sendEscritorio(numero);
    this.router.navigate(['/escritorio' , numero]);
  }
}
