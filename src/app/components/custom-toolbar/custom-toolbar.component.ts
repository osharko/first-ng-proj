import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
})
export class CustomToolbarComponent {
  @Output() toggle = new EventEmitter();

}
