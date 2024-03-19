import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeItemComponent } from './cakes/cake-item/cake-item.component';
import { CakeDetailsComponent } from './cakes/cake-details/cake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    NavbarComponent,
    CakesComponent,
    CakeItemComponent,
    CakeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
