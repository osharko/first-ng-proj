import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-step',
  templateUrl: './vertical-step.component.html',
})
export class VerticalStepComponent {
  @Input() title: string = "";
  @Input() rows: string[] = Array(3);
  @Input() last: boolean = false;
}

export interface IVerticalStep{
  title: string;
  rows: string[];
}