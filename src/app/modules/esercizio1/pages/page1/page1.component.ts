import { Component, OnInit } from '@angular/core';
import { Esercizio1RoutingEnum } from 'src/app/enum/routing.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {

  public get RoutingEnum() { return Esercizio1RoutingEnum; }

  constructor(private toolbarService: ToolbarService) {
    toolbarService.title = "Page1";
  }

  ngOnInit(): void {
  }

}
