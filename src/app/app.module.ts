import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PropertyCardComponentComponent } from './Components/property-card-component/property-card-component.component';
import { PropertyListComponent } from './Components/property-list/property-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyCardComponentComponent,
    PropertyListComponent,



  ],
  imports: [
    BrowserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
