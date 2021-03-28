import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "Esercizio1", loadChildren: () => import("./modules/esercizio1/esercizio1.module").then(m => m.Esercizio1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
