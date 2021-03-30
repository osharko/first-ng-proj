import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ZipComponent } from './pages/zip/zip.component';

const routes: Routes = [
  {
    path: "",
    component: EntryComponent,
    children: [
      { path: "", component: LandingComponent, },
      { path: "zip", component: ZipComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvolutiveRoutingModule { }
