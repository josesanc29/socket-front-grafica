import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81], label: 'Ventas'}
  ];

  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(private http: HttpClient , 
              public ws: WebsocketService) { }

  ngOnInit() {
      // Pintar datos de grafica de manera random cada 3 segundos
      //
      // setInterval(() => {
      //   const newGraficaData = [
      //        Math.round( Math.random () * 100),
      //        Math.round( Math.random () * 100),
      //        Math.round( Math.random () * 100),
      //        Math.round( Math.random () * 100),
      //     ];

      //   this.lineChartData = [{
      //      data: newGraficaData , label: 'Ventas'
      //   }];

      // }, 3000 );
      this.getDatosGrafica();
      this.escucharSocketGrafica();

  }

  // Datos de la grafica via REST
  getDatosGrafica() {
    this.http.get('http://localhost:5000/grafica')
             .subscribe((datos: any) => {
                console.log(datos);
                this.lineChartData = datos;
             });
  }
  // Datos de la grafica via Socket
  escucharSocketGrafica() {
    this.ws.listen('cambio-grafica')
            .subscribe( (data: any) => {
              console.log(data);
              this.lineChartData = data;
            });
  }

}
