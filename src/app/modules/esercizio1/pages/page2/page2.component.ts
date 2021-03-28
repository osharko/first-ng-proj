import { Component, OnInit } from '@angular/core';
import { Esercizio1RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {

  public get RoutingEnum() { return Esercizio1RoutingEnum; }
  
  constructor(private toolbarService: ToolbarService) {
    toolbarService.title = "Page2";
  }
  ngOnInit(): void {
  }

}
