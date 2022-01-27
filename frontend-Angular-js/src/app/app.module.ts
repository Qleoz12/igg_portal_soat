import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconModule, menu } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';
import { InformacionVehiculoComponent } from './components/flow/informacion-vehiculo/informacion-vehiculo.component';
import { InformacionCompradorComponent } from './components/flow/informacion-comprador/informacion-comprador.component';
import { InformacionConfirmarComponent } from './components/flow/informacion-confirmar/informacion-confirmar.component';
import { InfoStepperComponent } from './components/curtoms/info-stepper/info-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizarInicioComponent,
    InformacionVehiculoComponent,
    InformacionCompradorComponent,
    InformacionConfirmarComponent,
    InfoStepperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeroIconModule.forRoot({
      menu
  }, {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
