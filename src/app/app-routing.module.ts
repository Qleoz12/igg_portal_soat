import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';

const routes: Routes = [
  {
    path: '',
    component: CotizarInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
