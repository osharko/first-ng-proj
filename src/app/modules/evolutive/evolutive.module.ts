import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialNGModule } from '../material-ng/material-ng.module';
import { EvolutiveServicesModule } from './evolutive-services.module';
import { EvolutiveRoutingModule } from './evolutive-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { EntryComponent } from './pages/entry/entry.component';
import { VerticalStepComponent } from './components/vertical-step/vertical-step.component';
import { ZipComponent } from './pages/zip/zip.component';

@NgModule({
  declarations: [
    LandingComponent,
    EntryComponent,
    VerticalStepComponent,
    ZipComponent,
  ],
  imports: [
    CommonModule,
    EvolutiveRoutingModule,
    EvolutiveServicesModule,
    MaterialNGModule,
  ],
})
export class EvolutiveModule { }
