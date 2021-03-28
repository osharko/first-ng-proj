import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandaComponent } from './pages/domanda/domanda.component';
import { IntroduzioneComponent } from './pages/introduzione/introduzione.component';
import { RiepilogoComponent } from './pages/riepilogo/riepilogo.component';
import { RispostaComponent } from './pages/risposta/risposta.component';
import { DomandeResolver } from './resolvers/domande.resolver';

const routes: Routes = [
  { path: "", pathMatch: "full", component: IntroduzioneComponent, resolve: { getDomande: DomandeResolver } },
  { path: "domanda", component: DomandaComponent },
  { path: "risposta", component: RispostaComponent },
  { path: "riepilogo", component: RiepilogoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Esercizio2RoutingModule { }
