import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'riepilogo-box',
  templateUrl: './riepilogo-box.component.html',
})
export class RiepilogoBoxComponent {
  @Output() modifica = new EventEmitter();
  @Input() rows: string[] = [];
}
