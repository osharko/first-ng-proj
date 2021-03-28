import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pagina1" },
  { path: "pagina1", component: Page1Component },
  { path: "pagina2", component: Page2Component },
  { path: "pagina3", component: Page3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Esercizio1RoutingModule { }
