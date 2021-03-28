import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent{
  
  constructor(private toolbarService: ToolbarService) {
    toolbarService.title = "Homepage";
  }

}
