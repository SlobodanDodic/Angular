import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './pets/pets.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:petId', component: PetDetailsComponent },
  { path: 'adoptions', component: AdoptionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
