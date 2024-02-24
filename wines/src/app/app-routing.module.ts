import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineFormComponent } from './wine/wine-form/wine-form.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';

const routes: Routes = [
 {path: 'wines', component: WineListComponent},
 {path: 'wines/add', component: WineFormComponent},
 {path: 'wines/:id', component: WineFormComponent},
 {path: '', redirectTo: '/wines', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
