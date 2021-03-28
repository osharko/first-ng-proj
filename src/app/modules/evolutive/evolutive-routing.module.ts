import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    component: EntryComponent,
    children: [
      {
        path: "",
        component: LandingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvolutiveRoutingModule { }
