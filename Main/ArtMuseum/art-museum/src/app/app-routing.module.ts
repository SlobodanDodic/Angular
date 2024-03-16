import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionsComponent } from './exibitions/new-exibitions/new-exibitions.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exibitions', component: ExibitionsComponent },
  { path: 'exibitions/:id', component: ExibitionDetailsComponent },
  { path: 'new_exibitions', component: NewExibitionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
