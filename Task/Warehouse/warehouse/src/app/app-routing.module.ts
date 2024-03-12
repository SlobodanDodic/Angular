import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailsComponent } from './documents/document-details/document-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'documents/:id', component: DocumentDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
