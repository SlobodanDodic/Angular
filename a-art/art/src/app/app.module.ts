import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ExibitionItemComponent } from './exibitions/exibtion-item/exibtion-item.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkItemComponent } from './exibitions/exibition-details/artwork-item/artwork-item.component';
import { ExibitionEditComponent } from './exibitions/exibition-details/exibition-edit/exibition-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExibitionsComponent,
    NewExibitionComponent,
    NavBarComponent,
    ExibitionItemComponent,
    ExibitionDetailsComponent,
    ArtworkItemComponent,
    ExibitionEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
