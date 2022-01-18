import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconModule, menu } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizarInicioComponent } from './components/cotizar-inicio/cotizar-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizarInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
