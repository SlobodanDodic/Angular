import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './pets/pets.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { ToastComponent } from './core/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    PetsComponent,
    AdoptionsComponent,
    PetDetailsComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
