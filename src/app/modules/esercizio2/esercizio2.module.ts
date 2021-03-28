import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Esercizio2RoutingModule } from './esercizio2-routing.module';
import { RiepilogoBoxComponent } from './components/riepilogo-box/riepilogo-box.component';
import { IntroduzioneComponent } from './pages/introduzione/introduzione.component';
import { DomandaComponent } from './pages/domanda/domanda.component';
import { RispostaComponent } from './pages/risposta/risposta.component';
import { RiepilogoComponent } from './pages/riepilogo/riepilogo.component';
import { MaterialNGModule } from '../material-ng/material-ng.module';
import { Esercizio2ServiceModule } from './esercizio2-service.module';

@NgModule({
  declarations: [RiepilogoBoxComponent, IntroduzioneComponent, DomandaComponent, RispostaComponent, RiepilogoComponent],
  imports: [
    CommonModule,
    Esercizio2ServiceModule,
    Esercizio2RoutingModule,
    MaterialNGModule,
  ]
})
export class Esercizio2Module { }
