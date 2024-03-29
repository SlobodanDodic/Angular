import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookFormComponent } from './books/book-form/book-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:bookId', component: BookDetailsComponent },
  { path: 'add-book', component: BookFormComponent },
  { path: 'edit-book/:bookId', component: BookFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
