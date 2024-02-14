import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchFormComponent, PetListComponent, PetComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
