import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/modules/evolutive/services/sidebar.service';
import { IVerticalStep } from '../../components/vertical-step/vertical-step.component';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit, OnDestroy {
  @ViewChild(MatDrawer) public matDrawer?: MatDrawer;
  private subs: Subscription[] = [];
  public steps: IVerticalStep[] = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.subs = [
      this.sidebarService.toggle.value$.subscribe(() => this.matDrawer?.toggle()),
    ];

    this.steps = [
      { title: "Data Entry & Document Upload", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (LOP Creator)"] },
      { title: "Revenue Assignment & Final Submission", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (LOP Owner)"] },
      { title: "Signature", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (Secretary)", "Approved"] },
      { title: "Statistical Data & Invoicing", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (P&C Referent)", "Submitted on 01/05/2020 14:30 By Name Surname (Accounting Referent)", "Submitted on 01/05/2020 14:30 By Name Surname (P&C Referent)",] },
      { title: "Data Entry & Document Upload", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (LOP Creator)", "Review requested by customer on 01/05/2020 14:30"] },
      { title: "Revenue Assignment & Final Submission", rows: ["Submitted on 01/05/2020 14:30 By Name Surname (LOP Owner)"] },
      { title: "Signature", rows: [] },
    ];
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()); }
}
