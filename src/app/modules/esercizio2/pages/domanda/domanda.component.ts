import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Esercizio2RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { IDomanda } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-domanda',
  templateUrl: './domanda.component.html',
})
export class DomandaComponent {
  public domande: IDomanda[] = [];

  constructor(
    private dataService: DataService,
    private toolbarService: ToolbarService,
    private router: Router
  ) {
    this.toolbarService.title = `Domanda ${dataService.indiceDomanda}`;
    this.domande = this.dataService.domandeSicurezza.filter(domanda => !this.dataService.domandeSelezionate.map(d => d.idDomanda).includes(domanda.id));
  }

  public naviga(domanda: IDomanda) {
    this.dataService.domandaSelezionata = domanda;
    this.router.navigate([Esercizio2RoutingEnum.Risposta]);
  }
}