import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomBehaviorSubject } from 'src/app/model/CustomBehaviorSubject';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { ChangeDetectionService } from '../../services/change-detection.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {

 public time: CustomBehaviorSubject<Date> = new CustomBehaviorSubject<Date>(new Date());

  public get Counter() {
    this.cdService.cdCounter.Value++;
    return this.cdService.cdCounter.value$;
  }

  public options = [1,2,3,4,5,6,7,8,9,10];

  constructor(
    private cdService: ChangeDetectionService,
    private toolbarService: ToolbarService,
  ) {
    toolbarService.title = "Change Detection";
    setInterval(() => this.time.Value = new Date(), 450);
  }
}
