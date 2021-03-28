import { Component, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/modules/evolutive/services/sidebar.service';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {

  constructor(
    private toolbarService: ToolbarService,
    private sidebarService: SidebarService,
  ) {
    this.toolbarService.title = "Evolutive";
  }

  public toggle() {
    this.sidebarService.toggle.Value = !this.sidebarService.toggle.Value;
  }
}