import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "esercizio1", loadChildren: () => import("./modules/esercizio1/esercizio1.module").then(m => m.Esercizio1Module) },
  { path: "esercizio2", loadChildren: () => import("./modules/esercizio2/esercizio2.module").then(m => m.Esercizio2Module) },
  { path: "changedetection", loadChildren: () => import("./modules/changedetection/changedetection.module").then(m => m.ChangedetectionModule) },
  { path: "evolutive", loadChildren: () => import("./modules/evolutive/evolutive.module").then(m => m.EvolutiveModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
