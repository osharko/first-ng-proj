import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Esercizio2RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { IRisposta } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-risposta',
  templateUrl: './risposta.component.html',
})
export class RispostaComponent {
  public risposte: IRisposta[] = [];

  constructor(
    private dataService: DataService,
    private toolbarService: ToolbarService,
    private router: Router
  ) {
    this.toolbarService.title = `${dataService.domandaSelezionata?.domanda}`;
    this.risposte = this.dataService.domandaSelezionata?.risposte || [];
  }

  public naviga(risposta: IRisposta) {

    this.dataService.domandeSelezionate[this.dataService.indiceDomanda-1] = {
      idDomanda: this.dataService.domandaSelezionata?.id || "",
      domanda: this.dataService.domandaSelezionata?.descrizione || "",
      idRisposta: risposta.id,
      risposta: risposta.risposta
    };
    
    debugger;
    
    this.router.navigate([++this.dataService.indiceDomanda > 3 || this.dataService.isRiepilogoReached ? Esercizio2RoutingEnum.Riepilogo : Esercizio2RoutingEnum.Domanda]);
  }
}
