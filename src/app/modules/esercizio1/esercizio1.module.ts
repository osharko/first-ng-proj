import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Esercizio1RoutingModule } from './esercizio1-routing.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { MaterialNGModule } from '../material-ng/material-ng.module';


@NgModule({
  declarations: [Page1Component, Page2Component, Page3Component],
  imports: [
    CommonModule,
    Esercizio1RoutingModule,
    MaterialNGModule
  ]
})
export class Esercizio1Module { }
