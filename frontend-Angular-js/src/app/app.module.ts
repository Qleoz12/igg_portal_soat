import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconModule, menu } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';
import { InformacionVehiculoComponent } from './components/flow/informacion-vehiculo/informacion-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizarInicioComponent,
    InformacionVehiculoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
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
