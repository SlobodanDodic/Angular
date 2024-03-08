import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionsComponent } from './exibitions/new-exibitions/new-exibitions.component';
import { ExibitionItemComponent } from './exibitions/exibition-item/exibition-item.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ArtworkItemComponent } from './exibitions/exibition-details/artwork-item/artwork-item.component';
import { ExibitionEditComponent } from './exibitions/exibition-details/exibition-edit/exibition-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ExibitionsComponent,
    NewExibitionsComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
