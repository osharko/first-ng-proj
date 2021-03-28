import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { NoChangeDetectionComponent } from './pages/no-change-detection/no-change-detection.component';

const routes: Routes = [
  {path: "no-cd", pathMatch: "full", component: NoChangeDetectionComponent},
  {path: "cd", pathMatch: "full", component: ChangeDetectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangedetectionRoutingModule { }
