import { Component } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { ChangeDetectionService } from '../../services/change-detection.service';

@Component({
  selector: 'app-no-change-detection',
  templateUrl: './no-change-detection.component.html',
})
export class NoChangeDetectionComponent {
  private time: Date = new Date();
  public get Time() {
    this.cdService.noCDCounter++;
    return this.time;
  }
  public set Time(time: Date) { this.time = time; }

  public get Counter() {
    return this.cdService.noCDCounter;
  }

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private cdService: ChangeDetectionService,
    private toolbarService: ToolbarService,
  ) {
    toolbarService.title = "No Change Detection";
    setInterval(() => this.Time = new Date(), 450);
  }
}
