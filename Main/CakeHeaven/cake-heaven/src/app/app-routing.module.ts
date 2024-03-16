import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './cakes/cakes.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { CakeDetailsComponent } from './cakes/cake/cake-details/cake-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cakes', component: CakesComponent },
  { path: 'cakes/:id', component: CakeDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
