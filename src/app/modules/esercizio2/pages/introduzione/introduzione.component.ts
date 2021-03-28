import { Component, OnInit } from '@angular/core';
import { Esercizio2RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-introduzione',
  templateUrl: './introduzione.component.html',
})
export class IntroduzioneComponent {

  public get RoutingEnum() { return Esercizio2RoutingEnum; }

  constructor(private toolbarService: ToolbarService) {
    toolbarService.title = "Domande di Sicurezza";
  }

}
