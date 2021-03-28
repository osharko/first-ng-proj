import { Component, OnInit } from '@angular/core';
import { Esercizio1RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html'
})
export class Page3Component {

  public get RoutingEnum() { return Esercizio1RoutingEnum; }

  constructor(private toolbarService: ToolbarService) {
    toolbarService.title = "Page3";
  }
}
