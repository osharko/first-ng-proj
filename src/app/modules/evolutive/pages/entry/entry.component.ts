import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { SidebarService } from 'src/app/modules/evolutive/services/sidebar.service';


@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit, OnDestroy {
  @ViewChild(MatDrawer) public matDrawer?: MatDrawer;

  private subs: Subscription[] = [];
  public tickle: Observable<boolean> = this.sidebarService.toggle.value$;

  constructor(private sidebarService: SidebarService,) { }

  ngOnInit(): void {

    this.sidebarService.toggle.value$.subscribe(toggle => {
      this.matDrawer?.toggle();
    });
    /* this.subs = [
      this.sidebarService.toggle.value$.subscribe(toggle => {
        debugger;
        if (toggle) {
          alert("ainsmps");
        }
      }),
    ]; */
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()); }
}