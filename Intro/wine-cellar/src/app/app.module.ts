import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineFormComponent } from './wine/wine-form/wine-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WinePaginationComponent } from './wine/wine-pagination/wine-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    WineFormComponent,
    WinePaginationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
