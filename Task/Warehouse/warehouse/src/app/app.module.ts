import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocumentsComponent } from './documents/documents.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentDetailsComponent } from './documents/document-details/document-details.component';
import { DocFormComponent } from './documents/document-details/doc-form/doc-form.component';
import { DocListComponent } from './documents/document-details/doc-list/doc-list.component';
import { DocStatusComponent } from './documents/document-details/doc-status/doc-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    DocFormComponent,
    DocListComponent,
    DocStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
