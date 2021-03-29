import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/modules/evolutive/services/sidebar.service';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit, OnDestroy {
  @ViewChild(MatDrawer) public matDrawer?: MatDrawer;

  private subs: Subscription[] = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.subs = [
      this.sidebarService.toggle.value$.subscribe(() => this.matDrawer?.toggle()),
    ];
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()); }
}