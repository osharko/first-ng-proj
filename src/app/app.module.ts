import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomToolbarComponent } from './components/custom-toolbar/custom-toolbar.component';
import { MaterialNGModule } from './modules/material-ng/material-ng.module';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomToolbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
