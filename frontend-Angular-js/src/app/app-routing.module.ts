import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';
import { InformacionCompradorComponent } from './components/flow/informacion-comprador/informacion-comprador.component';
import { InformacionConfirmarComponent } from './components/flow/informacion-confirmar/informacion-confirmar.component';
import { InformacionVehiculoComponent } from './components/flow/informacion-vehiculo/informacion-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    component: CotizarInicioComponent
  },
  {
    path: 'primer-paso',
    component: InformacionVehiculoComponent
  },
  {
    path: 'segundo-paso',
    component: InformacionCompradorComponent
  }
  ,
  {
    path: 'tercer-paso',
    component: InformacionConfirmarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
