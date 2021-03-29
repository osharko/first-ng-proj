import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Esercizio2RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
})
export class RiepilogoComponent {

  public get domandeSelezionate() { return this.dataService.domandeSelezionate.map(domanda => [domanda.domanda, domanda.risposta]); }

  constructor(
    private dataService: DataService,
    private toolbarService: ToolbarService,
    private router: Router
  ) {
    this.dataService.isRiepilogoReached = true;
    this.toolbarService.title = `Riepilogo`;
  }

  public navigate(index: number){
    this.dataService.domandeSelezionate[index].idDomanda = "";
    this.dataService.indiceDomanda = index+1;
    this.router.navigate([Esercizio2RoutingEnum.Domanda]);
  }

}
