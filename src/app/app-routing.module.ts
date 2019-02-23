import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { UsuarioGuard } from './guards/usuario-guard.service';
import { MapaComponent } from './components/mapa/mapa.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/publico/publico.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [ UsuarioGuard ]
  },
  {
    path: 'encuesta',
    component: GraficaComponent,
    canActivate: [ UsuarioGuard ]
  },
  {
    path: 'mapa',
    component: MapaComponent,
    canActivate: [ UsuarioGuard ]
  },
  { 
    path: 'escritorio/:id', 
    component: EscritorioComponent,
    canActivate: [ UsuarioGuard ] 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [ UsuarioGuard ] 
  },
  { 
    path: 'nuevo-ticket', 
    component: NuevoTicketComponent,
    canActivate: [ UsuarioGuard ] 
  },
  { path: 'publico',
    component: PublicoComponent,
    canActivate: [ UsuarioGuard ]
  },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( appRoutes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
