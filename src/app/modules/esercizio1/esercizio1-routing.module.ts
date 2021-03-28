import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "Pagina2" },
  { path: "Pagina1", component: Page1Component },
  { path: "Pagina2", component: Page2Component },
  { path: "Pagina3", component: Page3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Esercizio1RoutingModule { }
