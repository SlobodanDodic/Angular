import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaFormComponent } from './pizza/pizza-form/pizza-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzaListComponent,
    PizzaFormComponent,
    PizzaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
