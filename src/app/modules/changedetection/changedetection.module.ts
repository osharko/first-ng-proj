import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangedetectionRoutingModule } from './changedetection-routing.module';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { NoChangeDetectionComponent } from './pages/no-change-detection/no-change-detection.component';
import { ChangeDetectionServiceModule } from './change-detection-service.module';
import { MaterialNGModule } from '../material-ng/material-ng.module';


@NgModule({
  declarations: [ChangeDetectionComponent, NoChangeDetectionComponent],
  imports: [
    CommonModule,
    ChangedetectionRoutingModule,
    ChangeDetectionServiceModule,
    MaterialNGModule,
  ]
})
export class ChangedetectionModule { }
