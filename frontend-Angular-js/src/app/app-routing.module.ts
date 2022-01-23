import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';
import { InformacionVehiculoComponent } from './components/flow/informacion-vehiculo/informacion-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    component: CotizarInicioComponent
  },
  {
    path: 'primer-paso',
    component: InformacionVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
